import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [react()],
    css: {
      modules: {
        // If environment is not Prod include the name of the component for stylesheets.
        generateScopedName: isProd
          ? `[hash:base64:8]`
          : `[name]_[local]_[hash:base64:5]`,
      },
    },
  };
});
