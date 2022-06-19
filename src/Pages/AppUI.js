import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <TodosError />}
				{loading && <TodosLoading />}
				{!loading && !searchedTodos.length && <EmptyTodos />}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />
		</React.Fragment>
	);
}

export { AppUI };
