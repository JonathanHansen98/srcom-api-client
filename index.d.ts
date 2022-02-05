import { GameParams, GameResponse, GamesResponse } from "./types/Game";
import { Pagination } from "./types/Pagination";
/**
 * Speedrun.com API Client
 */
export default class SRComClient {
  constructor(apiKey: string);
  /**
   * This will return a list of all games.
   * Note that giving invalid values for platform, region or moderator will result in an HTTP 404 error instead of an empty list. This is on purpose, because asking to filter by non-existing elements should be something an API client should notice.
   * You can control the sorting by using the query string parameters orderby and direction. The direction can be either asc or desc, the possible values for orderby are listed below.
   *  - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-games)
   */
  getGames(params: GameParams): Promise<GamesResponse>;

  /**
   * This will retrieve a single game, identified by its ID. Instead of the game's ID, you can also specify the game's abbreviation. When an abbreviation was found, the API will respond with a redirect the the ID-based URL (so `/api/v1/games/aoe1` will be redirected to `/api/v1/games/nj1nowdp`).
   * - https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-gamesid
   */
  getGame(id: string, params: GameParams): Promise<GameResponse>;
}
