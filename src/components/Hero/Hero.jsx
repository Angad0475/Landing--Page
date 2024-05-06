import React from 'react'
import './Hero.css';
import video from "../../imageandvideo/video.mp4"


function Hero() {
    return (<>
        
            <video  loop muted autoPlay={true}>
                <source src={video} type="video/mp4" />
            </video>

            <div className='container'>
                <h2 className='line'>GET READY AND</h2>
                <h2 className='line'> EXPLORE WITH</h2>
                <h2 className='line'>TRAVEL.</h2>

                <p className='side-line'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolor optio aliquam at laboriosam repellendus porro asperiores voluptate, dolorum mollitia quisquam alias ducimus debitis rerum nobis enim perspiciatis ullam aspernatur.
                </p>
                <div className='menu'>
                    <h4>Explore More</h4>
                    
                </div>
            </div>
            </>
            
        
    )
}
export default Hero; 
