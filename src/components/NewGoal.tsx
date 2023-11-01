import { FormEvent, useRef, useState } from "react"

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const [goalError, setGoalError] = useState('')
  const [summaryError, setSummaryError] = useState('')
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    if(enteredGoal.length || enteredSummary.length === 0) {
      setGoalError('Please enter your goal')
      setSummaryError('Please enter your summary')
      setTimeout(()=> {
        setGoalError('')
        setSummaryError('')
      },2000)
      
      return
    }

    event.currentTarget.reset()
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal" ref={goal} placeholder={goalError} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" name="summary" ref={summary} placeholder={summaryError} />
      </p>
      <button>Add Goal</button>
    </form>
  )
}