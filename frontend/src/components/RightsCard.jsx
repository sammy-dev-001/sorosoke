import React from 'react';
import { ExternalLink, Scale } from 'lucide-react';

const RIGHTS_DATA = {
  police_brutality: {
    title: "Your Rights Against Police Brutality",
    intro: "The Nigerian Police Act 2020 and the Constitution protect you from unlawful treatment by law enforcement.",
    rights: [
      "Right to remain silent and not be forced to make statements (Section 35, 1999 Constitution)",
      "Right to humane treatment and dignity during arrest (Police Act 2020, Section 33)",
      "Right to know the reason for your arrest immediately (Section 35(3), Constitution)",
      "Right to legal representation and to contact family"
    ],
    law: "Police Act 2020 & 1999 Constitution (as amended)"
  },
  sexual_harassment: {
    title: "Your Rights Against Sexual Harassment",
    intro: "The Violence Against Persons Prohibition (VAPP) Act 2015 criminalizes all forms of sexual harassment in Nigeria.",
    rights: [
      "Right to report without facing stigma or retaliation (VAPP Act, Section 1)",
      "Right to protection from the perpetrator during investigation",
      "Right to receive medical and psychological support services",
      "Right to have your case heard regardless of your gender or relationship to the perpetrator"
    ],
    law: "VAPP Act 2015 & Criminal Code Act"
  },
  lastma_extortion: {
    title: "Your Rights Against LASTMA Extortion",
    intro: "No government official has the right to demand money from you unlawfully.",
    rights: [
      "Right to request proper identification from any officer",
      "Right to refuse to pay bribes or illegal fines",
      "Right to record interactions with officials in public spaces",
      "Right to report corrupt officials without retaliation"
    ],
    law: "Criminal Code Act & Lagos State Transport Sector Reform Law 2018"
  },
  landlord_dispute: {
    title: "Your Rights as a Tenant",
    intro: "The Lagos State Tenancy Law 2011 and common law protect you from unfair landlord practices.",
    rights: [
      "Right to proper notice before eviction (varies by tenancy type)",
      "Right to quiet enjoyment of your rented property",
      "Right to challenge arbitrary rent increases at the Rent Tribunal",
      "Right to recover your deposit and seek legal remedy for wrongful actions"
    ],
    law: "Lagos State Tenancy Law 2011"
  },
  corruption: {
    title: "Your Rights When Reporting Corruption",
    intro: "The Corrupt Practices and Other Related Offences Act 2000 empowers you to report bribery and corruption.",
    rights: [
      "Right to report corruption confidentially to ICPC or EFCC",
      "Whistleblower protection under the Federal Ministry of Finance guidelines",
      "Right to protection from victimization or dismissal for reporting",
      "Entitlement to a percentage of recovered funds in certain whistleblower cases"
    ],
    law: "ICPC Act 2000 & Whistleblower Protection Policy 2016"
  },
  workplace_abuse: {
    title: "Your Rights Against Workplace Abuse",
    intro: "The Nigerian Labour Act and the VAPP Act protect you from abuse and harassment at work.",
    rights: [
      "Right to a safe and harassment-free work environment",
      "Right to report abuse without losing your job (VAPP Act, Section 1)",
      "Right to fair wages and reasonable working conditions (Labour Act, Section 9)",
      "Right to seek legal remedy for constructive dismissal or hostile environment"
    ],
    law: "Labour Act Cap L1 LFN 2004 & VAPP Act 2015"
  },
  other: {
    title: "Your Rights When Reporting",
    intro: "Every individual has the right to a life free from violence, harassment, and unlawful treatment.",
    rights: [
      "Confidentiality and anonymity when reporting sensitive incidents",
      "Fair treatment by authorities and access to legal counsel",
      "Support services regardless of your status or background",
      "The right to have your complaint acknowledged and addressed"
    ],
    law: "1999 Constitution of the Federal Republic of Nigeria (as amended)"
  }
};

const RightsCard = ({ category = 'other' }) => {
  const data = RIGHTS_DATA[category] || RIGHTS_DATA.other;

  return (
    <div className="bg-[#e6eff5] rounded-[1.5rem] p-8 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-700">
          <Scale size={20} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Know Your Rights</h3>
      </div>
      
      <div className="flex-grow">
        <p className="text-slate-600 text-[15px] leading-relaxed mb-4 font-medium">
          {data.intro}
        </p>
        
        <p className="text-slate-700 font-semibold text-[14px] mb-3">You have the right to:</p>
        
        <ul className="space-y-3 mb-6">
          {data.rights.map((right, index) => (
            <li key={index} className="text-slate-600 text-[14px] pl-4 border-l-2 border-slate-300 leading-relaxed">
              {right}
            </li>
          ))}
        </ul>
        
        <p className="text-slate-400 text-[12px] font-medium">
          Legal basis: {data.law}
        </p>
      </div>

      <a 
        href="#" 
        className="inline-flex items-center gap-2 text-slate-800 font-semibold text-[14px] hover:underline transition-all mt-4"
        onClick={(e) => e.preventDefault()}
      >
        Explore full legal guide
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default RightsCard;