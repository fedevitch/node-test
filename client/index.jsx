import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<center><h3>Hello from boilerplate</h3></center>
			</div>
		);
	}
}


ReactDOM.render(
	<Main />,
	document.getElementById('main_app')
);
