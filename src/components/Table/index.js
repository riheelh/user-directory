import React, {useState, useEffect} from "react";
import dateFormat from "dateformat";
//https://www.npmjs.com/package/dateformat

const Table = (props) => {
  const [ascending, setAscending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
  setData(props.dataArray)
  }, [props.dataArray])

  const handleClick = () => {
    let object;
    if (ascending) {
      object = data.sort(function (a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        console.log('descending')
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        
      });
      setAscending(false)

    } else {
      object = data.sort(function (a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        console.log('ascending')
        return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
      });
      setAscending(true)
    }
    setData(object)
  }

  return (
    <>
      {data.length !== 0 ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={() => handleClick()}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => (
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
