import React from "react";

import { useEffect, useState } from "react";
const URL = "https://api.github.com/users/QuincyLarson";
const MultiplReturnsFetchData = () => {
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
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>there was an error...</h2>;
  }
  const {avatar_url,company,name,bio}  = user
  return (
    <div>
        <h4>Multiple returns mini project</h4>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at{company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultiplReturnsFetchData;
