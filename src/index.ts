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
const getStoredItem = <T = unknown>(
	key: string,
	throwOnError = false
): T | null => {
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
const setStoredItem = <T = unknown>(
	key: string,
	data: T,
	throwOnError = false
): boolean => {
	try {
		const value = typeof data === 'string' ? data : encode(data);
		if (typeof value !== 'string') throw 'Invalid Value';
		if (!value) localStorage.setItem(key, value);
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
const removeStoredItem = (key: string, throwOnError = false): boolean => {
	try {
		localStorage.removeItem(key);
		return true;
	} catch (e) {
		if (throwOnError) throw e;
		return false;
	}
};

export type InitialState<T> = T extends () => T ? () => T : T;

/**
 * synchronize state with localStorage
 *
 * @param storageKey  key to item in localStorage
 * @param initialState  optional parameter with initial state or function returning initial state. only stored in localStorage if nothing is already stored with the provided key or overwrite is set to true, default is null
 * @param overwrite  optional parameter indicates if initialState should overwrite already stored value, default is false
 */
const useLocalStorage = <T = unknown>(
	storageKey: string,
	initialState?: InitialState<T>,
	overwrite = false
): [T, Dispatch<React.SetStateAction<T>>] => {
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
		if (!didMount) return setDidMount(true);
		if (storageKey === key) return;
		removeStoredItem(key);
		setKey(storageKey);
	}, [didMount, storageKey, key, setKey]);

	useEffect(() => {
		setStoredItem(key, state);
	}, [state, key]);

	return [state, setState];
};

export default useLocalStorage;
