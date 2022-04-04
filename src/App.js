import { useState } from 'react';
import './App.css';
import Pagination from './Pagination';
import Posts from './Posts';
import useAxios from './useAxios';
function App() {
  const {response,loading}=useAxios();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  console.log(response)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = response.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts responses={currentPosts}  />
      <Pagination
        paginate={paginate}
      />
    </div>
  );
}

export default App;
