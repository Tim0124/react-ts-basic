import './App.css'
import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg'
import Header from './components/Header'

export default function App() {

  return (
    <main>
      <Header image={{src:goalsImg , alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title= "Learn React + TS"
        description= "Learn it from the ground up"
      >
        <p>Children Learn</p>
      </CourseGoal>
      
    </main>
  )
}
