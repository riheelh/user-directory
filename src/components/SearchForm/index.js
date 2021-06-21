import React, {useRef} from 'react'

const SearchForm = (props) => {
    const inputEl = useRef("")
    const getSearch = () => {
        props.handleSearch(inputEl.current.value)
    }
    return ( 
        <form className="search">
            <div className="form-group">
                <input
                    ref={inputEl}
                    value={props.term}
                    // onChange={props.handleSearch}
                    onChange={getSearch}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Search keyword"
                    id="term"
                />
            </div>
        </form>
    );
}

export default SearchForm;
