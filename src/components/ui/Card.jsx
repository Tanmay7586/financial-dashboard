'use client'

import PropTypes from 'prop-types'

/**
 * A reusable card component with consistent styling.
 * It acts as a container for other content.
 * @param {{
 * children: React.ReactNode,
 * className?: string,
 * onClick?: () => void
 * }} props
 */
export default function Card({ children, className = '', onClick }) {
  const cardClasses = `
    bg-white dark:bg-gray-800 
    rounded-lg shadow-sm 
    border border-gray-200 dark:border-gray-700 
    p-6 transition-shadow duration-300 
    hover:shadow-md 
    ${className}
    ${onClick ? 'cursor-pointer' : ''}
  `

  return (
    <div className={cardClasses.trim()} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
