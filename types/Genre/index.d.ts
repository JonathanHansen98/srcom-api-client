import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Genre {
  id: string;
  name: string;
  links: [Link];
}

export interface GenreParams {
  orderby?: "name";
  direction: OrderDirections; }
}

export interface GenreResponse {
  data: Genre;
  pagination: Pagination;
}

export interface GenresResponse {
  data: [Genre];
  pagination: Pagination;
}
