import React from 'react'
import Faq from 'react-faq-component';
const FaqQuestion = () => {
 
const data = {
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}
  return (
    <>
            {/* <div className="faq-item">
            <div
              className={
                activeFaq === 1
                  ? "red question-answer active"
                  : " red question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 1) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(1);
                  }
                }}
              >
                <img src="/images/" alt="" />
                <p>What is CryptoOtters?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                CryptoOtters is the first line of avatars that are coming for an upcoming P2E game that we will be releasing.  Game where players can socialize, grind, trade, and potentially even make money.
              </p>
            </div>
            </div>
            <div className="faq-item"></div>
            <div className="faq-item"></div>
            <div className="faq-item"></div> */}
                <Faq data={data}/>
    </>
  )
}

export default FaqQuestion;

// const faqData=[
//   {
//     id:1,
//     title:'WHAT IS NFT AND HOW DOES IT WORKS?',
//     dis:'MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function '
//   },
//   {
//     id:2,
//     title:'WHAT IS NFT AND HOW DOES IT WORKS?',
//     dis:'MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function '
//   },
//   {
//     id:4,
//     title:'WHAT IS NFT AND HOW DOES IT WORKS?',
//     dis:'MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function '
//   },
//   {
//     id:4,
//     title:'WHAT IS NFT AND HOW DOES IT WORKS?',
//     dis:'MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function '
//   },
// ]
