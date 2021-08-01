import Axois from "axios";
export const fetchIDs = async () => {
  try {
    let res = await Axois.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json`
    );
    
        // console.table("res"+Array.isArray(res.data));
    return res;

  } catch (err) {
    console.log("err");
  }
};
