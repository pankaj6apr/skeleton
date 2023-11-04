import { useEffect, useState } from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <img
          src={item["urlToImage"]}
          className="cardImage"
          width="600px"
          height="250px"
        />
      </div>
      <div className="shimmerContainer cardBody">
        <div className="tag tag-red">{item["source"]["name"]}</div>
        <div className="title">{item["title"]}</div>
        <div className="description">{item["description"]}</div>
      </div>
      <div className="user_info">
        <div className="author">{item["author"]}</div>
        <div className="date">{item["publishedAt"]}</div>
      </div>
    </div>
  );
};

export default NewsCard;
