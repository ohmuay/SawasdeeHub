import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import contentContext from "../context/contentContext";

const Pagination = () => {
  let { page } = useParams();
  const { setSearch } = useContext(contentContext);
  page = Number.parseInt(page);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <div className="my-pagination__item">
            <Link to={`/pages/${page - 1}`} className="my-pagination__link" onClick={()=>{ setSearch('')}}>
              &larr; Previous
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="my-pagination__item my-pagination__item--active">
            <Link to="/pages/3" className="my-pagination__link" onClick={()=>{ setSearch('')}}>
              {page}
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="my-pagination__item">
            <Link to={`/pages/${page + 1}`} className="my-pagination__link" onClick={()=>{ setSearch('')}}>
              Next &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
