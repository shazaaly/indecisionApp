class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.picker = this.picker.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: [],
    };
  } //constructor end

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  addOption(option) {
    // console.log(option)

    if (!option) {
      return `Enter an option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This Item Aready Exists!`;
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleRemoveOptions() {
    this.setState(() => ({ options: [] }));
  }

  picker() {
    const rand = Math.floor(Math.random()) * this.state.options.length;
    const option = this.state.options[rand];
    alert(option);
  }

  render() {
    const subtitle = "Put it into computer decisions!";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          picker={this.picker}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          remove={this.handleRemoveOptions}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision App",
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.picker}>
        What Should I do Now?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.remove}>Remove All</button>
      {props.options.length === 0 && <p>There is no options, Please add one to start</p>}

      {props.options.map((option) => {
        return (
          <Option
            handleDeleteOption={props.handleDeleteOption}
            key={option}
            optionText={option}
          />
        );
      })}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>

      <p>{props.optionText}</p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  addOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.option.value = "";
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.error && <p>{this.state.error}</p>}</div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add a new option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
