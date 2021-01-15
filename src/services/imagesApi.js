import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "18864645-939ea59db410a3043a30cf718";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

const fetchImagesWithQuery = async (q, page) => {
  try {
    const { data } = await axios.get("", {
      params: { q, page },
    });
    return data.hits;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export default {
  fetchImagesWithQuery,
};
