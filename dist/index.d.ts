import { Dispatch } from 'react';
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
/**
 * synchronize state with localStorage
 *
 * @param storageKey  key to item in localStorage
 * @param initialState  optional parameter with initial state or function returning initial state. only stored in localStorage if nothing is already stored with the provided key or overwrite is set to true, default is null
 * @param overwrite  optional parameter indicates if initialState should overwrite already stored value, default is false
 */
declare const useLocalStorage: (storageKey: string, initialState?: any | (() => any), overwrite?: boolean) => [any, Dispatch<any>];
export { getStoredItem, setStoredItem, removeStoredItem };
export default useLocalStorage;
