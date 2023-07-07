import React from 'react'
import Faq from 'react-faq-component';
const FaqQuestion = () => {
 
const data = {
  rows: [
    {
      title: "How many OrXs made it out of the realm?",
      content: "2000 "
    },
    {
      title: "How much is it to grab one of these Eco Warriors?",
      content: "Each one will be on sale for 0.5EGLD "
    },
    {
      title: "What is One Tree Planted?",
      content: "They are a non-profit organization focused on global reforestation "
    },
    {
      title: "Will there be an Air Drop?",
      content: "Yes, the OrXs will be Air Dropped, we will be promoting this through Twitter so keep an eye out for it. "
    },
    {
      title: "I missed the mint, how can I own one?",
      content: "They will be available through XPortal "
    }
    ]
}
  return (
    <>
                <Faq data={data}/>
    </>
  )
}

export default FaqQuestion;
