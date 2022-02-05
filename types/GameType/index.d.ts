import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface GameType {
  id: string;
  name: string;
  links: [Link];
}

export interface GameTypeParams {
  orderby?: "name";
  direction: OrderDirections;
}

export interface GameTypeResponse {
  data: GameType;
  pagination: Pagination;
}

export interface GameTypesResponse {
  data: [GameType];
  pagination: Pagination;
}
