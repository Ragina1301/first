import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>response.json()
    ).then((postData)=>setData(postData))
  }, [])

  return (
    <div>
        <ol>
          {data.map((post)=>{
          return(
            <li key={post.id}>{post.title}</li>
          )
        })}
        </ol>
      </div>
  );
};

export default App;
