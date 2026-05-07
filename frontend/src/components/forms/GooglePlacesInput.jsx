import React, { useEffect, useRef } from 'react';
import { usePlacesWidget } from "react-google-autocomplete";

// Sub-component that actually uses the Google Maps hook
const AutocompleteInput = ({ apiKey, onPlaceSelected, options, inputProps, inputRef }) => {
  const { ref } = usePlacesWidget({
    apiKey,
    onPlaceSelected,
    options,
  });

  // We need to sync the ref from usePlacesWidget with the one passed from parent if needed,
  // but usePlacesWidget provides its own ref. We'll use a local effect to sync values.
  return (
    <input
      ref={ref}
      {...inputProps}
    />
  );
};

const GooglePlacesInput = ({ label, placeholder, value, onChange, name, id, leftIcon: LeftIcon, apiKey }) => {
  // Check if API key is valid (not empty and not the placeholder)
  const isApiKeyValid = apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE' && apiKey.trim() !== '';

  const handlePlaceSelected = (place) => {
    onChange({
      target: {
        name: name,
        value: place.formatted_address || place.name,
      },
    });
  };

  const options = {
    types: ["geocode", "establishment"],
    componentRestrictions: { country: "ng" },
  };

  const inputStyles = `w-full bg-[#f2f6f9] border border-slate-200 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all ${
    LeftIcon ? 'pl-10' : ''
  }`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-[#335368] font-medium text-[15px]">
        {label}
      </label>
      <div className="relative flex items-center">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-600">
            <LeftIcon size={18} strokeWidth={2.5} />
          </div>
        )}
        
        {isApiKeyValid ? (
          <AutocompleteInput
            apiKey={apiKey}
            onPlaceSelected={handlePlaceSelected}
            options={options}
            inputProps={{
              id,
              name,
              placeholder,
              className: inputStyles,
              defaultValue: value,
              onChange: onChange
            }}
          />
        ) : (
          <input
            type="text"
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            className={inputStyles}
            onChange={onChange}
          />
        )}
      </div>
      {/* Autocomplete disabled message removed */}
    </div>
  );
};

export default GooglePlacesInput;
