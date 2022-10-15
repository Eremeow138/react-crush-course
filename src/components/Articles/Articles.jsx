import React, { useState } from "react"
import axios from "axios";
import styles from './Articles.module.scss'

const Articles = () => {
  const [city, setCity] = React.useState('Moscow');
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if(city === 'piter')
    console.log("piter")
  }, [city])

  React.useEffect(() => {

    const fetchData = async() => {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // const data = await response.json();

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(data);

      } catch (error) {
        console.log(error)
      }
      setLoading(false);
    }

    fetchData();
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {loading && 'Loading...'}

      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city'></input>
      <div className={styles.wrapper}>
        {posts.map(post => (
          <div key={post.id} className={styles.card}>
            <img src="" alt="" />
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a href="/">Read now</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles