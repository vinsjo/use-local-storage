import { decode, encode } from 'safe-json-decode';
import { useState, useEffect } from 'react';
import { Dispatch } from 'react';

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

/**
 * synchronize state with localStorage
 *
 * @param storageKey  key to item in localStorage
 * @param initialState  optional parameter with initial state or function returning initial state. only stored in localStorage if nothing is already stored with the provided key or overwrite is set to true, default is null
 * @param overwrite  optional parameter indicates if initialState should overwrite already stored value, default is false
 */
const useLocalStorage = (
	storageKey: string,
	initialState: any | (() => any) = null,
	overwrite: boolean = false
): [any, Dispatch<any>] => {
	const [didMount, setDidMount] = useState(false);

	const [key, setKey] = useState(storageKey);

	const [state, setState] = useState(() => {
		const initialValue =
			typeof initialState === 'function' ? initialState() : initialState;
		const stored = getStoredItem(key);
		return overwrite || (!stored && initialState !== stored)
			? initialValue
			: stored;
	});

	useEffect(() => {
		if (!didMount || storageKey === key) return;
		removeStoredItem(key);
		setKey(storageKey);
	}, [didMount, storageKey, key, setKey]);

	useEffect(() => {
		setStoredItem(key, state);
	}, [state, key]);

	useEffect(() => {
		setDidMount(true);
	}, []);

	return [state, setState];
};

export { getStoredItem, setStoredItem, removeStoredItem };
export default useLocalStorage;
