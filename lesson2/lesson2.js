function NameCard(props) {
    return (
    //   <div className="card">
        <div className="name">Name: {props.name}</div>
        <div className="age">Age: {props.age}</div>
    //   </div>
    )
  }
  
  ReactDOM.render(
    <div>
        <NameCard name="Alice" age="20" />
        <NameCard name="Bob" age="20" />
        <NameCard name="Cris" age="20" />
        <NameCard name="Diễm cô nương" age="36" />
    </div>,
    document.getElementById("app")
  )