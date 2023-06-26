import React from 'react'

const RoadmapContent = () => {
  return (
    <>
    {
        roadContent.map((item, i)=>{
            return(
                <div className="road-text-content-item" key={i}>
                    <div className="number-wrapper">
                    <span>{item.num}</span> 
                    <h3>{item.year}</h3>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.dis}</p>
                </div>
            )
        })
    }
    </>
  )
}

export default RoadmapContent;

const roadContent=[
    {
        id:1,
        num:'01',
        year:'2023',
        title:"Launch Twitter page",
        dis:'partner with chosen charity one tree planted'
    },
    {
        id:2,
        num:'02',
        year:'2023',
        title:"finalise collection",
        dis:'partner with chosen charity one tree planted'
    },
    {
        id:3,
        num:'03',
        year:'2023',
        title:"Minting goes live",
        dis:''
    },
    {
        id:4,
        num:'04',
        year:'2023',
        title:"10,000 trees planted!",
        dis:''
    },
    {
        id:5,
        num:'05',
        year:'2023',
        title:"Merch goes live",
        dis:''
    },
]