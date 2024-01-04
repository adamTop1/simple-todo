import { ReactElement, createContext, useReducer } from 'react'
import React from 'react'

export interface todoType {
	id: number
	title: string
	isDone: boolean
}

const initState: todoType[] = [
	{ id: 1, title: 'clean smth', isDone: false },
	{ id: 2, title: 'clean smth2', isDone: false },
]

export interface TodosContextProps {
	state: todoType[]
	dispatch: React.Dispatch<Action>
}
export const TodosContext = createContext<TodosContextProps | undefined>(undefined)

type Action =
	| { type: 'ADD'; payload: string }
	| { type: 'DELETE'; payload: number }
	| { type: 'STATUS'; payload: { isDone: boolean; id: number } }
	| { type: 'EDIT'; payload: { id: number; title: string } }

const reducer = (state: typeof initState, action: Action) => {
	switch (action.type) {
		case 'ADD': {
			const todoExists = state.find(item => item.title === action.payload)

			if (todoExists) {
				return state
			}
			const id = Date.now()
			const title = action.payload
			const isDone = false

			return [...state, { id, title, isDone }]
		}
		case 'DELETE': {
			const id = action.payload

			const filterTodos = state.filter(item => item.id !== id)

			return filterTodos
		}
		case 'STATUS': {
			const isDone = action.payload.isDone

			const updatedTodos = state.map(todo => (todo.id === action.payload.id ? { ...todo, isDone } : todo))

			return updatedTodos
		}
		case 'EDIT': {
			const id = action.payload.id
			const newTodoTitle = action.payload.title

			const updatedTodos = state.map(todo => (todo.id === id ? { ...todo, title: newTodoTitle } : todo))

			return updatedTodos
		}
		default:
			return state
	}
}

type ChildrenType = {
	children?: ReactElement | ReactElement[]
}

export const TodosProvider = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, initState)

	return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>
}
