import "./directory.styles.scss";

import React from "react";

import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, ...rest }) => (
        <CategoryItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
