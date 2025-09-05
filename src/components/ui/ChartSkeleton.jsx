export default function ChartSkeleton() {
  return (
    <div className="card h-full flex flex-col">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-3/5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
      {/* Chart Area Skeleton */}
      <div className="flex-grow h-64 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-gray-300/30 dark:via-gray-600/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
