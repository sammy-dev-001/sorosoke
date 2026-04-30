import React, { useEffect, useRef } from 'react';
import { usePlacesWidget } from "react-google-autocomplete";

const GooglePlacesInput = ({ label, placeholder, value, onChange, name, id, leftIcon: LeftIcon, apiKey }) => {
  // Check if API key is valid (not empty and not the placeholder)
  const isApiKeyValid = apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE' && apiKey.trim() !== '';

  const { ref: autocompleteRef } = usePlacesWidget({
    apiKey: isApiKeyValid ? apiKey : undefined,
    onPlaceSelected: (place) => {
      onChange({
        target: {
          name: name,
          value: place.formatted_address || place.name,
        },
      });
    },
    options: {
      types: ["geocode", "establishment"],
      componentRestrictions: { country: "ng" },
    },
  });

  const fallbackRef = useRef(null);
  const inputRef = isApiKeyValid ? autocompleteRef : fallbackRef;

  // Sync value for controlled input
  useEffect(() => {
    if (inputRef.current && value !== undefined) {
      inputRef.current.value = value;
    }
  }, [value, inputRef]);

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
        <input
          ref={inputRef}
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className={`w-full bg-[#f2f6f9] border border-slate-200 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#335368]/20 focus:border-[#335368]/40 transition-all ${
            LeftIcon ? 'pl-10' : ''
          }`}
          onChange={onChange}
        />
      </div>
      {!isApiKeyValid && (
        <p className="text-[11px] text-slate-400 italic">
          * Location autocomplete is disabled (Missing API Key)
        </p>
      )}
    </div>
  );
};

export default GooglePlacesInput;
