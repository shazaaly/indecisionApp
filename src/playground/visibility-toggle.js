class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? "Hide Details" : "show Details"}
        </button>
        <p> {this.state.visibility && `thie is the secret`} </p>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<Visibility />, appRoot);

