import { IPost } from "../types/Types";
import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  posts: Array<IPost>(),
  localPosts: Array<IPost>(),
  user: {
    id: 0,
    name: "string",
    username: "string",
    email: "string",
    address: {
      street: "string",
      suite: "string",
      city: "string",
      zipcode: "string",
      geo: {
        lat: "string",
        lng: "string",
      },
    },
    phone: "string",
    website: "string",
    company: {
      name: "string",
      catchPhrase: "string",
      bs: "string",
    },
  },
};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
