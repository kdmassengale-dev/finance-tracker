const fs = require('fs');
const path = require('path');

const dirs = [
  'finance-tracker-backend/src/routes',
  'finance-tracker-backend/src/services',
  'finance-tracker-backend/prisma',
  'finance-tracker-frontend/src/pages',
  'finance-tracker-frontend/public'
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

console.log('✅ Directories created!');
console.log('Next: git add . && git commit -m "Initial commit" && git push origin main');
