// Imported dependencies
import React from "react";
import PropTypes from "prop-types";

// Imported components
import Card from "./Card";

export default function CardList({ articles }) {
  return (
    <section>
      {articles.map(article => {
        return <Card key={article._id} article={article} />;
      })}
    </section>
  );
}

CardList.propTypes = {
  articles: PropTypes.array
};
