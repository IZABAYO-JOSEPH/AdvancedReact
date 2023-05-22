import React, { useEffect, useState } from "react";
const URL = "https://api.github.com/users";
const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3> Github users</h3>
      <ul className="users">
        {users.map((user) => { 
           const { id, login, avatar_url, html_url } = user;
            return <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
        })}
      </ul>
    </section>
  );
};
export default FetchData;
