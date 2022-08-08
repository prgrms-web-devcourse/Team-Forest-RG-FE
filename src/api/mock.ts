import axios from "axios";

const getDetailPage = async () => {
  const res = await axios.get("/data/data.json", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.data;
};

export { getDetailPage };
