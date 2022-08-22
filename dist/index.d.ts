import { Dispatch } from 'react';
/**
 * synchronize state with localStorage
 *
 * @param storageKey  key to item in localStorage
 * @param initialState  optional parameter with initial state or function returning initial state. only stored in localStorage if nothing is already stored with the provided key or overwrite is set to true, default is null
 * @param overwrite  optional parameter indicates if initialState should overwrite already stored value, default is false
 */
declare const useLocalStorage: (storageKey: string, initialState?: any | (() => any), overwrite?: boolean) => [any, Dispatch<any>];
export default useLocalStorage;
