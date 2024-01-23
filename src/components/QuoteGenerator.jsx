import { useEffect, useState } from "react";
import axios from 'axios';

const QuoteGenerator = () => {

    const [quote, setQuote] = useState('')

    useEffect ( () => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://api.quotable.io/random');
                const { content, author } = response.data;
                setQuote({ content, author });
                
              } catch (error) {
                 console.error('Error fetching quote:', error);
              }
        }
        fetchQuote();
    },[]);

    return (
    <div>

          <div className="w-full h-auto bg-black text-white text-center p-[4rem] space-y-5">
                 <blockquote className="text-xl italic">
                      "{quote.content}"     
                 </blockquote>

                 <blockquote className="text-xl italic font-bold">
                      {quote.author}      
                 </blockquote>
         </div>  

       

    </div>)
}
export default QuoteGenerator;