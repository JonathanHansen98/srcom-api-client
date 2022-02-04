const axios = require("axios");
const BASE_URL = "https://www.speedrun.com/api/v1";

class SRComClient {
  #apiKey = null;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  #get(path, params) {
    return axios.get(path, {
      headers: { "X-API-Key": this.#apiKey },
      params,
    });
  }

  async getGames(params) {
    const { data } = await this.#get(`${BASE_URL}/games`, params);

    return data;
  }

  async getGame(id, params) {
    const { data } = await this.#get(`${BASE_URL}/games/${id}`, params);

    return data;
  }

  async getPlatform(id, params) {
    const { data } = await this.#get(`${BASE_URL}/platforms/${id}`, params);

    return data;
  }

  async getPlatforms(params) {
    const { data } = await this.#get(`${BASE_URL}/platforms`, params);

    return data;
  }

  async getGenre(id, params) {
    const { data } = await this.#get(`${BASE_URL}/genres/${id}`, params);

    return data;
  }

  async getGenres(params) {
    const { data } = await this.#get(`${BASE_URL}/genres`, params);

    return data;
  }

  async getGameType(id, params) {
    const { data } = await this.#get(`${BASE_URL}/gametypes/${id}`, params);

    return data;
  }

  async getGameTypes(params) {
    const { data } = await this.#get(`${BASE_URL}/gametypes`, params);

    return data;
  }

  async getEngine(id, params) {
    const { data } = await this.#get(`${BASE_URL}/engines/${id}`, params);

    return data;
  }

  async getEngines(params) {
    const { data } = await this.#get(`${BASE_URL}/engines`, params);

    return data;
  }

  async getPublisher(id, params) {
    const { data } = await this.#get(`${BASE_URL}/publishers/${id}`, params);

    return data;
  }

  async getPublishers(params) {
    const { data } = await this.#get(`${BASE_URL}/publishers`, params);

    return data;
  }

  async getRun(id, params) {
    const { data } = await this.#get(`${BASE_URL}/runs/${id}`, params);

    return data;
  }

  async getRuns(params) {
    const { data } = await this.#get(`${BASE_URL}/runs`, params);

    return data;
  }
}

module.exports = SRComClient;
