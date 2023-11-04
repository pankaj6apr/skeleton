import { useEffect, useState } from "react";
import NewsCard2 from "./NewsCard2";
import withSkeleton from "../../lib/SkeletonLoader";

const url =
  "https://newsapi.org/v2/everything?q=sports&apiKey=6b9f050df54641b9a26af36719982dbf";

const skeletonProps = {
  type: "card",
  width: "500px",
  height: "190px",
  children: [
    [
      {
        shape: "rectangle",
        height: "150px",
        width: "150px",
      },
      [
        {
          shape: "line",
          width: "50px",
        },
        {
          shape: "line",
          height: "15px",
          width: "300px",
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
      ],
    ],
    [
      { shape: "line", width: "30%", height: "10px" },
      { shape: "line", width: "30%", height: "10px" },
    ],
  ],
};

const FetchNewsCards = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data["articles"]);
        //setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        // setLoading(false);
      });
  }, []);

  let cards = [];
  for (var i = 0; i < 10; i++) {
    cards.push(
      withSkeleton(<NewsCard2 item={news[i]} />, isLoading, skeletonProps)
    );
  }
  return <div className="card-list">{cards}</div>;
};

export default FetchNewsCards;
