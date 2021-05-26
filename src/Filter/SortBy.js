import React, { useState} from 'react';

const SortBy = ()=>{
    const [dropdown,setDropdown] = useState("");

        return (
            <div className="colum">
            {/* <div className="col-md-2"></div> */}
            <form>
                <h4>Sort By {dropdown}</h4>
                <select value= {dropdown} onChange={(e)=>{setDropdown()}}>
                    <option value= "Company">Company</option>
                    <option value= "Country">Country</option>
                    <option value= "City">City</option>
                </select>
            </form>
            </div>
        );
    }


export default SortBy;

