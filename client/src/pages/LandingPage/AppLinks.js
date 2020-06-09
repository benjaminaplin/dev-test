import React from 'react'
import { Link } from 'react-router-dom'

const AppLinks = () => {
  return (
    <div>
      <ul>
        <Link to="/language-classes" >
        Language Classes
        </Link>
      </ul>
      <ul>
        <Link to="/create" >
        Create Language Classes
        </Link>
      </ul>
    </div>
  );
}

export default AppLinks;