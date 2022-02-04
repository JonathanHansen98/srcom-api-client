var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SRComClient_apiKey;
const axios = require("axios");
const BASE_URL = "https://www.speedrun.com/api/v1";
class SRComClient {
    constructor(apiKey) {
        _SRComClient_apiKey.set(this, null);
        __classPrivateFieldSet(this, _SRComClient_apiKey, apiKey, "f");
    }
    get(path, params) {
        return axios.get(path, {
            headers: { "X-API-Key": __classPrivateFieldGet(this, _SRComClient_apiKey, "f") },
            params,
        });
    }
    getGames(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/games`, params);
            return data;
        });
    }
    getGame(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/games/${id}`, params);
            return data;
        });
    }
    getPlatform(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/platforms/${id}`, params);
            return data;
        });
    }
    getPlatforms(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/platforms`, params);
            return data;
        });
    }
    getGenre(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/genres/${id}`, params);
            return data;
        });
    }
    getGenres(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/genres`, params);
            return data;
        });
    }
    getGameType(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/gametypes/${id}`, params);
            return data;
        });
    }
    getGameTypes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/gametypes`, params);
            return data;
        });
    }
    getEngine(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/engines/${id}`, params);
            return data;
        });
    }
    getEngines(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/engines`, params);
            return data;
        });
    }
    getPublisher(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/publishers/${id}`, params);
            return data;
        });
    }
    getPublishers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/publishers`, params);
            return data;
        });
    }
    getRun(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/runs/${id}`, params);
            return data;
        });
    }
    getRuns(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.get(`${BASE_URL}/runs`, params);
            return data;
        });
    }
}
_SRComClient_apiKey = new WeakMap();
module.exports = SRComClient;
//# sourceMappingURL=index.js.map