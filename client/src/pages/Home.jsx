import { useState, useEffect } from "react"

export default function Home() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="home">
      <h2>Welcome</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        {(typeof backendData.testData === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.testData.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
    </div>
  )
}