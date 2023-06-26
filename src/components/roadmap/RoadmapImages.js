import React from 'react'

const RoadmapImages = () => {
  return (
    <>
    {
        roadmapImg.map((item, i)=>{
            return(
                <div className="road-img" key={i}>
                    <img src={item.img} alt="" />
                </div>
            )
        })
    }
    </>
  )
}

export default RoadmapImages;

const roadmapImg=[
    {
        id:1,
        img:'/images/roadmap-1.svg'
    },
    {
        id:2,
        img:'/images/roadmap-2.svg'
    },
    {
        id:3,
        img:'/images/roadmap-3.svg'
    },
    {
        id:4,
        img:'/images/roadmap-4.svg'
    },
    {
        id:5,
        img:'/images/roadmap-5.svg'
    },
]