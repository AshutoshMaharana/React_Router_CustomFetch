import {useState,useEffect, useCallback} from 'react'

export const useFetch = (url) => {
    
    const [data,setData] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [errMessage,setErrMessage] = useState(null)
    
    const fetchData = useCallback(() => {
      const abort = new AbortController();
      fetch(url,{signal:abort.signal}) //memoize it to remove useeffect dependency
       .then(res=>{
         if(!res.ok){
         throw Error('Could not Connect to Server')
         }
         return res.json()
       })
       .then((data) => {
         setData(data)
         setIsLoading(false)
         setErrMessage(null)
       })
       .catch(err => {
         if(!err.name === "AbortError"){
           setErrMessage(err.message)
           setIsLoading(false)
         }
       });
       return() => abort.abort(); 
     },[url])

    useEffect(() => {
      
        
        fetchData();

        },[fetchData])
  return {
    data,isLoading,errMessage

  }
  
}