import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataurl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const isMounted = useRef(true); 

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted.current) {  
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted.current) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
               setTimeout(() => setIsLoading(false),2000); 
            }
        };

        fetchData(dataurl);

        return () => {
            isMounted.current = false; 
            source.cancel();
        };
    }, [dataurl]);

    return { data, fetchError, isLoading };
};

export default useAxiosFetch;
