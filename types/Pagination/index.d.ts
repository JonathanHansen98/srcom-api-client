export default interface Pagination {
  offset: number;
  max: number;
  size: number;
  link: [{ rel: string; uri: string }];
}
