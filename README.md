# beeline-ui


I've created this module for using beeline design system in a more comfort way, also this module can help to other React Native developers to build their UI.

[![npm](https://img.shields.io/npm/v/@temirtator/beeline-ui)](https://www.npmjs.com/package/@temirtator/beeline-ui)
[![npm](https://img.shields.io/npm/dt/@temirtator/beeline-ui)](https://www.npmjs.com/package/@temirtator/beeline-ui)
[![NPM](https://img.shields.io/npm/l/@temirtator/beeline-ui)](https://choosealicense.com/licenses/gpl-3.0/)

## Installation

Use the package manager [npm](https://npmjs.com/) to install package.

```
npm install @temirtator/beeline-ui
```

## Usage

```
const removeSpaces = require("@temirtator/beeline-ui");

removeSpaces("So much space!");
//=> "Somuchspace!"

removeSpaces(1337);
//=> Uncaught TypeError: Function wants a string!
//    at removeSpaces (<anonymous>:2:41)
//    at <anonymous>:1:1
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
