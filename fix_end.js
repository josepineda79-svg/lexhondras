import fs from 'fs';
let content = fs.readFileSync('src/components/Landing.tsx', 'utf-8');
content = content.replace(
  `      )}
    </div>
  );
}

// Minimal icon stub for missing Lucide icons to prevent errors if not imported above`,
  `      )}
      </div>
    </div>
  );
}

// Minimal icon stub for missing Lucide icons to prevent errors if not imported above`
);
fs.writeFileSync('src/components/Landing.tsx', content);
