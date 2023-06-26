import React from 'react'

const CheckItItem = () => {
  return (
    <>
    {
        checkItem.map((item, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="check-card-item" key={i}>
                        <img src={item.img} alt="" />
                     <div className="card-contents">
                     <h3>{item.title}</h3>
                     <p>{item.dis}</p>
                     </div>
                     <div className="card-check-it-btn">
                        <img src="/images/check-btn-bg.svg" alt="" />
                        <span>CHECK IT</span>
                     </div>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default CheckItItem;

const checkItem=[
    {
        id:1,
        title:"SUPPORT 1 DAY",
        img:'/images/check-1.svg',
        dis:`Don't worry we have a great support team ready to help you at a time in a very professional way`,
        link:'/'
    },
    {
        id:2,
        title:"WELL DOCUMENTED",
        img:'/images/check-2.svg',
        dis:`You can solve your all doubts thanks to documentation and the video tutorials present ready for help you`,
        link:'/'
    },
    {
        id:3,
        title:"ALWAYS UPDATED",
        img:'/images/check-3.svg',
        dis:`We guarantee frequent updates to always add new features and new most requested compatibility`,
        link:'/'
    },
]