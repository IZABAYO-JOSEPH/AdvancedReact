


import { useEffect, useState } from "react";

const UseFetchPerson = (URL) =>{
    const [user, setUser] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(false);

    
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(URL);
            if(!response.ok){
                setIsError(true)
                setIsloading(false)
                return
            }
            const user = await response.json();
          
            setUser(user);
          } catch (error) {
            setIsError(true);
            console.log(error);
          }
          setIsloading(false);
        };
        fetchUser();
      }, []);  
      return {isLoading, isError, user} 
}

export default UseFetchPerson