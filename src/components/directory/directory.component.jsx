import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, ...rest }) => (
        <DirectoryItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
