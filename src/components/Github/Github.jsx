import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/arifremal")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 p-4 text-white text-3xl">
      Github flwrs {data.followers}
      <img src={data.avatar_url} alt="git image" />
    </div>
  );
}

export default Github;

export const githubInnnfo = async () => {
  const res = await fetch("https://api.github.com/users/arifremal");
  return res.json();
};
