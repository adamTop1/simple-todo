import useTodos from "../hooks/useTodos"

function Stats() {
  const {state} = useTodos()

  const totalTodos = state.length

  const succeedTodos = state.filter((item) => item.isDone === true).length
  
  const pendingTodos = state.filter((item) => item.isDone === false).length

  return (
    <div className="flex gap-6 mt-10 font-bold">
        <div>TOTAL: {totalTodos}</div>
        <div>SUCCESS: {succeedTodos}</div>
        <div>PENDING: {pendingTodos}</div>
    </div>
  )
}

export default Stats