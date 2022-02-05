import Link from "../Link";
import { OrderDirections } from "../OrderDirections";
import Pagination from "../Pagination";

export default interface Publisher {
  id: string;
  name: string;
  links: [Link];
}

export interface PublisherParams {
  orderby?: "name";
  direction: OrderDirections;
}

export interface PublisherResponse {
  data: Publisher;
  pagination: Pagination;
}

export interface PublishersResponse {
  data: [Publisher];
  pagination: Pagination;
}
