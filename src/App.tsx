import './App.css'
import { Profile } from './components/Profile'
import ScoreCard from './components/ScoreCard'
import { useStore } from './Store/Zustand'

function App() {
  const {email,fullName, score} = useStore(s => s.user)

  return (
    <div className="App">
      <h1>Zustand</h1>
      <Profile />
      <ScoreCard />

    <div>
      <h2>FULLNAME: {fullName}</h2>
      <h2>EMAIL: {email}</h2>
      <h2>SCORE: {score}</h2>
    </div>

    </div>
  )
}

export default App
