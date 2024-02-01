import { useEffect,useCallback } from 'react';
import {useState} from 'react';

async function sendHttpRequest(url, config){
const response = await fetch(url, config);


const resData = await response.json();
if(!response.ok){
    throw new Error(resData.message || 'Somthing went wrong, failed to send request.');
 }
 return resData;
}


export default function useHttp(url, config, initialData){

 const [data, setData] = useState(initialData);
 const [error, setError] = useState(); 
 const [isLoading, setIsLoading] = useState(false);

 const sendRequest = useCallback(async function sendRequest(){
     try{
        const resData = await sendHttpRequest(url, config);
        setData(resData);
     }
     catch(error){

      setError(error.message || 'Somthing went wrong!');

     }
     setIsLoading(false);
 }, [url, config]);


 useEffect(() =>{
     if((config && (config.method === 'GET' || !config.method)) || !config) {
        sendRequest();
     }
    
 }, [sendRequest, config]);


 return{
     data,
     isLoading,
     error,
     sendRequest
 }
}