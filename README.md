# srcom-api

An API client for the speedrun.com API written in Js.

## Usage

```
import SRComClient from "srcom-api";

const SRCom = new SRComClient(YOUR_API_KEY);

(async () => {
  const response = await SRCom.getGames();

  console.log(response);
})();
```

## API Documentation
For more info on how to use the API see the [Official API Documentaion](https://github.com/speedruncomorg/api).