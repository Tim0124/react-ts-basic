import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal} from '../App'

type CourseGoalListProps = {
  goals: CGoal[]
  onDelete: (id: number) => void
}

export default function CourseGoalList ({goals, onDelete}:CourseGoalListProps) {

  return (
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
  )
}