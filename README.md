# srcom-api

An implementation of the speedrun.com API written in Js.

## Table of Contents

- [Usage](#usage)
- [Documentation](#documentation)
- [Resources](#resources)


## Usage

```js
import SRComClient from "srcom-api";

const SRCom = new SRComClient(<YOUR_API_KEY>);

(async () => {
  const response = await SRCom.getGames();

  console.log(response);
})();
```

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const SRComClient = require('srcom-api').default;

const SRCom = new SRComClient(<YOUR_API_KEY>);
```

## Documentation

Check out the SRCom Class API [here.](https://jonathanhansen98.github.io/srcom-api-client/classes/SRComClient.html)

## Resources
Official speedrun.com [API Documentation](https://github.com/speedruncomorg/api).