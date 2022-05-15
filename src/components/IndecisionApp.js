import react from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  addOption = (option) => {
    // console.log(option)

    if (!option) {
      return `Enter an option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This Item Aready Exists!`;
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  handleRemoveOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  picker = () => {
    const rand = Math.floor(Math.random()) * this.state.options.length;
    const option = this.state.options[rand];
    // alert(option);
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));

  };



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

  render() {
    const subtitle = "Put it into computer decisions!";
    return (
      <div>
        <Header subtitle={subtitle} />
      
          <div className="container">
            <Action
              picker={this.picker}
              hasOptions={this.state.options.length > 0}
            />

            <div className="widget">
            <Options
              remove={this.handleRemoveOptions}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption addOption={this.addOption} />

            </div>
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
         
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
