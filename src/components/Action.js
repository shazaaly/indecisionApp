
import react from "react";
const Action = (props) => {
    return (
      <div>
        <button className="big-button"  disabled={!props.hasOptions} onClick={props.picker}>
          What Should I do Now?
        </button>
      </div>
    );
  };

  export default Action