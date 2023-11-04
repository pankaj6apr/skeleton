import React from "react";
import "./skeleton.css";

const createSkeletonItem = (child) => {
  return (
    <div
      className={`${child["shape"]}`}
      style={{ width: child["width"], height: child["height"] }}
    />
  );
};

const createRow = (items) => {
  return (
    <div className="skeleton-row">
      {items.map((item) => {
        if (Array.isArray(item)) {
          return createColumn(item);
        }
        return createSkeletonItem(item);
      })}
    </div>
  );
};

const createColumn = (items) => {
  return (
    <div className="skeleton-column">
      {items.map((child) => {
        if (Array.isArray(child)) {
          return createRow(child);
        }
        return createSkeletonItem(child);
      })}
    </div>
  );
};

const createSkeleton = (skeleton) => {
  let type = skeleton["type"];
  let width = skeleton["width"];
  let height = skeleton["height"];
  let children = skeleton["children"];
  let skeletonUI = <></>;

  if (type === "card") {
    skeletonUI = (
      <div
        className="card-border shimmerContainer"
        style={{ width: width, height: height }}
      >
        <div className="shimmer" />
        {createColumn(children)}
      </div>
    );
  }
  return skeletonUI;
};

const withSkeleton = (Component, isLoading, skeletonData) => {
  return isLoading ? createSkeleton(skeletonData) : Component;
};

export default withSkeleton;
