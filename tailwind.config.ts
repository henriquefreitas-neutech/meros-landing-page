import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'meros-primary': 'var(--meros-primary)',
        'meros-primary-hover': 'var(--meros-primary-hover)',
        'meros-primary-subtle': 'var(--meros-primary-subtle)',
        'meros-text-strong': 'var(--meros-text-strong)',
        'meros-text-body': 'var(--meros-text-body)',
        'meros-border': 'var(--meros-border)',
        'meros-surface-subtle': 'var(--meros-surface-subtle)',
        'meros-surface-inverse': 'var(--meros-surface-inverse)',
        'meros-logo': 'var(--meros-logo)',
        'meros-logo-inset': 'var(--meros-logo-inset)',
        'meros-device': 'var(--meros-device)',
        'meros-device-ring': 'var(--meros-device-ring)',
      },
      boxShadow: {
        'meros-float': 'var(--meros-shadow-float)',
        'meros-device': 'var(--meros-shadow-device)',
        'meros-feature': 'var(--meros-shadow-feature)',
        'meros-drawer': 'var(--meros-shadow-drawer)',
      },
    },
  },
  plugins: [],
};

export default config;
