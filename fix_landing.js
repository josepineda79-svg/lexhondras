import fs from 'fs';
let content = fs.readFileSync('src/components/Landing.tsx', 'utf-8');
const search = `      )}
    </div>
  );
}`;
const replace = `      )}
      </div>
    </div>
  );
}`;
content = content.replace(search, replace);
fs.writeFileSync('src/components/Landing.tsx', content);
