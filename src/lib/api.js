// A central place for API fetching logic

/**
 * Fetches data from a given API endpoint.
 * @param {string} endpoint - The API endpoint to fetch from (e.g., '/api/dashboard').
 * @param {object} [options={}] - Optional fetch options (method, headers, body, etc.).
 * @returns {Promise<any>} The JSON response from the API.
 * @throws {Error} If the network response is not ok.
 */
export async function fetcher(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);

    if (!response.ok) {
      const errorInfo = await response.json().catch(() => ({})); // Try to get more info
      const error = new Error(
        `An error occurred while fetching the data: ${response.statusText}`
      );
      error.status = response.status;
      error.info = errorInfo;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetcher Error:", error);
    throw error;
  }
}
