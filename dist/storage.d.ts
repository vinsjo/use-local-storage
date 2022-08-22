/**
 * Get stored value in localStorage
 *
 * @param key  local storage key
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  null on failure or if item doesn't exist, decoded JSON if stored value is valid JSON, otherwise the value stored as is
 */
declare const getStoredItem: (key: string, throwOnError?: boolean) => any;
/**
 * Store value in localStorage
 *
 * @param key  local storage key
 * @param data  the data to store, encoded to json if it is an object or array
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  true on success, false on failure
 */
declare const setStoredItem: (key: string, data: any, throwOnError?: boolean) => boolean;
/**
 * remove item from localStorage
 *
 * @param key  local storage key
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  true on success, false on failure
 */
declare const removeStoredItem: (key: string, throwOnError?: boolean) => boolean;
export { getStoredItem, setStoredItem, removeStoredItem };
