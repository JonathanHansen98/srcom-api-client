import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Game {
  /**
   * `id` values can vary in length.
   */
  id: string;

  names: {
    international: string;
    /**
     * The japanese title can be `null`.
     */
    japanese: string;
    twitch: string;
  };

  abbreviation: string;

  /**
   * - `weblink` is the link to get to this game's page intended for humans, links are meant for the API client.
   * - **Do not** use the ``abbreviation`` to manually construct a game's full web URL, instead always
  use the provided ``weblink``. We might change the URL scheme on the frontend at any time without
  prior notice!
   */
  weblink: string;
  /**
   *  @deprecated ``released`` is a legacy value that has been superceded by ``release-date``
   */
  released: number;
  "release-date": Date;
  ruleset: {
    "show-milliseconds": boolean;
    "require-verification": boolean;
    "require-video": boolean;
    /**
     * ``ruleset.run-times`` is a list of times that can/should be given for any run of that game and
  can be contain any combination of ``realtime``, ``realtime_noloads`` and ``ingame``. The
  corresponding ``default-time`` determines which is the primary one.
     */
    "run-times": [string];
    "default-time": string;
    "emulators-allowed": boolean;
  };
  /**
   * `created` can be null for games that have been added in the early days of speedrun.com.
   */
  created: Date;
  /**
   *  @deprecated ``romhack`` is a legacy value that has been superceded by ``gametypes``.
   */
  romhack: boolean;
  /**
   *  ``gametypes`` is a list of game types IDs set for the game. This list can be empty.
   */
  gametypes: [string];
  /**
   *  ``platforms`` is a list of platform IDs the game can be played on. This list can be empty.
   */
  platforms: [string];
  /**
   *
   */
  regions: [string];
  /**
   * `regions`` is a list of region IDs the game is available in. This list can be empty.
   */
  genres: [string];
  /**
   * ``genres`` is a list of genre IDs set for the game. This list can be empty.
   */
  engines: [string];
  /**
   * ``developers`` is a list of developer IDs set for the game. This list can be empty.
   */
  developers: [string];
  /**
   * ``publishers`` is a list of publisher IDs set for the game. This list can be empty.
   */
  publishers: [string];
  /**
   *``moderators`` is a mapping of user IDs to their roles within the game. Possible roles are
  ``moderator`` and ``super-moderator`` (super moderators can appoint other users as moderators).
   ``assets`` are links to images that are used for that game on speedrun.com. Except for
  ``background``, ``foreground`` and ``trophy-4th``, all links are always given, even if they
  point to empty placeholder images.
   */
  moderators: {
    [x: string]: string;
  };
  /**
   *   ``width`` and ``height`` are pixel values.
   */
  assets: {
    [x: string]: {
      uri: string;
      width: string;
      height: string;
    };
  };
  /**
   * - ``links.base-game`` is only returned for games that have a base game set.
   * - ``links.series`` can appear multiple times, as games can be in multiple series.
   * - ``links.romhacks`` is a legacy value. New code should use ``derived-games`` instead.
   */
  links: [Link];
}

declare type GameSortParams =
  | "name.int"
  | "name.jap"
  | "abbreviation"
  | "released"
  | "created"
  | "similarity";

export interface GameParams {
  /**
   * when given, performs a fuzzy search across game names and abbreviations
   */
  name?: string;
  /**
   * when given, performs an exact-match search for this abbreviation
   */
  abbreviation?: string;
  /**
   * 	when given, restricts to games released in that year
   */
  released?: number;
  /**
   *	game type ID; when given, restricts to that game type
   */
  gametype?: string;
  /**
   * 	platform ID; when given, restricts to that platform
   */
  platform?: string;
  /**
   * region ID; when given, restricts to that region
   */
  region?: string;
  /**
   * genre ID; when given, restricts to that genre
   */
  genre?: string;
  /**
   * engine ID; when given, restricts to that engine
   */
  engine?: string;
  /**
   * developer ID; when given, restricts to that developer
   */
  developer?: string;
  /**
   * publisher ID; when given, restricts to that publisher
   */
  publisher?: string;
  /**
   * moderator ID; when given, only games moderated by that user will be returned
   */
  moderator?: string;
  /**
   * @deprecated
   * legacy parameter, do not use this in new code; whether or not to include games with game types (if this parameter is not set, game types are included; if it is set to a true value, only games with game types will be returned, otherwise only games without game types are returned)
   */
  romhack?: boolean;
  /**
   * You can control the sorting by using the query string parameters orderby and direction.
   * - See the [Docs](https://github.com/speedruncomorg/api/blob/master/version1/games.md#get-games) for detailed sort params.
   */
  orderby?: GameSortParams;
  /**
   * The direction can be either asc or desc.
   */
  direction?: OrderDirections;
}

export interface GamesResponse {
  data: [Game];
  pagination: Pagination;
}

export interface GameResponse {
  data: Game;
  pagination: Pagination;
}
