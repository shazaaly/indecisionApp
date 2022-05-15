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
  const appRoot = document.getElementById("app");
  
  const renderTemp = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
  
        {app.subtitle && <p> {app.subtitle}</p>}
        <p> {app.subtitle.length > 0 ? "Here Are options" : "No options"}</p>
        <p>{app.options.length}</p>
        <ol> Item 1</ol>
        <ol> Item 2</ol>
  
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
  
          <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  renderTemp();
  