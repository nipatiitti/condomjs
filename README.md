# CondomJS

Safe and thin wrapper component for React when you need to use [penis.js](https://github.com/edankwan/penis.js)

If `B==D` (or `B===D` with `isHard` prop) it will render the Children otherwise it will render nothing

## Installation

Use npm or yarn to install CondomJS.

```bash
npm install condomjs
```

or

```bash
yarn add condomjs
```

## Usage

Basic usage:

```javacsript
import Condom from 'condomjs'

<Condom D={1} B={'1'} isHard >
    <Children />
</Condom>
```

### API:

| Name     | Type          | Required | Default |
| -------- | ------------- | -------- | ------- |
| D        | Object        | no       |         |
| B        | Object        | no       |         |
| ishard   |  bool         | no       |  false  |
| children | node / [node] | no       | ' '     |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Giant Penis License (GPL)](http://giant-penis-license.org/)
