/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-bottom': 'radial-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-radial-top': 'radial-gradient(at top, var(--tw-gradient-stops))',
        'blog-heading-gradient': " url('https://plexus.baltic-galaxy.de/assets/images/baltic-home-1.png')",
        'bg-kessel': " url('https://plexus.baltic-galaxy.de/assets/baltic/kessel.png')",
        'bg-umbara': " url('https://plexus.baltic-galaxy.de/assets/baltic/umbara.png')",
        'bg-tatooine': " url('https://plexus.baltic-galaxy.de/assets/baltic/tatooine-wp.png')",
        'bg-hoth': " url('https://plexus.baltic-galaxy.de/assets/baltic/hoth-wp.png')",
        'bg-endor': " url('https://plexus.baltic-galaxy.de/assets/baltic/endor-wp.png')",
        'bg-snow': " url('https://plexus.baltic-galaxy.de/assets/baltic/snow.png')",
        'blog-article-gradient': "linear-gradient(to right top, rgba(1, 2, 3, 1), rgba(0, 0, 0, 0.0))",
        'apply-card-radial': 'radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0) 100%)',
        'team-card-radial': "radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        'header-radial': "radial-gradient(70.19% 92.24% at 50% 100%, rgba(0, 255, 178, 0.12) 0%, rgba(0, 255, 178, 0) 100%);",
        'gradient-blog-post-header': "linear-gradient(0deg, #000 22.38%, rgba(31, 23, 21, 0) 64.2%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
      },
      backgroundColor: {
        'bal-blue': '#0d1116',
        'baltic-tuerkis': '#00FFB2',
        'bal-yellow': '#EECE88',
      },
      textColor: {
        'baltic-tuerkis': '#00FFB2',
        'bal-blue': '#7E89B1',
        'bal-yellow': '#EECE88',
      },
      listStyleImage: {
        checkmark: 'url("/assets/images/icons/check.png")',
      },
    },
  },
  plugins: [],
}
