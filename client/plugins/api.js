import axios from "axios";
const url = "http://localhost:5500/api/playmates/";

export default class API {
  static async getPlaymates() {
    const res = await axios.get(url);
    return res.data;
  }

  static async getPlaymateDetail(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  static async updatePlaymate(id, playmate) {
    const res = await axios.patch(`${url}/${id}`, playmate);
    return res.data;
  }

  static async createPlaymate(playmate) {
    const res = await axios.post(url, playmate);
    return res.data;
  }

  static async deletePlaymate(id, playmate) {
    const res = await axios.delete(`${url}/${id}`, playmate);
    return res.data;
  }
}
