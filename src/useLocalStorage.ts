import { useState, useEffect } from 'react';
import { Dispatch } from 'react';
import { getStoredItem, setStoredItem, removeStoredItem } from './storage';

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
		return overwrite || (!stored && initialValue && initialState !== stored)
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

export default useLocalStorage;
