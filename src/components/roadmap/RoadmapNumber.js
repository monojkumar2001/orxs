import React from 'react'

const RoadmapNumber = () => {
  return (
    <>
    {
        roadNumber.map((item, i)=>{
            return(
                <span id='i'>{item.num}</span>
            )
        })
    }
    </>
  )
}

export default RoadmapNumber;

const roadNumber=[
    {
        id:1,
        num:'01'
    },
    {
        id:2,
        num:'02'
    },
    {
        id:3,
        num:'03'
    },
    {
        id:4,
        num:'04'
    },
    {
        id:5,
        num:'05'
    },
]