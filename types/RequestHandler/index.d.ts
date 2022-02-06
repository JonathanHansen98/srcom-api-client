import {
  DeveloperParams,
  DeveloperResponse,
  DevelopersResponse,
  EngineParams,
  EngineResponse,
  EnginesResponse,
  GameParams,
  GameResponse,
  GamesResponse,
  GameTypeParams,
  GameTypeResponse,
  GameTypesResponse,
  GenreParams,
  GenreResponse,
  GenresResponse,
  PlatformParams,
  PlatformResponse,
  PlatformsResponse,
  PublisherParams,
  PublisherResponse,
  PublishersResponse,
} from "..";

export type HandlerParams =
  | GameParams
  | GameTypeParams
  | DeveloperParams
  | EngineParams
  | GenreParams
  | PlatformParams
  | PublisherParams;

export type HandlerResponse =
  | GameResponse
  | GamesResponse
  | GameTypeResponse
  | GameTypesResponse
  | DeveloperResponse
  | DevelopersResponse
  | EngineResponse
  | EnginesResponse
  | GenreResponse
  | GenresResponse
  | PlatformResponse
  | PlatformsResponse
  | PublisherResponse
  | PublishersResponse;
