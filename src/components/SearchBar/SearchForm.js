import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="container-fluid">
      <header className="z-depth-3 col s12">
        <div className="row">


          <div className="col s6">
            <h3 className="right-align headerText">User Directory</h3>
            {/* <h6 className="center-align smallerHeaderText">Use the box down below to filter user results</h6> */}
          </div>
          <div className="col s6 ">
            <div className="col s6 inputAndButton right-align ">
              <input
                onChange={props.handleInputChange}
                value={props.value}
                id="users"
                type="text"
                name="search"
                list="user"
                className="inputBox"
                placeholder="Search by User Name"
              />
            </div>
            <div className="col m4">
              <button
                type="submit"
                value=""
                className="button searchBtn"
                onClick={props.handleSearch}
              >
                SEARCH
              </button>
            </div>
          </div>
          {/* </header > */}
        </div>
      </header>
    </div>
  );
}

export default SearchBar;

// import React from "react";

// function SearchBar(props) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           value={props.value}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search For an Employee or User"
//           id="search"
//         />
//         <br />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// export default SearchBar;
