import React from 'react'
import FilterListIcon from "@mui/icons-material/FilterList";
import "./chatList.css";


const Navbar = () => {
  return (
    <div className="navbar">
          <div className="searchBar">
            <input
              className="inputField"
              type="text"
              placeholder="Search or start new chat"
            />
          </div>
          <div className="filter">
            <FilterListIcon />
          </div>
        </div>
  )
}

export default Navbar