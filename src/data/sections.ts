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
    id: 'hero-gallery',
    name: 'Hero Gallery',
    category: 'Hero',
    file: 'HeroGallery.astro',
    demo: {
      title: 'Medium length hero heading goes here',
      subtitle:
        'Pair a clear message with a living wall of images. Two columns drift in opposite directions – motion that draws the eye without stealing it.',
      primary: { label: 'Get started', href: '#' },
      secondary: { label: 'Learn more', href: '#' },
      images: [placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],
      bg: 'white',
    },
  },
  {
    id: 'hero-marquee',
    name: 'Hero Marquee',
    category: 'Hero',
    file: 'HeroMarquee.astro',
    demo: {
      title: 'Medium length hero heading goes here',
      subtitle:
        'Center your message, then let a horizontal wall of images drift past. Two rows glide in opposite directions – lively, never busy.',
      primary: { label: 'Get started', href: '#' },
      secondary: { label: 'Learn more', href: '#' },
      images: [placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],
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
  {
    id: 'feature-tabs',
    name: 'Feature Tabs',
    category: 'Tabs',
    file: 'FeatureTabs.astro',
    demo: {
      tabs: [
        {
          label: 'Tab one',
          tagline: 'Overview',
          title: 'Medium length section heading goes here',
          subtitle:
            'Show one idea at a time. Each tab swaps the image and copy, so a dense feature set reads as a calm, guided story.',
          image: placeholder,
          secondary: { label: 'Learn more', href: '#' },
          link: { label: 'Get started', href: '#' },
        },
        {
          label: 'Tab two',
          tagline: 'Flexible',
          title: 'Built to adapt as your product grows',
          subtitle:
            'Add, reorder or rename tabs by chatting – the layout, active underline and panel swap all keep working.',
          image: placeholder,
          secondary: { label: 'Learn more', href: '#' },
          link: { label: 'Get started', href: '#' },
        },
        {
          label: 'Tab three',
          tagline: 'Consistent',
          title: 'Ship consistent screens, faster',
          subtitle:
            'Shared tokens and the H1–H6 system keep every tab on-brand, so nothing drifts as you fill in real content.',
          image: placeholder,
          secondary: { label: 'Learn more', href: '#' },
          link: { label: 'Get started', href: '#' },
        },
      ],
      bg: 'white',
    },
  },
  {
    id: 'pricing',
    name: 'Pricing',
    category: 'Pricing',
    file: 'Pricing.astro',
    demo: {
      eyebrow: 'Pricing',
      title: 'Pricing plan',
      subtitle: 'Simple, transparent pricing. Switch between monthly and yearly – no surprises, cancel anytime.',
      plans: [
        {
          name: 'Basic plan',
          priceMonthly: '$19',
          priceYearly: '$180',
          features: ['Feature text goes here', 'Feature text goes here', 'Feature text goes here'],
          cta: { label: 'Get started', href: '#' },
        },
        {
          name: 'Business plan',
          priceMonthly: '$29',
          priceYearly: '$290',
          featured: true,
          badge: 'Most popular',
          features: ['Feature text goes here', 'Feature text goes here', 'Feature text goes here', 'Feature text goes here', 'Feature text goes here'],
          cta: { label: 'Get started', href: '#' },
        },
      ],
      bg: 'white',
    },
  },
  {
    id: 'testimonial',
    name: 'Testimonial',
    category: 'Testimonial',
    file: 'Testimonial.astro',
    demo: {
      items: [
        { quote: 'This kit saved us weeks. We described what we wanted and the sections just fell into place – on-brand from the first paste.', name: 'Emily Carter', role: 'Head of Design, Northwind', avatar: placeholder },
        { quote: 'The fact that every block is real, editable Astro – not locked HTML – is exactly why we picked it. No lock-in, all ours.', name: 'James Walker', role: 'Founder, Evergreen', avatar: placeholder },
      ],
      bg: 'white',
    },
  },
  {
    id: 'logos',
    name: 'Logos',
    category: 'Logo',
    file: 'Logos.astro',
    demo: {
      title: "Used by the world's leading companies",
      bg: 'white',
    },
  },
  {
    id: 'event-header',
    name: 'Event Header',
    category: 'Event',
    file: 'EventHeader.astro',
    demo: {
      backLabel: 'All events',
      title: 'Event title heading',
      subtitle: 'A short line about the event – what it is, who it is for and why it is worth saving a spot for.',
      dateLabel: 'Sat 10 Feb',
      spotsLabel: '10 spots left!',
      countdownTo: '2026-12-31T18:00:00',
      image: placeholder,
      ctaLabel: 'Save my spot',
      bg: 'white',
    },
  },
  {
    id: 'contact',
    name: 'Contact',
    category: 'Contact',
    file: 'Contact.astro',
    demo: {
      eyebrow: 'Contact',
      title: 'Contact us',
      subtitle: 'Questions, ideas or just saying hi? Drop us a line and we’ll get back to you.',
      submitLabel: 'Submit',
      bg: 'white',
    },
  },
  {
    id: 'feature-stack-cards',
    name: 'Feature Stack Cards',
    category: 'Features',
    file: 'FeatureStackCards.astro',
    demo: {
      eyebrow: 'Features',
      title: 'Medium length section heading goes here',
      subtitle:
        'Keep the pitch on the left while the proof stacks up on the right – each card sticks and piles on the previous as you scroll.',
      primary: { label: 'Button', href: '#' },
      secondary: { label: 'Button', href: '#' },
      cards: [
        { title: 'Subheading one', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.' },
        { title: 'Subheading two', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.' },
        { title: 'Subheading three', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.' },
        { title: 'Subheading four', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.' },
      ],
      bg: 'white',
    },
  },
  {
    id: 'feature-stack-sections',
    name: 'Feature Stack Sections',
    category: 'Features',
    file: 'FeatureStackSections.astro',
    demo: {
      features: [
        { navLabel: 'Feature one', eyebrow: 'Tagline', title: 'Medium length section heading goes here', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', primary: { label: 'Button', href: '#' }, secondary: { label: 'Button', href: '#' }, image: placeholder },
        { navLabel: 'Feature two', eyebrow: 'Tagline', title: 'A second story stacks over the first', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', primary: { label: 'Button', href: '#' }, secondary: { label: 'Button', href: '#' }, image: placeholder },
        { navLabel: 'Feature three', eyebrow: 'Tagline', title: 'Then a third slides into view', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', primary: { label: 'Button', href: '#' }, secondary: { label: 'Button', href: '#' }, image: placeholder },
        { navLabel: 'Feature four', eyebrow: 'Tagline', title: 'The nav tracks where you are', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', primary: { label: 'Button', href: '#' }, secondary: { label: 'Button', href: '#' }, image: placeholder },
      ],
      bg: 'white',
    },
  },
  {
    id: 'feature-expand',
    name: 'Feature Expand',
    category: 'Features',
    file: 'FeatureExpand.astro',
    demo: {
      eyebrow: 'Tagline',
      title: 'Heading goes here',
      subtitle: 'Hover a panel and it opens; the rest step aside. Great for a few punchy highlights.',
      panels: [
        { eyebrow: 'Tagline', title: 'Medium length section heading goes here', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: { label: 'Button', href: '#' }, image: placeholder },
        { eyebrow: 'Tagline', title: 'Medium length section heading goes here', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: { label: 'Button', href: '#' }, image: placeholder },
        { eyebrow: 'Tagline', title: 'Medium length section heading goes here', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', link: { label: 'Button', href: '#' }, image: placeholder },
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
