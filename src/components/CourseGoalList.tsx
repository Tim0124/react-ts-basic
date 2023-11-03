import { ReactNode } from "react"
import { type CourseGoal as CGoal} from '../App'
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox"

type CourseGoalListProps = {
  goals: CGoal[]
  onDelete: (id: number) => void
}

export default function CourseGoalList ({goals, onDelete}:CourseGoalListProps) {
  let warningBox:ReactNode ;

  if( goals.length === 0) {
    return (
      <InfoBox mode="hint" >You have no course goal yet. Start adding some</InfoBox>
    )
  }

    

  if(goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
    )
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDeleteGoal={onDelete}
            >
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}