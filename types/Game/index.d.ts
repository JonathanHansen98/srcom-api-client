import { OrderDirections } from "../OrderDirections";
import { Pagination } from "../Pagination";

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
  released?: number;
  gametype?: string;
  platform?: string;
  region?: string;
  genre?: string;
  engine?: string;
  developer?: string;
  publisher?: string;
  moderator?: string;
  orderby?: GameSortParams;
  direction?: OrderDirections;
  bananas?: string;
}

export interface Game {
  names: {
    international: string;
    japanese: string;
    twitch: string;
  };
  abbreviation: string;
  weblink: string;
  released: number;
  "release-date": Date;
  ruleset: {
    "show-milliseconds": boolean;
    "require-verification": boolean;
    "require-video": boolean;
    "run-times": [string];
    "default-time": string;
    "emulators-allowed": boolean;
  };
}

export interface GamesResponse {
  data: [Game];
  pagination: Pagination;
}

export interface GameResponse {
  data: Game;
  pagination: Pagination;
}
