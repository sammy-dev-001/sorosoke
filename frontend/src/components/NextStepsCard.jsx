import React from 'react';
import { ListTodo } from 'lucide-react';

const StepItem = ({ number, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
      {number}
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-[15px] mb-1">{title}</h4>
      <p className="text-slate-500 text-[13px] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const NextStepsCard = () => {
  const steps = [
    {
      number: 1,
      title: "Stay Safe",
      description: "Ensure you are in a secure environment. If you feel immediate danger, please contact local emergency services immediately."
    },
    {
      number: 2,
      title: "Reach out to a trusted person",
      description: "Sharing your experience with a friend, family member, or professional can provide vital emotional support during this time."
    },
    {
      number: 3,
      title: "Visit the resource directory",
      description: "Explore our curated list of legal, medical, and psychological support services tailored to your specific needs."
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-[1.5rem] p-8 h-full">
      <div className="flex items-center gap-3 mb-8">
        <ListTodo className="text-slate-400 w-6 h-6" />
        <h3 className="text-xl font-bold text-slate-800">Immediate Next Steps</h3>
      </div>
      
      <div className="flex flex-col gap-8">
        {steps.map((step) => (
          <StepItem 
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NextStepsCard;
