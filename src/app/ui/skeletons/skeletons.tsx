const shimmer = "";

export function CatalogCardSkeleton() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 hover:duration-300">
      <div className="relative w-full h-48">
        <div className="w-full h-full absolute inset-0 object-cover bg-gray-200 animate-pulse" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 bg-gray-200 animate-pulse h-6 w-1/2" />
        <div className="text-gray-700 text-base bg-gray-200 animate-pulse h-4 w-3/4" />
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
      </div>
    </div>
  );
}

export function CatalogGallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(12)].map((_, i) => (
        <CatalogCardSkeleton key={i} />
      ))}
    </div>
  );
}
