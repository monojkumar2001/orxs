import React from 'react'
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <>
    <Marquee>
        {
            marque.map((item, id)=>{
                return(
                    <div className="marque-img-item" key={id}>
                        <img src={item.img} alt="" />
                    </div>
                )
            })
        }
    </Marquee>
    </>
  )
}

export default Marque;

const marque=[
    {
        id:1,
        img:"/images/marque.svg"
    },
    {
        id:2,
        img:"/images/marque.svg"
    },
    {
        id:3,
        img:"/images/marque.svg"
    },
    {
        id:4,
        img:"/images/marque.svg"
    },
    {
        id:5,
        img:"/images/marque.svg"
    },
    {
        id:6,
        img:"/images/marque.svg"
    },
]