import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Developer {
  id: string;
  name: string;
  links: [Link];
}

export interface DeveloperParams {
  orderby?: "name";
  direction: OrderDirections;
}

export interface DeveloperResponse {
  data: Developer;
  pagination: Pagination;
}

export interface DevelopersResponse {
  data: [Developer];
  pagination: Pagination;
}
