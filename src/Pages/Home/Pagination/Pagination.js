import React, { useState } from "react";
import "./Pagination.css";
const Pagination = () => {
  const [pageCount, setPageCount] = useState(10);
  const [page, setPage] = useState(0);

  return (
    <div className="flex">
      <div className="pagination">
        <button
          className="button"
          disabled={page <= 0}
          onClick={() => setPage(page - 1)}
        >
          {"<"}{" "}
        </button>
        {[...Array(pageCount).keys()].map((number,_i) => (
          <button
            key={_i}
            id="page-btn"
            className={number === page ? "active-class" : "page-btn"}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="button"
          disabled={page >= pageCount - 1}
          onClick={() => setPage(page + 1)}
        >
          {" >"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
