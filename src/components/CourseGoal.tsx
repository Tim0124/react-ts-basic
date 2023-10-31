import { PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string; 
//   description: string
//   children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id: number
  title:string; 
  description: string
  onDeleteGoal: (id: number) => void

}>

export default function CourseGoal ({title, description, id, onDeleteGoal}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  )
}

// const CourseGoal: FC<CourseGoalProps> = ({title, description, children}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// export default CourseGoal

