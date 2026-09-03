import fs from 'fs';

let content = fs.readFileSync('src/components/Landing.tsx', 'utf-8');

const oldModal = `  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#9ce3ec] to-[#60c4d5]">`;

const newModal = `  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-[#9ce3ec] to-[#60c4d5]">
      <div className="min-h-full w-full flex items-center justify-center py-8 px-4">`;

content = content.replace(oldModal, newModal);

// Close the inner wrapper at the end
const oldEnd = `      )}
    </div>
  );
}`;

const newEnd = `      )}
      </div>
    </div>
  );
}`;

content = content.replace(oldEnd, newEnd);

// Reduce padding in step 1
content = content.replace(
  /<div className="bg-white w-\[600px\] rounded-2xl shadow-2xl p-10 animate-in fade-in slide-in-from-bottom-4 duration-300">/g,
  '<div className="bg-white w-full max-w-[600px] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">'
);
content = content.replace(
  /<div className="bg-white w-\[500px\] rounded-2xl shadow-2xl p-10 animate-in fade-in slide-in-from-bottom-4 duration-300">/g,
  '<div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">'
);
content = content.replace(
  /<div className="bg-white w-\[500px\] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">/g,
  '<div className="bg-white w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">'
);


// Adjust margins in step 2
content = content.replace(
  /<div className="grid grid-cols-2 gap-4 mb-10">/g,
  '<div className="grid grid-cols-2 gap-4 mb-6">'
);
content = content.replace(
  /className={\`border rounded-xl p-4 text-center transition-all outline-none \${isSelected/g,
  'className={`border rounded-xl p-3 text-center transition-all outline-none ${isSelected'
);

// Adjust margins in step 3
content = content.replace(
  /<div className="flex flex-col gap-3 mb-12">/g,
  '<div className="flex flex-col gap-2 mb-6">'
);
content = content.replace(
  /className="w-full text-left border border-slate-200 rounded-lg p-3.5 text-sm/g,
  'className="w-full text-left border border-slate-200 rounded-lg p-3 text-sm'
);

// Adjust margins in step 1
content = content.replace(
  /<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">/g,
  '<div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6">'
);

fs.writeFileSync('src/components/Landing.tsx', content);
