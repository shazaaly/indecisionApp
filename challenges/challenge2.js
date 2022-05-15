var myApp = {
  title: "App title",
  subtitle: "App Subtitle",
};

var templateTwo = (
  <div>
    <h1> my App</h1>
    <p> {myApp.title} </p>
    <p> {myApp.subtitle} </p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
