import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Plugin to defer CSS loading and reduce render-blocking
    {
      name: 'defer-css',
      apply: 'build',
      transformIndexHtml(html) {
        // Replace render-blocking stylesheet links with deferred versions
        return html.replace(
          /<link([^>]*?)rel="stylesheet"([^>]*?)>/g,
          '<link$1rel="stylesheet" media="print" onload="this.media=\'all\'"$2><noscript><link$1rel="stylesheet"$2></noscript>'
        );
      }
    }
  ]
});