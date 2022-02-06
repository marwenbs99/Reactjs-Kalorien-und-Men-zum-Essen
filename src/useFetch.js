import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url, {signal : abortCont.signal})
             .then((response)=> {
               if (!response.ok){
                 throw Error('desole une erreur est servenue cote base des donnees');
               }
               return response.json();
             })
             .then ((data)=> {
              
              setData(data);
              setIsloading(false);
              setError(null);
             })
             .catch ( err => {
                 if(err.name === "AbortError"){
                     console.log('fetch a ete stopee');
                 }else{
               console.log(err.message);
               setError(false);
            }
             })
        },500);

        return () => abortCont.abort();

      }, [url]);
      return {data, isLoading, error};
}
 
export default useFetch;