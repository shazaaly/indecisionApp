import react from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.remove}>
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget-parsgraph">Please add an option to start</p>
    )}

    {props.options.map((option, index) => {
      return (
        <Option
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
          key={option}
          optionText={option}
        />
      );
    })}
  </div>
);
export default Options;
