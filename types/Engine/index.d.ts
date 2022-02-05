import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Engine {
  id: string;
  name: string;
  links: [Link];
}

export interface EngineParams {
  orderby?: "name";
  direction: OrderDirections;
}

export interface EngineResponse {
  data: Engine;
  pagination: Pagination;
}

export interface EnginesResponse {
  data: [Engine];
  pagination: Pagination;
}
