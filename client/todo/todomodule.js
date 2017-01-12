import React from 'react';
import Todos from './todos';
import Input from './input';


const ToDoModule = () => {

	return (
		<div className="todo">
			<Input/>
			<Todos/>
		</div>

		)
}

export default ToDoModule;