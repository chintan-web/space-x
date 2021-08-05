import React from "react";

function History({ history }) {
  return (
    <div className="m-3 p-12">
      <h1 className="text-lg font-semibold">
        Title <br /> <p>{history.title}</p>
      </h1>
      <p className="text-gray-400">
        Details
        <br /> {history.details}
      </p>

      <hr />
    </div>
  );
}

export default History;
