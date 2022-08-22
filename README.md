# @vinsjo/use-local-storage

`@vinsjo/use-local-storage` a react hook for storing a state in localStorage

Package is bundled using [microbundle](https://www.npmjs.com/package/microbundle)

## Installation

`npm i @vinsjo/use-local-storage`

## Usage

```js
import useLocalStorage from '@vinsjo/use-local-storage';

const App = () => {
    const [storedState, setStoredState] = useLocalStorage(
        // storageKey:
        // key to item in localStorage
        'my-storage-key',
        // initialState:
        // optional parameter with initial state or function returning initial state.
        // only stored in localStorage if nothing is already stored with the provided
        // key OR overwrite is set to true.
        // default value is null
        { foo: 'bar' },
        // overwrite:
        // optional parameter indicates if initialState should overwrite already
        // stored value.
        // default value is false
        false
    );

    return <>{storedState.foo}</>;
};
```
