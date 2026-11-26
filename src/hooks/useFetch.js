import { useState, useCallback } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
 
    const sendRequest = useCallback(async (url, options={}, applyData) => {
        setIsLoading(true);
        setError(null);

        try { 
            const response = await fetch(options.id ? url + '/' + options.id : url, {
                method: options.method || "GET",
                headers: options.headers || {},
                body: options.body ? JSON.stringify(options.body) : undefined,
            });

            if (!response.ok) {
                throw new Error("Request Failed!");
            }
            if (response.status === 204 || options.method ==="DELETE") {
                return null;
            }
            const data = await response.json();
            
            if(applyData){
                applyData(data);
            }
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }

        setIsLoading(false);
    },[]);
    return { isLoading, error, sendRequest };

};

export default useFetch;