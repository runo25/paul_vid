/**
 * Utility functions for transforming boarding pass JSON structures.
 */

/**
 * Updates the flight date in a boarding pass JSON structure.
 * 
 * @param {Object} data - The original boarding pass JSON object.
 * @param {string} newDate - The new date string to set (e.g., "26 JUN").
 * @returns {Object} A new boarding pass JSON object with the updated date.
 */
export function updateFlightDate(data, newDate) {
  if (!data || !data.boarding_pass || !data.boarding_pass.flight_details) {
    throw new Error("Invalid boarding pass JSON structure");
  }

  return {
    ...data,
    boarding_pass: {
      ...data.boarding_pass,
      flight_details: {
        ...data.boarding_pass.flight_details,
        date: newDate
      }
    }
  };
}

/**
 * Transforms the original boarding pass JSON format into the target format.
 * Specifically converts the date from "05 JUL 2026" format to "26 JUN" format.
 * 
 * @param {Object} sourceJson - The source boarding pass JSON.
 * @returns {Object} The transformed boarding pass JSON.
 */
export function transformBoardingPass(sourceJson) {
  return updateFlightDate(sourceJson, "26 JUN");
}
