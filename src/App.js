import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import SortBy from './Filter/SortBy';
import Filter from './Filter/Filterlist'
import data from './components/datasource.json';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(data);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [currentPostsList, setCurrentPostsList] = useState([]);
  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('https://my.api.mockaroo.com/sellers.json?key=6917cdf0');
    //   setPosts(res.data);
    //   setLoading(false);
    //   // Get current posts
  
    // };

    // fetchPosts();
    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  setCurrentPostsList(currentPosts)
  }, [posts]);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // setCurrentPostsList(currentPosts)
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

const handleSearchFilter=(event)=>{
  const target = event.target;
  const value =target.value.toLowerCase();
  // const name = target.name;
  console.log(value)
  const dataPost =value?data.filter(({businessDetails:{companyName,companyAddress:{city,country}}}) => companyName.toLowerCase().includes(value) ||  city.toLowerCase().includes(value) || country.toLowerCase().includes(value) ):data;
  console.log(dataPost)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataPost.slice(indexOfFirstPost, indexOfLastPost);
  setCurrentPostsList(currentPosts)
}


  return (
    <div className='container mt-5'>
      <Posts posts={currentPostsList} loading={loading} getSearch={handleSearchFilter}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}/>
        <div>
          <SortBy/>
          <Filter/>
        </div>
    </div>
    
    
  );
};

export default App;
