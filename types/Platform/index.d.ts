import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Platform {
  id: string;
  name: string;
  released: number;
  links: [Link];
}

export interface PlatformParams {
  orderby: {
    name: OrderDirections;
    released: OrderDirections;
  };
}

export interface PlatformResponse {
  data: Platform;
  pagination: Pagination;
}

export interface PlatformsResponse {
  data: [Platform];
  pagination: Pagination;
}
