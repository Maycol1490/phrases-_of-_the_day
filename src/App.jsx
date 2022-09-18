import { useState } from 'react'
import './App.css'
import ButtonBox from './components/ButtonBox'
import QuoteBox from './components/QuoteBox'
import quotes from  './json/quotes.json'
import color from './utils/color.js'

function App() {
  
  const getIndexRandom = arr => {
    return Math.floor(Math.random()* arr.length)}
    
    const FirstQuote = quotes[getIndexRandom(quotes)]
    const FirstColor = color[getIndexRandom(color)]

    const [RandomQuote, setRandomQuote] = useState(FirstQuote)
    const [RandomColor, setRandomColor] = useState(FirstColor)
    const RandomStyle = {backgroundColor : RandomColor}

const getRandomAll = () => {
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomColor(color[getIndexRandom(color)])

}

    return (
    <div style={RandomStyle} className="App">
      <QuoteBox
      getRandomAll={getRandomAll}
      RandomStyle={RandomStyle}
      RandomColor={RandomColor}
      RandomQuote={RandomQuote} />
    </div>
  )
}

export default App
