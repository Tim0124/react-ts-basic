import './App.css'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {
    setGoals(prevGoal => {
      const newGoal:CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth',
      }
      return [...prevGoal, newGoal]
    })
  }

  function handleDeleteGoal (id: number) {
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src:goalsImg , alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
     <CourseGoalList goals={goals} onDelete={handleDeleteGoal}/>
      
      
    </main>
  )
}
