var templateTwo = (
    <div>
      <h1> my App</h1>
      <p> {myApp.title} </p>
  
      {myApp.subtitle && <p>{myApp.subtitle}</p>}
  
      <p>{myApp.options.length > 0 ? 'options': 'No options'}  </p>
  
    
    </div>
  );
  
  var appRoot = document.getElementById("app");
  
  ReactDOM.render(templateTwo, appRoot);