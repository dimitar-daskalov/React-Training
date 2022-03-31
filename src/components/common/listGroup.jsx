import React from "react";

const ListGroup = ({
  genres,
  textProperty,
  valueProperty,
  onGenreSelect,
  selectedGenre,
}) => {
  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          key={g[valueProperty]}
          className={
            g === selectedGenre
              ? "list-group-item active clickable"
              : "list-group-item clickable"
          }
          onClick={() => onGenreSelect(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
