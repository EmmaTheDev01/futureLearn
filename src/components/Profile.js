import React from 'react'
import './profile.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Profile = () => {
  return (
    <div className='recipient_profile'>
      <div className='Profile_avatar_section'>
        <div className='user_avatar_section'>
          <img className='avatar_big' alt='user Profile' src='https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE' />
        </div>
        <div className='about_user'>
          <span className='address'>Musanze, Ruhengeri</span>
          <p>A student in Network engineering with comprehensive skills in Network configuration, Web development and security </p>
          <div className='social_pages'>
            <span className='instagram'><FaInstagram /></span>
            <span className='twitter'><FaTwitter /></span>
            <span className='facebook'><FaFacebook /></span>

          </div>
        </div>
      </div>
      <div className='personal_info'>
        <li><span className='label'>Phone:</span> +25079009999</li>
        <li><span className='label'>Email:</span> ug2022384903@ines.ac.rw</li>
        <li><span className='label'>Reg Number:</span> 2022/384903</li>
      </div>
      <div className="media_section">
        <li>Media (12)<span className='see_all'>See all...</span></li>
        <div className='images_gallery'>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eWQh4QfnMM3usamQzsk2EQ8-oNzn9NEi1uaYrmUWRNbDLZIBKgwi3KMnD1OIjxeDwgE&usqp=CAU' alt='image1' className='shared_image' /></div>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QLRCKqCtIT0sYzHTQuQ7-pY2v6eePFBNwII2FjmAt0yyn4SpusuVvGtFA&s' alt='image2' className='shared_image' /></div>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw1MqXfJ8YQeRNqQqgxCOUgIb9cJMdWOANg&usqp=CAU' alt='image3' className='shared_image' /></div>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetc8S9uGh0RUuPLjSxj8PUSGcIB4rD_b-rg&usqp=CAU' alt='image4' className='shared_image' /></div>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetc8S9uGh0RUuPLjSxj8PUSGcIB4rD_b-rg&usqp=CAU' alt='image5' className='shared_image' /></div>
          <div className='image_box'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetc8S9uGh0RUuPLjSxj8PUSGcIB4rD_b-rg&usqp=CAU' alt='image6' className='shared_image' /></div>
        </div>
      </div>
    </div>
  )
}

export default Profile