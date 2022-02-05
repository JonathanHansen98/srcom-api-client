import {
  GameParams,
  GameResponse,
  GamesResponse,
  PlatformParams,
  PlatformsResponse,
  PlatformResponse,
  GameTypeParams,
  GameTypesResponse,
  GameTypeResponse,
  GenreParams,
  GenresResponse,
  GenreResponse,
  DeveloperParams,
  DevelopersResponse,
  DeveloperResponse,
  PublisherParams,
  PublishersResponse,
  PublisherResponse,
  EngineParams,
  EnginesResponse,
  EngineResponse,
} from "./types";

export default class SRComClient {
  constructor(apiKey: string);
  /**
   * This will return a list of all games.
   * - Note that giving invalid values for platform, region or moderator will result in an HTTP 404 error instead of an empty list. This is on purpose, because asking to filter by non-existing elements should be something an API client should notice.
   * - You can control the sorting by using the query string parameters orderby and direction.
   *  - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-games)
   * @param params Sort parameters.
   */
  getGames(params: GameParams): Promise<GamesResponse>;

  /**
   * This will retrieve a single game, identified by its ID. Instead of the game's ID, you can also specify the game's abbreviation. When an abbreviation was found, the API will respond with a redirect the the ID-based URL (so `/api/v1/games/aoe1` will be redirected to `/api/v1/games/nj1nowdp`).
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-gamesid)
   * @param {string} id Game ID
   * @param {object} params Query Params
   */
  getGame(id: string, params: GameParams): Promise<GameResponse>;

  /**
   * This will return all platforms.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/platforms.md#get-platforms)
   * @param params Sort parameters.
   */
  getPlatforms(params: PlatformParams): Promise<PlatformsResponse>;

  /**
   * This will retrieve a single platform, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/platforms.md#get-platformsid)
   * @param {string} id Platform ID
   * @param {object} params Query Params
   */
  getPlatform(id: string, params: PlatformParams): Promise<PlatformResponse>;

  /**
   * This will return all genres.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/genres.md#get-genres)
   * @param params Sort parameters.
   */
  getGenres(params: GenreParams): Promise<GenresResponse>;

  /**
   * This will retrieve a single genre, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/genres.md#get-genresid)
   * @param {string} id Genre ID
   * @param {object} params Query Params
   */
  getGenre(id: string, params: GenreParams): Promise<GenreResponse>;

  /**
   * This will return all game types.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/gametypes.md#get-gametypes)
   * @param params Sort parameters.
   */
  getGameTypes(params: GameTypeParams): Promise<GameTypesResponse>;

  /**
   * This will retrieve a single game type, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/gametypes.md#get-gametypesid)
   * @param {string} id Genre ID
   * @param {object} params Query Params
   */
  getGameType(id: string, params: GameTypeParams): Promise<GameTypeResponse>;

  /**
   * This will return all game types.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/engines.md#get-engines)
   * @param params Sort parameters.
   */
  getEngines(params: EngineParams): Promise<EnginesResponse>;

  /**
   * This will retrieve a single game type, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/engines.md#get-enginesid)
   * @param {string} id Genre ID
   * @param {object} params Query Params
   */
  getEngine(id: string, params: EngineParams): Promise<EngineResponse>;

  /**
   * This will return all developers.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/developers.md#get-developers)
   * @param params Sort parameters.
   */
  getDevelopers(params: DeveloperParams): Promise<DevelopersResponse>;

  /**
   * This will retrieve a single developer, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/developers.md#get-developersid)
   * @param {string} id Developer ID
   * @param {object} params Query Params
   */
  getDeveloper(id: string, params: DeveloperParams): Promise<DeveloperResponse>;

  /**
   * This will return all publishers.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/publishers.md#get-publishers)
   * @param params Sort parameters.
   */
  getPublishers(params: PublisherParams): Promise<PublishersResponse>;

  /**
   * This will retrieve a single publisher, identified by its ID.
   * - [Docs](https://github.com/speedruncomorg/api/blob/master/version1/publishers.md#get-publishersid)
   * @param {string} id Publisher ID
   * @param {object} params Query Params
   */
  getPublisher(id: string, params: PublisherParams): Promise<PublisherResponse>;
}
