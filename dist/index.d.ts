declare const axios: any;
declare const BASE_URL = "https://www.speedrun.com/api/v1";
declare type GameSortParams = "name.int" | "name.jap" | "abbreviation" | "released" | "created" | "similarity";
declare type OrderDirections = "asc" | "desc";
declare type GameParams = {
    name?: string;
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
};
declare type GameResponse = {
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
};
declare class SRComClient {
    #private;
    constructor(apiKey: string);
    private get;
    getGames(params: GameParams): Promise<GameResponse>;
    getGame(id: any, params: any): Promise<any>;
    getPlatform(id: any, params: any): Promise<any>;
    getPlatforms(params: any): Promise<any>;
    getGenre(id: any, params: any): Promise<any>;
    getGenres(params: any): Promise<any>;
    getGameType(id: any, params: any): Promise<any>;
    getGameTypes(params: any): Promise<any>;
    getEngine(id: any, params: any): Promise<any>;
    getEngines(params: any): Promise<any>;
    getPublisher(id: any, params: any): Promise<any>;
    getPublishers(params: any): Promise<any>;
    getRun(id: any, params: any): Promise<any>;
    getRuns(params: any): Promise<any>;
}
