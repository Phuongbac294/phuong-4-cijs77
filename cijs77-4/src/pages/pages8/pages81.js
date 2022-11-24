import {useState, useEffect, useLayoutEffect} from 'react';


function Pages81() {
	const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(false)

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	},[count])

    useEffect(() => {
		document.addEventListener("scroll", () => {
			const position = document.documentElement.scrollTop;
			console.log("scrolling position: ", position);
		})
	})

    useEffect(() => {
		const handleScroll = () => {
			const position = document.documentElement.scrollTop;
			console.log("scrolling position: ", position);
		}
		document.addEventListener("scroll", handleScroll)
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	})
    
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])
    
    const HandleCount = () => {
        setCount(count+1)
    }
	return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={HandleCount}>
        Click me
      </button>
      <div>
				{visible && <p>This is hidden content</p>}
				<button onClick={() => setVisible(!visible)}>Change visible</button>
			</div>
    </div>
  );
}

export default Pages81;