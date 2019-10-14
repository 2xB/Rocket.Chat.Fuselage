# Welcome to @rocket.chat/fuselage-hooks 👋

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/RocketChat/Rocket.Chat.Fuselage#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/RocketChat/Rocket.Chat.Fuselage/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/RocketChat/@rocket.chat/fuselage-hooks)](https://github.com/RocketChat/Rocket.Chat.Fuselage/blob/master/LICENSE)
[![Twitter: RocketChat](https://img.shields.io/twitter/follow/RocketChat.svg?style=social)](https://twitter.com/RocketChat)

> React Hooks for Fuselage, Rocket.Chat's design system

### 🏠 [Homepage](https://rocket.chat/Rocket.Chat.Fuselage)

## Install

```sh
yarn add @rocket.chat/fuselage-hooks
```

## Run tests

```sh
yarn test
```

## API Reference

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [useClassName](#useclassname)
    -   [Parameters](#parameters)
-   [useDebouncedUpdates](#usedebouncedupdates)
    -   [Parameters](#parameters-1)
-   [useDebouncedReducer](#usedebouncedreducer)
    -   [Parameters](#parameters-2)
-   [useDebouncedState](#usedebouncedstate)
    -   [Parameters](#parameters-3)
-   [useDebouncedCallback](#usedebouncedcallback)
    -   [Parameters](#parameters-4)
-   [useExclusiveBooleanProps](#useexclusivebooleanprops)
    -   [Parameters](#parameters-5)
-   [useMediaQuery](#usemediaquery)
    -   [Parameters](#parameters-6)
-   [useMergedRefs](#usemergedrefs)
    -   [Parameters](#parameters-7)
-   [useToggle](#usetoggle)
    -   [Parameters](#parameters-8)

### useClassName

Hook to generate a BEM-compatible `className` value for a component.

#### Parameters

-   `componentClassName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the style class which identifies the component
-   `modifiers` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the modifiers applied to the style class (optional, default `{}`)
-   `classNames` **...[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the additional style classes appended to the `className`

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** a BEM-compatible `className` in the format
 `(<block>|<block>__<element>) [...(<block>--<modifier>|<block>__<element>--<modifier>)] [...classNames]`

### useDebouncedUpdates

Hook to debounce the state updater function returned by hooks like `useState()` and `useReducer()`.

#### Parameters

-   `pair` **\[any, [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** the state and updater pair which will be debounced
    -   `pair.0` **any** the state value
    -   `pair.1` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** the state updater function
-   `delay` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of milliseconds to delay the updater

Returns **\[any, [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** a state value and debounced updater pair

### useDebouncedReducer

Hook to create a reduced state with a debounced `dispatch()` function.

#### Parameters

-   `reducer` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** the reducer function
-   `initializerArg` **any** the initial state value or the argument passed to the initial state generator function
-   `initializer` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** the initial state generator function
-   `delay` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of milliseconds to delay the updater

Returns **\[any, [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** a state and debounced `dispatch()` function

### useDebouncedState

Hook to create a state with a debounced setter function.

#### Parameters

-   `initialValue` **(any | [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** the initial state value or the initial state generator function
-   `delay` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of milliseconds to delay the updater

Returns **\[any, [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** a state and debounced setter function

### useDebouncedCallback

Hook to memoize a debounced version of a callback.

#### Parameters

-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** the callback to debounce
-   `delay` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of milliseconds to delay
-   `deps` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any> | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** the hook dependencies

Returns **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** a memoized and debounced callback

### useExclusiveBooleanProps

Hook for asserting mutually exclusive boolean props. Useful for components that use boolean props
to choose styling variants.

#### Parameters

-   `props` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the mutually exclusive boolean props


-   Throws **[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)** if two or more booleans props are set as true

### useMediaQuery

Hook to listen to a media query.

#### Parameters

-   `query` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the CSS3 media query expression

Returns **bool** `true` if the media query matches; `false` is it does not match or the query is not defined

### useMergedRefs

Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
while receiving a forwared ref.

#### Parameters

-   `refs` **...([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** the refs and callback refs that should be merged

Returns **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** a merged callback ref

### useToggle

Hook to create a toggleable boolean state.

#### Parameters

-   `initialValue` **(any | [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** the initial value or the initial state generator function

Returns **\[any, [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** a state boolean value and a state toggler function

## Author

👤 **Rocket.Chat**

-   Twitter: [@RocketChat](https://twitter.com/RocketChat)
-   Github: [@RocketChat](https://github.com/RocketChat)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/RocketChat/Rocket.Chat.Fuselage/issues).

## Show your support

Give a ⭐️ if this project helped you!

* * *

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_