import { IPost, IUser } from "../types/Types";
import axios from "axios";

class ApiService {
  static async fetchPosts(): Promise<IPost[]> {
    try {
      let responce = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (responce.data) {
        return responce.data;
      } else {
        return Promise.reject();
      }
    } catch (e) {
      alert(e);
      return Promise.reject();
    }
  }

  static async fetchUser(): Promise<IUser> {
    try {
      let responceUser = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (responceUser.data) {
        return responceUser.data;
      } else {
        return Promise.reject();
      }
    } catch (e) {
      alert(e);
      return Promise.reject();
    }
  }
}

export default ApiService;
