import React from 'react'
//import classes from "./BackgroundVideo.module.css"
import Video from "../assets/Perros.mp4"
import Narvbar from './Narvbar'

export default function VideoBackground() {
    return (
        <div className='container' style={{margin:'0',
        position: 'relative',
    top: '-17px',
        }}>
        <video
          style={{ 
                         position: 'relative',
                        width: '100vw',
                        /* min-height: 500px; */
                        //top: 0%,
                        //left: 10p,
                        
                        zndex: '-100000',
                        right: '12px',
                        filter: `blur(0px)`, WebkitFilter: `blur(0px)`,
                           zIndex:'-10000',
                    }

            
        }
          autoPlay="autoplay"
          loop="loop"
          muted
          // ref={video}
          id="video-id"
          className='video' >
                 
         
          {/* TODO make it accept multiple media types */}
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    )
}
