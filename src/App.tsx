import './App.css'
import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => WebApp.showAlert('Hello World!')}>
           Hello World
        </button>
      </div>
    </>
  )
}

export default App
