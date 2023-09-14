import React from 'react'
import './destination.css'

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import DestinationData from './destinationData/DestinationData'


function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you opportunity to see a lot within a time frame</p>

        <DestinationData 
          className = "first-des" 
          heading = "Taal Volacno, Batangas"
          text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum non in assumenda numquam fuga corporis voluptates laboriosam magni voluptatum doloribus repellat quod quisquam obcaecati dignissimos esse, fugiat inventore voluptatem recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vitae dolore corrupti quod veniam nemo impedit ipsam ex praesentium iste? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quae magnam adipisci error quis molestias temporibus dolore ut tenetur fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt sequi ex repellat id quia, earum dolorem laudantium accusamus vel! "
          image1 = {img1}
          image2 = {img2}
        />

<DestinationData 
          className = "first-des-reverse"
          heading = "Taal Volacno, Indiana"
          text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum non in assumenda numquam fuga corporis voluptates laboriosam magni voluptatum doloribus repellat quod quisquam obcaecati dignissimos esse, fugiat inventore voluptatem recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vitae dolore corrupti quod veniam nemo impedit ipsam ex praesentium iste? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quae magnam adipisci error quis molestias temporibus dolore ut tenetur fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt sequi ex repellat id quia, earum dolorem laudantium accusamus vel! "
          image1 = {img3}
          image2 = {img4}
        />

    </div>
  )
}

export default Destination