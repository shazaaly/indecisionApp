const app = {
    title: "Indecision App",
    subtitle: "How to be a successfull React Js Dev",
    options: [],
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    //catch value, check if not empty then push to options array then clear input then rerender
    const option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = "";
      renderTemp();
    }
    // console.log(option)
  };
  
  const removeAll = () => {
    app.options = [];
    renderTemp();
  };
  const onDecision = () => {
    const optionsNum = app.options.length;
    const rand = Math.floor(Math.random() * optionsNum);
    const option = app.options[rand];
    alert(option);
  };
  const numbers = [11, 22, 33, 44, 55];
  const appRoot = document.getElementById("app");
  
  const renderTemp = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
  
        {app.subtitle && <p> {app.subtitle}</p>}
        <button disabled={app.options.length == 0} onClick={onDecision}>
          What Should I do?
        </button>
  
        <button onClick={removeAll}> Remove All</button>
        <p>{app.options.length}</p>
  
        {
          // numbers.map( (number)=>{
          //     return <p key="{number}">Number : {number}</p>
          // })
        }
        <ol>
          {app.options.map((option) => {
            return <li key="{option}"> {option}</li>;
          })}
        </ol>
  
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
  
          <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  renderTemp();
  