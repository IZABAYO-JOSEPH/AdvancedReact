import React from "react";
import UseFetchPerson from "./useCustomHookFetch";

const URL = "https://api.github.com/users/QuincyLarson";
const CustomHookFetchData = () => {
  const {isLoading,isError, user} = UseFetchPerson(URL)
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>there was an error...</h2>;
  }
  const {avatar_url,company,name,bio}  = user
  return (
    <div>
        <h4>custom hooks on more complex project</h4>
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

export default CustomHookFetchData;
