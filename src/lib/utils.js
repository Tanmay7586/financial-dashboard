/**
 * Formats a number into a currency string (Crores or Lakhs).
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string (e.g., "₹12.19 Cr").
 */
export const formatCurrency = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`
  }
  if (value) {
    return `₹${value.toLocaleString('en-IN')}`
  }
  return '₹0'
}

/**
 * Formats a number into a percentage string with a plus or minus sign.
 * @param {number} value - The percentage value.
 * @returns {string} The formatted percentage string (e.g., "+0.77%").
 */
export const formatPercentage = (value) => {
  if (typeof value !== 'number') return '0.00%'
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
}

/**
 * A simple utility to add a delay.
 * @param {number} ms - The duration of the delay in milliseconds.
 * @returns {Promise<void>}
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
