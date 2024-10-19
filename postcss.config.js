// postcss.config.js
import postcss_import from 'postcss-import'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcss_import(),
    tailwindcss(),
    autoprefixer(),
  ],
};
