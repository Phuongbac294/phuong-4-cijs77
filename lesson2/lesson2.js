function NameCard(props) {
    return (
      <div className="card">
        <div className="name">Name: {props.name}</div>
        <div className="age">Age: {props.age}</div>
      </div>
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

  function NameItem(list) {
    return (
        <div className="todolist__item">
            <input type="radio" className="item"></input>
            <label for="html" className="itemName">{list.itemName}</label><br></br>
        </div>
    )    
  }

  ReactDOM.render (
    <div>
        <NameItem itemName="Buy some milk" />
        <NameItem itemName="Jogging" />
        <NameItem itemName="Learn React" />
        <NameItem itemName="Doing Exercies" />
    </div>,
    document.getElementsByClassName("todolist__lesson2")
  )