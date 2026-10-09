import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                sakura: {
                    bg: '#16131F',       // Back in Black (Fondo global)
                    card: '#4A3F4B',     // Funkie Friday (Tarjetas/Contenedores)
                    border: '#806C79',   // Moonscape (Bordes y trazos)
                    text: '#C1A0AC',     // Decanting (Texto secundario / Muted)
                    accent: '#F0D9E4',   // Mountain Heather (Texto principal / Highlight)
                }
            }
        },
    },

    plugins: [forms],
};