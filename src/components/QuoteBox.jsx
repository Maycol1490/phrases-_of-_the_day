import React from 'react'
import ButtonBox from './ButtonBox'

const QuoteBox = ({ RandomQuote, RandomColor, RandomStyle, getRandomAll }) => {
  const ColorObj = { color: RandomColor }
  return (
    <div className = "card">
    <div className="content">
      <div className="front">
        <h3 style={ColorObj} className="title">Hey</h3>
        <p style={ColorObj} className="subtitle">Hover me :)</p>
      </div>
      <div className="back">
        <div className="description">
          <p style={ColorObj} className='card_quote'>{RandomQuote.quote}</p>
          <h1 style={ColorObj} className="card_author">{RandomQuote.author}</h1>
        </div>
      </div>
    </div>
    <ButtonBox
    RandomStyle={RandomStyle}
    ColorObj={ColorObj} 
    getRandomAll={getRandomAll}/>
   </div>
  )
}

export default QuoteBox



{/* <article className='card' style={ColorObj}>
<p className='card_quote'>{RandomQuote.quote}</p>
<h1 className="card_auhor">{RandomQuote.author}</h1>
<button onClick={getRandomAll} className='card_btn' style={RandomStyle}>&#62;</button>
</article> */}