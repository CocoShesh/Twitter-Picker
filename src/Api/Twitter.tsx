import axios from "axios";
const apiKey = import.meta.env.VITE_APP_API_KEY;
export const getCheckRetweet = async (tweetId: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://twitter-api45.p.rapidapi.com/retweets.php",
      params: {
        id: tweetId,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCheckUserFollow = async (user: string, follows: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://twitter-api45.p.rapidapi.com/checkfollow.php",
      params: {
        user: user,
        follows: follows,
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
