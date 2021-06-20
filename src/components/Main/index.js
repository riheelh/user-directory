import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/index'
import SearchForm from '../../components/SearchForm/index'
import Table from '../../components/Table'
import API from '../../utils/API'

const Main = () => {
    const [users, setUsers] = useState([])

    // const searchUser = (event) => {
    //     event.preventDefault();
    //     API.searchEmployee()
    //         .then(data => setUsers(data.data.results))
    // }



    useEffect(() => {

        API.searchEmployee()
          .then(data => {
            if (data.data.length === 0) {
              throw new Error("No results found.");
            }
            if (data.data.status === "error") {
              throw new Error(data.data.message);
            }
            setUsers(data.data.results)
          })
          .catch(err => console.log(err));
      }, []);
    


    return (
        <>
            <Header />
            {/* <SearchForm searchUser={searchUser}/> */}
            <Table dataArray={users}/>
        </>
    )
}

export default Main
