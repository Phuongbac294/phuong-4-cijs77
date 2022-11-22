import {useState} from 'react'

export default function Input() {
	
	const [input, setInput] = useState("")
	const [str, setStr] = useState([]);

	const handleInputChange = (event) => {
		setInput(event.target.value)
	} 
    
    const handleSubmit = (event) => {
		event.preventDefault();
		setStr([
			...str,
			input,
		])
		console.log(input);
		setInput("");       
	};

	const ListStr = str.map(item => {
        return <li value={item} >{item}</li>});
  
    
	return (
        <div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={input} onChange={handleInputChange}></input>
				<button type="submit">Submit</button>
			</form>
			<ul>{ListStr}</ul>
		</div>
	);
};