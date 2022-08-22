import { decode, encode } from 'safe-json-decode';

/**
 * Get stored value in localStorage
 *
 * @param key  local storage key
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  null on failure or if item doesn't exist, decoded JSON if stored value is valid JSON, otherwise the value stored as is
 */
const getStoredItem = (key: string, throwOnError: boolean = false): any => {
	try {
		const value = localStorage.getItem(key);
		if (value === null) return null;
		return decode(value) || value;
	} catch (e) {
		if (throwOnError) throw e;
		return null;
	}
};

/**
 * Store value in localStorage
 *
 * @param key  local storage key
 * @param data  the data to store, encoded to json if it is an object or array
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  true on success, false on failure
 */
const setStoredItem = (
	key: string,
	data: any,
	throwOnError: boolean = false
): boolean => {
	try {
		const value =
			data instanceof Object || Array.isArray(data) ? encode(data) : data;
		localStorage.setItem(key, value);
		return true;
	} catch (e) {
		if (throwOnError) throw e;
		return false;
	}
};
/**
 * remove item from localStorage
 *
 * @param key  local storage key
 * @param throwOnError  optional boolean indicating if errors should be thrown when error is caught, default is false
 * @returns  true on success, false on failure
 */
const removeStoredItem = (
	key: string,
	throwOnError: boolean = false
): boolean => {
	try {
		localStorage.removeItem(key);
		return true;
	} catch (e) {
		if (throwOnError) throw e;
		return false;
	}
};

export { getStoredItem, setStoredItem, removeStoredItem };
