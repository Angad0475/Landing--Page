import React from 'react'
import './Hero.css';
import video from "../../imageandvideo/video.mp4"


function Hero() {
    return (<>
        
            <video  loop muted autoPlay={true}>
                <source src={video} type="video/mp4" />
            </video>

            <div className='container'>
                <h2 className='line'>"GET READY AND</h2>
                <h2 className='line'> EXPLORE THE WORLD </h2>
                <h2 className='line'> WITH TRAVEL"</h2>

                <p id='side-line'>
                At TRAVEL, we believe that travel is more than just visiting new places – it's about creating unforgettable experiences, forging meaningful connections, and immersing ourselves in the beauty and diversity of our world. With a passion for adventure and a commitment to excellence, we specialize in crafting unique and personalized travel experiences that inspire, delight, and leave a lasting impact.

                With years of experience in the travel industry and a deep passion for exploration, our team of expert travel advisors is here to guide you every step of the way. Whether you're embarking on a solo adventure, planning a romantic getaway, or organizing a group expedition, we'll work closely with you to design a seamless and unforgettable travel experience that exceeds your wildest dreams.
                </p>
                <div className='menu'>
                    <h4>Explore More</h4>
                    
                </div>
            </div>
            </>
            
        
    )
}
export default Hero; 
