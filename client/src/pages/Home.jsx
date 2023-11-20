import { useState, useEffect } from "react"

export default function Home() {

  const [backendData, setBackendData] = useState([{}])
  const [currentFile, setCurrentFile] = useState('')

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const handleFileUpdate = (e) => {
    setCurrentFile(e.target.value.split('\\').pop())
  }

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
      <div className="choose-file">
        <input
          type="file"
          id="file-input"
          accept=".json"
          onChange={handleFileUpdate}
          hidden
        />
        <label for="file-input">Choose File</label>
      </div>
      <div className="file-name">
        {currentFile === '' && <p>No file selected</p>}
        {currentFile !== '' && <p>File selected: '{currentFile}'</p>}
      </div>
    </div>
  )
}