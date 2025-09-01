import { useState ,useEffect } from 'react';
import'./QuoteBox.css'

const RANDOM_QUOTE_URL = "https://api.quotable.io/quotes/random";

export default function QuoteFet(){

    const [quote, setQuote] = useState({content:'', author:''})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{ 
        
         fetchQuote()
    
    }, [])

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse[0];
        setQuote(randomQuote)
        console.log(randomQuote.content, randomQuote.author)
        setIsLoading(false)
    }



    return <>
    <div className="mainBox">
        <h1 className='h1'>Here is your random quote:</h1>
        <h2>"{quote.content}"</h2>
        {isLoading && <h2>Loading...</h2>}
        <div className="author-container">
    <h3 className="quote-author">- {quote.author}</h3>
        </div>
        <button className='btn' onClick={fetchQuote}>New quote</button>
    </div>
    <h2 className='thankYou'>
        Thank you for your time!
      </h2>
    
    </>

}