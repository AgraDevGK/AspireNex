"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductURL=(url:string)=>{
 try {
   const parsedUrl=new URL(url);
   const hostname = parsedUrl.hostname;
  if(
    hostname.includes('amazon.com')||
    hostname.includes('amazon.')||
    hostname.endsWith('amazon')
  ){
    return true;
  }
 } catch (error) {
    return false;
 }
 return false;
}

const Searchbar = () => {
const[searchPrompt, SetSearchPrompt]= useState('')
const [isloading, setIsLoading] = useState(false);


    const handleSubmit=async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const isValidLink = isValidAmazonProductURL(searchPrompt);

       if(!isValidLink) return alert('Please enter valid Amazon link')
        try {
            setIsLoading(true)

            //  Scraping start

        const product= await scrapeAndStoreProduct(searchPrompt);


        } catch (error) {
            console.log(error)
            
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <form action="" className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit} >

        
    <input 
    type="text"
    value={searchPrompt}
    onChange={(e)=> SetSearchPrompt(e.target.value)}
    placeholder="Enter product link"
    className="searchbar-input" />

<button 
type="submit" className="searchbar-btn"
disabled={searchPrompt===''}
> {isloading?'searching...':'search'}
</button>

    </form>
  )
}

export default Searchbar
