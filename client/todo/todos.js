import React from 'react';

export default class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			strike: false
		}
		this.completed = this.completed.bind(this);
	}

	completed(e) {
		e.preventDefault();
		this.setState({strike: !this.state.strike});
		
	}


	render() {
		var data = ['eat', 'sleep', 'code'];
		var li   = data.map((li, index) => {
		return (
				<li 
				key    = {index}
				onClick={this.completed}
				style  ={{textDecoration:
							this.state.strike ?
							'line-through' :
							'none'
						}}
				>
				{li}
				</li>
			);
		});
		return (
		 	<ul>
				{li}
			</ul>
			)
	}
}