import React, { useContext, useEffect } from "react";
import { Link,Redirect} from "react-router-dom";
import contentContext from "../context/contentContext";
import userImg from "../img/user.jpg";

const Header = () => {
  const { search, setSearch, dispatch } = useContext(contentContext);
  useEffect(() => {
    dispatch({ type: "SEARCH", id: search });
  }, [search, dispatch]);
  return (
    <nav className="navbar bg-grey navbar-dark">
      <div className="container">
        <Link to="/pages/1" className="navbar-brand" onClick={()=>{ setSearch('')}}>
          <h1 className="logo">
            Sawasdee<span className="logo__hub">kub</span>
          </h1>
        </Link>

        <div className="input-group w-50">
          <input
            type="text"
            className="form-control border-0"
            placeholder="search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }
            }
          />
          <div className="input-group-append">
            <span className="input-group-text bg-orange border-0">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="user-info rounded-circle">
          <img src={userImg} alt="" width="50px" height="50px" className="img-fluid user-info__img" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
