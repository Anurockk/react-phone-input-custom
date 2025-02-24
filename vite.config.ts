import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from "node:path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "ReactPhoneInputCustom",
            fileName: (format) => `index.${format}.js`,
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});