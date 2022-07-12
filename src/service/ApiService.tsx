import { IPost, IUser } from "../types/Types";
import axios from "axios";

class ApiService {
  static async fetchPosts() {
    try {
      let responce = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return responce.data;
    } catch (e) {
      alert(e);
    }
  }

  static async fetchUser() {
    try {
      let responceUser = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      return responceUser.data;
    } catch (e) {
      alert(e);
    }
  }
}

export default ApiService;
