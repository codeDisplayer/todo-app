import React from 'react';
import { Link } from 'react-router-dom';


export default function Error404Page() {
  return (
    <h1>Oops, we haven't found the page you're looking for. See <Link to='/'>Home</Link>.</h1>
  )
}