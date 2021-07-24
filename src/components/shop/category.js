import React from "react";
import { ToggleLinks } from "./toggleLinks";

const buttons = {
  "border-radius": "20px ",
  "margin-bottom": "5px"
};

export const Category = ({ baseUrl, categories }) => {
  return (
    <React.Fragment>
      <ToggleLinks style={buttons} exact={false} to={`${baseUrl}/all`}>
        All
      </ToggleLinks>
      {categories &&
        categories.map(c => (
          <ToggleLinks
            style={buttons}
            to={`${baseUrl}/${c.toLowerCase()}`}
            key={c}
          >
            {c}
          </ToggleLinks>
        ))}
    </React.Fragment>
  );
};
