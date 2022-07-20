import React from 'react'
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='container'>
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
      <div className='row'>
        <div className='col-md-12'>

        </div>
      </div>

    </div>
  )
}

export default Contact;