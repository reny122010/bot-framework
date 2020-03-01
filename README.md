# Bot-framework

Bot-framework is a framework built on nodejs and aims to help in the creation of search engines or search robots for content.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install bot-framework.

```bash
npm install
```

## Test

Checks the functionalities responsible for the smooth functioning of the framework.

```bash
npm test
```

## Usage

```javascript
var Bot = require('bot-framework');

var Spider = new Bot();

var attribute = {
   url : 'https://teste.com.br',
   description_name : 'spider',
   controller_name : 'ctr_spider'
}

Spider.initialize(attribute);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
