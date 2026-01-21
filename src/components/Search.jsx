import React from 'react'


const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div className="search">
                <img src="/Vector.svg" alt="Search" />
                <input
                type="text"
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(event)=>setSearchTerm(event.target.value)}
                />
            </div>


        </div>
    )
}
export default Search
