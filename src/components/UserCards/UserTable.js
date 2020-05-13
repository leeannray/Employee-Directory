import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      {props.results.map((result) => (
        <table className="table" key={result.id}>
          <col className="flex-column">
            alt={result.title}
            className="img-fluid" src={result.images.original.url}
          </col>
        </table>
      ))}
    </table>
  );
}

export default ResultList;