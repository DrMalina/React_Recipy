import axios from "axios";

export const KEY = "dd8516e2403e51b4b41168577f16526a";
export const ID = "9e7a6b5a";

export default axios.create({
  baseURL: "https://api.edamam.com"
});
