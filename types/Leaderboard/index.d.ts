import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export type Timing = "realtime" | "realtime_noloads" | "ingame";

export default interface Leaderboard {
  weblink: string;
  /**
   * ``game`` and ``category`` are always set, as they are mandatory.
   */
  game: string;
  /**
   * ``game`` and ``category`` are always set, as they are mandatory.
   */
  category: string;
  /**
   * ``level`` is set if it's an individual-level leaderboard.
   */
  level: string;
  /**
   * ``platform`` is an ID, when set.
   */
  platform: string;
  /**
   * ``region`` is an ID, when set.
   */
  region: string;
  /**
   * ``emulators`` is a nullable boolean.
   */
  emulators: boolean;
  /**
   *  ``video-only`` is a never null boolean.
   */
  "video-only": boolean;
  /**
   * ``timing`` can be one of ``realtime``, ``realtime_noloads`` or ``ingame``.
   */
  timing: Timing;
  /**
   *  ``values`` is a mapping between variable ID and value ID.
   */
  values: {
    [x: string]: string;
  };
  /**
   * Depending on the chosen filters, more links can appear in the ``links`` section.
   */
  links: [Link];
}

export interface LeaderboardParams {
  orderby?: "name";
  direction?: OrderDirections;
  /**
   * Only return the top N places (this can result in more than N runs!).
   */
  top?: number;
  /**
   * platform ID; when given, only returns runs done on that particular platform.
   */
  platform: string;
  /**
   * region ID; when given, only returns runs done in that particular region.
   */
  region: string;
  /**
   * When not given, real devices and emulators are shown. When set to a true value, only emulators are shown, else only real devices are shown.
   */
  emulators: string;
  /**
   * `false` by default; when set to a true value, only runs with a video will be returned.
   */
  "video-only": string;
  /**
   * Controls the sorting; can be one of `realtime`, `realtime_noloads` or `ingame`.
   */
  timing: Timing;
  /**
   * [ISO 8601 date string](https://en.wikipedia.org/wiki/ISO_8601#Dates); when given, only returns runs done before or on this date
   */
  date: string;
  /**
   * - Additional custom variable values. 
   * - To filter by custom variables, name the query string parameter ``var-[variable ID here]`` and use the
value ID as the value (for example, ``?var-m5ly6jn4=p12z471x``).
   */
  "var-___": string;
}

export interface LeaderboardResponse {
  data: Leaderboard;
}
