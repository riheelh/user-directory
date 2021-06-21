import React from "react";
import dateFormat from "dateformat";
//https://www.npmjs.com/package/dateformat



const Table = (props) => {

  return (
    <>
      {props.dataArray.length !== 0 ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {props.dataArray.map((element) => (
                <tr key={element.login.username}>
                  <td><img alt={element.picture.thumbnail} src={element.picture.thumbnail}/></td>
                  <td>{element.name.first} {element.name.last}</td>
                  <td>{element.phone}</td>
                  <td><a href={`mailto:${element.email}`}>{element.email}</a></td>
                  <td>{dateFormat(element.dob.date, "dd-mm-yyyy")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h2>There's no data</h2>
      )}
    </>
  );
};

export default Table;
