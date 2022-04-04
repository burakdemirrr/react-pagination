import React from 'react';

const Posts = ({ responses }) => {
  
  return (
    <ul className='list-group mb-4'>
      {responses.map(response => (
        <li key={response.id} className='list-group-item'>
          {response.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;