import React from 'react';
import { Filter } from '../Filter'

const Posts = ({ posts, loading, getSearch }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search..."
              onChange={getSearch} />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2"><img src="search.jpeg" /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Filter />
        </div>

        <div className="col-md-9">
          {/* <input /> */}
          <ul className="list-group">
            {posts.map(({ businessDetails }) => {
              return <div>



                <li className="list-group-item">{businessDetails.companyName}
                  <button className="btn float-right btn-primary mt-2">Contact</button>
                  <span className="text-muted d-flex">{businessDetails.companyAddress.city}, {businessDetails.companyAddress.country} </span>
                </li>



              </div>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
