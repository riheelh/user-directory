import React from 'react'

const Count = (props) => {
    return (
        <>
        {/* <button onClick={props.searchUser}> Search </button> */}

        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    name="search"
                    type="text"
                    id="search"
                />
                <button onClick={props.searchUser} className="btn btn-primary mt-3">
                Search
                </button>
            </div>
        </form>
        </>
    )
}

export default Count
