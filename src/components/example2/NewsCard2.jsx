import { useEffect, useState } from "react";

const NewsCard2 = ({ item }) => {
  return (
    <div className="card">
      <div className="cardHeader2">
        <img src={item["urlToImage"]} className="cardImage2" />
        <div className="cardBody">
          <div className="tag tag-red">{item["source"]["name"]}</div>
          <div className="title">{item["title"]}</div>
          <div className="description">{item["description"]}</div>
        </div>
      </div>

      <div className="user_info">
        <div className="author">{item["author"]}</div>
        <div className="date">{item["publishedAt"]}</div>
      </div>
    </div>
  );
};

export default NewsCard2;
