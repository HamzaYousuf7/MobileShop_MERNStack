import React from "react";
import _ from "lodash";

const pagination = (props) => {
  const { maxProductsCount, pageSize, currentPage } = props;
  const pagesCount = Math.ceil(maxProductsCount / pageSize);

  if (pagesCount == 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li key={page} className={page === currentPage ? "active" : null}>
          <a onClick={() => props.paginationChangeHandler(page)}>{page}</a>
        </li>
      ))}
    </ul>
  );
};

export default pagination;
