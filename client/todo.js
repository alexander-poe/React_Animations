import React from 'react';


class ToDoApp extends Component {
	render() {
		const {
			todos, 
			visibilityFilter
		} = this.props;
	
		const visibileTodos = getVisibleTodos(
			todos,
			visibilityFilter
			);
		return (


			)
	}
}