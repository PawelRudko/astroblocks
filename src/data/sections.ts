// Single source of truth for the gallery + previews + thumbnails.
// Adding a section = adding an entry here. The rest (card, filter, /preview, copy) happens by itself.
// NOTE: component demo content is in ENGLISH (the product targets the EN market).

export interface SectionEntry {
  id: string;
  name: string;
  category: string;
  file: string; // file name in src/components/sections/
  demo: Record<string, unknown>;
}

// shared image placeholder (swap in your own in public/ or via props)
const placeholder = '/placeholder-landscape.svg';

export const registry: SectionEntry[] = [
  {
    id: 'navbar',
    name: 'Navbar',
    category: 'Nav',
    file: 'NavBar.astro',
    demo: {
      brand: 'Northwind',
      ctaLabel: 'Start free',
      signInLabel: 'Sign in',
      announcement: { badge: 'NEW', text: 'Northwind 3.0 just launched — 40% faster pipelines.', linkLabel: 'Read more', href: '#' },
    },
  },
  {
    id: 'hero-centered',
    name: 'Hero Centered',
    category: 'Hero',
    file: 'HeroCentered.astro',
    demo: {
      eyebrow: 'DESIGN STUDIO',
      title: 'We design brands people actually remember.',
      subtitle:
        'Websites, identities and digital products for companies that want to truly stand out – not just look nice.',
      primary: { label: 'View portfolio', href: '#' },
      secondary: { label: 'Get in touch', href: '#' },
      link: { label: 'Our services', href: '#' },
      image: placeholder,
      bg: 'white',
    },
  },
  {
    id: 'hero-split',
    name: 'Hero Split',
    category: 'Hero',
    file: 'HeroSplit.astro',
    demo: {
      eyebrow: 'PRODUCT',
      title: 'Everything your team needs, in one place.',
      subtitle:
        'Plan, build and ship without switching tabs. Fast, focused, and built to scale with you.',
      primary: { label: 'Start free', href: '#' },
      secondary: { label: 'Book a demo', href: '#' },
      link: { label: 'Explore features', href: '#' },
      image: placeholder,
      bg: 'white',
    },
  },
  {
    id: 'team-grid',
    name: 'Team Grid',
    category: 'Team',
    file: 'TeamGrid.astro',
    demo: {
      eyebrow: 'OUR TEAM',
      title: 'The people behind the work.',
      subtitle: 'A small, senior team of designers and engineers you actually get to work with.',
      members: [
        { name: 'Emily Carter', image: placeholder, href: '#' },
        { name: 'James Walker', image: placeholder, href: '#' },
        { name: 'Sophie Bennett', image: placeholder, href: '#' },
        { name: 'Daniel Evans', image: placeholder, href: '#' },
        { name: 'Olivia Brooks', image: placeholder, href: '#' },
      ],
      bg: 'white',
    },
  },
  {
    id: 'blog-grid',
    name: 'Blog Grid',
    category: 'Blog',
    file: 'BlogGrid.astro',
    demo: {
      title: 'Related posts',
      posts: [
        { date: 'Nov 3, 2025', category: 'Design', title: 'Understanding color theory in modern interface design', image: placeholder, href: '#' },
        { date: 'Nov 3, 2025', category: 'Marketing', title: 'How color theory influences brand perception and trust', image: placeholder, href: '#' },
        { date: 'Nov 3, 2025', category: 'Solution', title: 'Using color theory to create clear and effective digital solutions', image: placeholder, href: '#' },
      ],
      bg: 'white',
    },
  },
  {
    id: 'faq',
    name: 'FAQ',
    category: 'FAQ',
    file: 'FAQ.astro',
    demo: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about the blocks and building with Astro.',
      items: [
        { q: 'How do I customize the blocks to match my brand?', a: 'Copy a block, then just tell Claude Code what to change – colors, fonts, spacing, copy. Every block ships with design tokens and clear conventions, so changes stay consistent across the whole kit.' },
        { q: 'Can I use these blocks in multiple projects?', a: 'Yes. Once you own the kit the blocks are yours to reuse across as many personal and client projects as you like – no per-site fee.' },
        { q: 'Are the blocks mobile responsive?', a: 'Every block is built responsive from the start and tested down to small screens, with sensible breakpoints you can fine-tune by chatting.' },
        { q: 'Do I need to know how to code?', a: 'No. You describe what you want in plain language and the code is written for you. Knowing a little Astro or CSS helps, but it is not required to ship.' },
        { q: 'Which framework do the blocks use?', a: 'Plain Astro with scoped styles and zero required dependencies. Drop a block into any Astro project and it works – copy-paste, not an npm package you have to wire up.' },
      ],
      bg: 'white',
    },
  },
  {
    id: 'card-hover',
    name: 'Card Hover',
    category: 'Card',
    file: 'CardHover.astro',
    demo: {
      title: 'Reusable building blocks for your design system',
      items: [
        { title: 'Build faster with ready-made components', description: 'Speed up your workflow with ready-to-use, high-quality building blocks.', image: placeholder, href: '#' },
        { title: 'Ship without reinventing the wheel', description: 'Every block is polished, responsive and ready to drop into your Astro project.', image: placeholder, href: '#' },
        { title: 'Stay consistent as you scale', description: 'Shared tokens and conventions keep the whole system coherent, block after block.', image: placeholder, href: '#' },
      ],
      bg: 'white',
    },
  },
  {
    id: 'card-list',
    name: 'Card List',
    category: 'Card',
    file: 'CardList.astro',
    demo: {
      title: 'Reusable building blocks for your design system',
      subtitle: 'Structured components built for consistency, speed and scalability in Astro.',
      items: [
        { subheader: 'Subheader', title: 'Minimal components', image: placeholder, href: '#' },
        { subheader: 'Subheader', title: 'Flexible layouts', image: placeholder, href: '#' },
        { subheader: 'Subheader', title: 'Accessible by default', image: placeholder, href: '#' },
        { subheader: 'Subheader', title: 'Ready to customize', image: placeholder, href: '#' },
      ],
      bg: 'white',
    },
  },
];

// cards with a per-category label (HERO 01, HERO 02, BLOG 01...) — shared by / and /blocks
const catCount: Record<string, number> = {};
export const cards = registry.map((s) => {
  catCount[s.category] = (catCount[s.category] || 0) + 1;
  return { ...s, label: `${s.category.toUpperCase()} ${String(catCount[s.category]).padStart(2, '0')}` };
});

export const categories = ['All', ...Array.from(new Set(registry.map((s) => s.category)))];
export const countFor = (cat: string) =>
  cat === 'All' ? registry.length : registry.filter((s) => s.category === cat).length;
