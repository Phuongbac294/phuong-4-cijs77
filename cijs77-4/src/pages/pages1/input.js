import {useState} from 'react'

export default function Input() {
	
	const [input, setInput] = useState("")
	
	

	const handleInputChange = (event) => {
		setInput(event.target.value)
	}

    const write = (str) => {
        return ('thử nghiệm', str);
    }
    
    const handleSubmit = (event) => {
		event.preventDefault();
		console.log(input);
		// setInput("");
       
	}
    
	return (
        <>
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={handleInputChange} />
			<button type="submit">Submit</button>
		</form>
        <p>{write(input)}</p>
        </>
	)
}