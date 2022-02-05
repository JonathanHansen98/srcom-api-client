import axios from "axios";

export default class SRComClient {
  #API_KEY;
  BASE_URL = "https://www.speedrun.com/api/v1";

  constructor(apiKey) {
    this.#API_KEY = apiKey;
  }

  async #requestHandler(path, params) {
    return (
      await axios.get(path, {
        headers: { "X-API-Key": this.#API_KEY },
        params,
      })
    ).data;
  }

  async getGames(params) {
    return await this.#requestHandler(`${this.BASE_URL}/games`, params);
  }

  async getGame(id, params) {
    return await this.#requestHandler(`${this.BASE_URL}/games/${id}`, params);
  }

  async getPlatform(id, params) {
    return await this.#requestHandler(
      `${this.BASE_URL}/platforms/${id}`,
      params
    );
  }

  async getPlatforms(params) {
    return await this.#requestHandler(`${this.BASE_URL}/platforms`, params);
  }

  async getGenre(id, params) {
    return await this.#requestHandler(`${this.BASE_URL}/genres/${id}`, params);
  }

  async getGenres(params) {
    return await this.#requestHandler(`${this.BASE_URL}/genres`, params);
  }

  async getGameType(id, params) {
    return await this.#requestHandler(
      `${this.BASE_URL}/gametypes/${id}`,
      params
    );
  }

  async getGameTypes(params) {
    return await this.#requestHandler(`${this.BASE_URL}/gametypes`, params);
  }

  async getEngine(id, params) {
    return await this.#requestHandler(`${this.BASE_URL}/engines/${id}`, params);
  }

  async getEngines(params) {
    return await this.#requestHandler(`${this.BASE_URL}/engines`, params);
  }

  async getPublisher(id, params) {
    return await this.#requestHandler(
      `${this.BASE_URL}/publishers/${id}`,
      params
    );
  }

  async getPublishers(params) {
    return await this.#requestHandler(`${this.BASE_URL}/publishers`, params);
  }

  async getRun(id, params) {
    return await this.#requestHandler(`${this.BASE_URL}/runs/${id}`, params);
  }

  async getRuns(params) {
    return await this.#requestHandler(`${this.BASE_URL}/runs`, params);
  }
}
