import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <div className='container'>
        <div className='row '>
          <div className='about col-12 col-md-6'>
            <h1>About Us</h1>
            <p>We first launched on October 22th 2022 with just a search feature. <br />
              Today we've got a fast growing community, database of board game information, and connections to all the major retailers.</p>
            <hr/>
            <h3>Founders</h3>
            <p>Tín started this project by himself creating the beta version of the website in November of 2020.<br />
              Gumball joined in as a co-founder in May 2021 and together have built the company to where it is today.</p>

            <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
          </div>
          <div className='col-12 col-md-6'>
            <Card style={{ width: '18rem' }} className='text-center mx-auto border-0'>
              <Card.Img variant="top" src="assets/images/Tins.png" />
              <Card.Body>
                <Card.Title>Tín</Card.Title>
                <Card.Text>
                  CEO / Co-founder
                </Card.Text>
              </Card.Body>
            </Card>
            {/* <hr/> */}
            <Card style={{ width: '18rem' }} className='text-center mx-auto border-0'>
              <Card.Img variant="top" src="assets/images/gumball.png" />
              <Card.Body>
                <Card.Title>Gumball</Card.Title>
                <Card.Text>
                  CPO / Co-founder
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;
