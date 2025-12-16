import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState('Dang tai du lieu tu Laravel...')

  useEffect(() => {
    // React (3000) gọi sang Laravel (8080)
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/hello`)
      .then(response => response.json())
      .then(json => setData(json.message))
      .catch(error => {
        console.error('Lỗi:', error);
        setData('Bi chan boi CORS hoac loi ket noi :(');
      });
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + Laravel</h1>
      
      {/* Kết quả hiển thị ở đây */}
      <div className="card">
        <h2 style={{color: 'orange'}}>{data}</h2>
        <p>
          Môi trường Docker của Thắng hoàn tất!
        </p>
      </div>
    </>
  )
}

export default App