// src/utils/apiFetch.js

export default async function apiFetch(url, options = {}) {
    try{
      const res = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if(!res.ok){
        const data = await res.json();
        const error = new Error(data?.message || "Request failed");
        error.status = res.status;
        error.data = data;
        throw error;
      }
        

      return res.json();
    }
    catch(err){
        console.error('Fetch error: ',err.message);
        throw err;
    }
    
  };
