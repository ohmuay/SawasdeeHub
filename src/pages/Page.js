import React, { useContext, useState, useEffect } from "react";
import contentContext from "../context/contentContext";
import { useParams,Redirect } from "react-router-dom";
import Card from "../components/Card";

const Page = () => {
  const { search, setSearch } = useContext(contentContext);
  const [content, setContent] = useState([]);
  const { page,keyword } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      if(search==''){
        const pageData = data.filter((item) => item.albumId == page);
        setContent(pageData);
      }
      else{
        const searchData = data.filter((item)=> 
        item.albumId == search || item.id == search || item.title.match(search)
        )
        setContent(searchData);
      }

    };

    fetchData();
  }, [page,search]);

  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          {content.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Page;
