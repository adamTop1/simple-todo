import { useContext } from "react"
import { TodosContext } from "../context/TodoProvider"
import { TodosContextProps } from "../context/TodoProvider";

const useTodos = (): TodosContextProps => {
    const context = useContext(TodosContext);

    if (!context) {
      throw new Error('useTodoContext must be used within a TodoProvider');
    }
  
    return context
}

export default useTodos