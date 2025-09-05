'use client'

export default function LoadingSpinner({ size = 'md', color = 'red' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  const colorClasses = {
    red: 'border-red-600',
    blue: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-500',
  }

  const spinnerSize = sizeClasses[size] || sizeClasses.md
  const spinnerColor = colorClasses[color] || colorClasses.red

  return (
    <div
      className={`animate-spin rounded-full border-b-2 ${spinnerSize} ${spinnerColor}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}