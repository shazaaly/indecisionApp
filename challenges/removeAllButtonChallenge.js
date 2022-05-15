const removeAll = () => {
  app.options = [];
  renderTemp();
};
const appRoot = document.getElementById("app");

const renderTemp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>

      {app.subtitle && <p> {app.subtitle}</p>}

      <button onClick={removeAll}> Remove All</button>
    </div>
  );
};
