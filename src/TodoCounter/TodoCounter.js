import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);

	return (
		<div className="list">
			<h1 className="title">TODO LIST</h1>
			<h2 className="TodoCounter">
				Has completado {completedTodos} de {totalTodos} TODOs
			</h2>
			<img
				className="todolist"
				src="https://o.remove.bg/downloads/7e49f73a-8515-403c-aba4-d4ee169123b3/015bb09dbe1f0a24d9ddc50bf4c4b4b9-removebg-preview.png"
				alt="Lista de tareas"
			/>
		</div>
	);
}

export { TodoCounter };
