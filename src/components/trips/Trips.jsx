import React from 'react'
import './trips.css'
import TripData from './tripData/TripData'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

function Trips() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est!</p>
        <div className="trip-card">
        <TripData 
            image = {img1}
            heading = "Trip in Indonesia"
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta deserunt autem facilis, ea quisquam aperiam tempore voluptates esse explicabo provident aspernatur architecto quibusdam impedit."
        />
        
        <TripData 
            image = {img2}
            heading = "Trip in Indonesia"
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta deserunt autem facilis, ea quisquam aperiam tempore voluptates esse explicabo provident aspernatur architecto quibusdam impedit."
        />

        <TripData 
            image = {img3}
            heading = "Trip in Indonesia"
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta deserunt autem facilis, ea quisquam aperiam tempore voluptates esse explicabo provident aspernatur architecto quibusdam impedit."
        />
        </div>
    </div>
  )
}

export default Trips