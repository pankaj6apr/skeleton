import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import withSkeleton from "../../lib/SkeletonLoader";

const url =
  "https://newsapi.org/v2/everything?q=sports&apiKey=6b9f050df54641b9a26af36719982dbf";

const skeletonProps = {
  type: "card",
  width: "500px",
  height: "400px",
  children: [
    {
      shape: "rectangle",
      height: "220px",
    },
    {
      shape: "line",
      width: "10%",
    },
    {
      shape: "line",
      height: "15px",
    },
    {
      shape: "line",
      height: "10px",
    },
    {
      shape: "line",
      height: "10px",
    },
    {
      shape: "line",
      height: "10px",
    },
    [
      { shape: "line", width: "30%", height: "10px" },
      { shape: "line", width: "30%", height: "10px" },
    ],
  ],
};

const FetchNewsCard = () => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data["articles"]);
        setArticle(data["articles"][3]);
        // setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setError(e.message);
        // setLoading(false);
      });
  }, []);

  return (
    <div>
      {withSkeleton(<NewsCard item={article} />, isLoading, skeletonProps)}
    </div>
  );
};

export default FetchNewsCard;
