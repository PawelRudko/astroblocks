// Raw source of each block, served on demand so the gallery never inlines 500 sources.
// The Copy button fetches /raw/<id> and copies the response. Scales to any number of blocks.
import type { APIRoute } from 'astro';
import { registry } from '../../data/sections';

const raws = import.meta.glob('../../components/sections/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const byFile: Record<string, string> = {};
for (const [path, src] of Object.entries(raws)) byFile[path.split('/').pop() as string] = src;

export function getStaticPaths() {
  return registry.map((s) => ({ params: { id: s.id }, props: { file: s.file } }));
}

export const GET: APIRoute = ({ props }) => {
  const src = byFile[(props as { file: string }).file] || '';
  return new Response(src, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=31536000, immutable' },
  });
};
