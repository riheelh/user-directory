import React from "react";

const Table = (props) => {
  return (
    <>
      {props.dataArray.length !== 0 ? (
        <>
          {/* <h1>There's some data, look at it:</h1> */}

          <table class="table table-striped">
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
                  <>
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>{element.picture.thumbnail}</td>
                      <td>{element.name.first} {element.name.last}</td>
                      <td>{element.phone}</td>
                      <td>{element.email}</td>
                      <td>{element.dob.age}</td>
                    </tr>
                  </>
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
