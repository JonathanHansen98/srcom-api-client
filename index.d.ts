export const BASE_URL: string;

export default class SRComClient {
  constructor(apiKey: string);
  getGames(param: SRComClient.GameParams): SRComClient.GameResponse;
}

declare namespace SRComClient {
  export interface GameParams {
    name?: string;
    abbreviation?: string;
  }

  export interface GameResponse {
    names?: {
      international?: string;
      japanese?: string;
      twitch?: string;
    };
  }
}
