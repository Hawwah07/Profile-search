import React from "react";


function Search ({searching, onhandleChange}) {
   
    return (
        <div>
            <form>
                <input type="text" className="searchbar" placeholder="Search by name..." value={searching} onChange={(event) => onhandleChange(event.target.value)}/>
            </form>
        </div>
    )
}

export default Search 