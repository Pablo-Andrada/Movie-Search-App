import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=3c327a9b`;

export const useFetch = params => {
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(false);
    const [data, setData] = useState(null);
    
    const fetchMovie = url => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJason => {
                if (respuestaJason.Response==="True") {
                    setData(respuestaJason.Search || respuestaJason);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
                console.log("data: ",respuestaJason);
                
            })
            .catch(error=>{console.log(error);
        })     
    }
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`)
    },[params])
    return { isLoading,error,data }
}