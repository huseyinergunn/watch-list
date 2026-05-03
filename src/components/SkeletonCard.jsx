/* Arama sonuçları için yatay skeleton */
export const SkeletonResultCard = () => (
  <div className="flex gap-3 p-3 rounded-xl glass border-white/5">
    <div className="shrink-0 w-11 h-16 rounded-lg skeleton-shimmer" />
    <div className="flex-1 py-1 space-y-2.5">
      <div className="h-3 skeleton-shimmer rounded-full w-3/4" />
      <div className="h-2.5 skeleton-shimmer rounded-full w-1/3 opacity-60" />
    </div>
    <div className="flex items-center gap-1.5 shrink-0">
      <div className="w-8 h-8 skeleton-shimmer rounded-full" />
      <div className="w-8 h-8 skeleton-shimmer rounded-full" />
    </div>
  </div>
);

/* Grid için dikey skeleton */
export const SkeletonMovieCard = () => (
  <div className="rounded-xl overflow-hidden aspect-[2/3] ring-1 ring-white/5">
    <div className="w-full h-full skeleton-shimmer" />
  </div>
);
