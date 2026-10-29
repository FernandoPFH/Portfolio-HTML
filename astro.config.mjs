// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({ site: 'https://fernandopfh.github.io', base: '/Portfolio-HTML',   vite: { server: { allowedHosts: true } } });