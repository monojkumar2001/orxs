import React from 'react'
import Faq from 'react-faq-component';
const FaqQuestion = () => {
 
const data = {
  rows: [
    {
      title: "WHAT IS NFT AND HOW DOES IT WORKS?",
      content: "MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function "
    },
    {
      title: "WHAT IS NFT AND HOW DOES IT WORKS?",
      content: "MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function "
    },
    {
      title: "WHAT IS NFT AND HOW DOES IT WORKS?",
      content: "MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function "
    },
    {
      title: "WHAT IS NFT AND HOW DOES IT WORKS?",
      content: "MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function "
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
