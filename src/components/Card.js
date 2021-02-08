import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <a href={item.url} data-toggle="lightbox" className="no-link">
        <div className="card bg-black text-light align-left mb-3">
          <img
            src={item.thumbnailUrl}
            alt="thumbnail"
            className="img-card-top border-orange-hover zoom-out-hover"
          />
          <div className="card-body px-0 py-2">
            <h5 className="card-title text-hover">{`content ${item.albumId} / ${item.id}`}</h5>
            <p className="text-muted h5 text-hover">{item.title}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
