import React, { useState, useEffect } from "react";
import Header from "../../components/Header/index";
import SearchForm from "../../components/SearchForm/index";
import Table from "../../components/Table";
import API from "../../utils/API";
import "./index.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResults] = useState([]);


  const handleSearch = (search) => {
    setSearch(search);
    if (search !== "") {
      const newEmployeeList = users.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newEmployeeList);
    } else {
      setSearchResults(users);
    }
  };

  useEffect(() => {
    API.searchEmployee()
      .then((data) => {
        if (data.data.length === 0) {
          throw new Error("No results found.");
        }
        if (data.data.status === "error") {
          throw new Error(data.data.message);
        }
        setUsers(data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="newCard">
          <div className="Card">
              <SearchForm term={search} handleSearch={handleSearch} />
          </div>
          <Table dataArray={search.length < 1 ? users : searchResult} />

      </div>
    </>
  );
};

export default Main;
