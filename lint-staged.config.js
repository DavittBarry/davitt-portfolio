module.exports = {
  '*.{js,jsx,ts,tsx,astro,mjs,cjs}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.{json,md}': ['prettier --write'],
};
