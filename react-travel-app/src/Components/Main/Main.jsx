import React, {useEffect} from "react";
import "./main.css"

import {GrLocation} from 'react-icons/gr'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Media/img (1).jpg'
import img2 from '../../Media/img (2).jpg'
import img3 from '../../Media/img (3).jpg'
import img4 from '../../Media/img (4).jpg'
import img5 from '../../Media/img (5).jpg'
import img6 from '../../Media/img (6).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Tokyo',
        location: 'Japan',
        grade: 'Cultural Relax',
        fees: '$3699',
        description: 'A land of contrasts, Japan is a fascinating destination for visitors. Combining the attractions of an ancient and unfamiliar culture with all the trappings of one of the world powerhouses in entertainment, fashion, and innovation, Japan is a journey of discovery wherever you go.', 
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Seoul',
        location: 'South Korea',
        grade: 'Heritage Discovery',
        fees: '$2599',
        description: 'As of December 2022, Korea has thirteen cultural heritage sites and two natural heritage sites. Apart from this, UNESCO also has separate programs called Intangible Heritage of Humanity and Memory of the World. In Korea, there are twenty-two and sixteen of them respectively.', 
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Svalbard',
        location: 'Norway',
        grade: 'Northern Lights Hunt',
        fees: '$8799',
        description: 'Adventure seekers hoping to catch a glimpse of the Northern Lights should consider a trip to Norway, one of the best places on earth to experience the coolest natural phenomena.', 
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Great Wall',
        location: 'China',
        grade: 'Sight Seeing',
        fees: '$1200',
        description: 'Like a writhing dragon’s tail, the Great Wall of China snakes its way across China’s northern border. As its name suggests, the Great Wall is an imposing architectural marvel, and its often hailed as one of the greatest man-made wonders of the world.', 
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Venice',
        location: 'Italy',
        grade: 'Cultural Relax',
        fees: '$6999',
        description: 'The Italian city of Venice (Venezia) is located on the Adriatic Sea in the northeast of the country.The special thing about your visit of Venice city is that there are no normal roads in the city. There is one long bridge between the mainland and Venice, with only one road and a railway.', 
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Cairo',
        location: 'Egypt',
        grade: 'Sight Seeing Relax',
        fees: '$5500',
        description: 'Explore the incredible wonders of Egypt and Morocco on this exciting 18-day tour package. From the stunning landscapes of Morocco to the rich history of the ancient Egyptians, this highlights package offers the perfect blend of culture, history and adventure.', 
    },
]


const Main = () => {

//Create a react hook to add the scroll animation here:
useEffect( ()=> {
    Aos.init({duration: 2000})
},[])

return (
    <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">
            {/* Use high order array method (map) for 
            a list of objects in 1 array. Create an array 
            named data and .map() array to fetch each destination
            at once  */}

            {
            Data.map(({id, imgSrc, destTitle, location, 
                grade, fees, description }) => {
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                <GrLocation className="icon"/>
                                <span className="name">{location}</span>
                                </span>
                                
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    )
}

export default Main