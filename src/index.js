import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = ['hello', 'world'];

	return(
		<div>
  			<label for="name" className="Label" >enter e-mail</label>
  			<input id="name" type="text" />
  			<button style={{ backgroundColor: 'red', color: 'white'}} >{ buttonText }</button>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)