class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const str = localStorage.getItem("count");
      const latestcount = parseInt(str, 10);
      if (latestcount !== isNaN) {
        this.setState(() => ({
          count: latestcount,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  resetCounter() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Count :{this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.resetCounter}>Reset</button>
        <button onClick={this.minusOne}> - 1 </button>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<Counter />, appRoot);

// //JSX - Javascript XML

// let count = 0;

// const minusOne = () => {
//   count--;
//   renderCounter();
// };

// const addOne = () => {
//   count++;
//   renderCounter();
// };

// const reset = () => {
//     count = 0;
//     renderCounter();
//   };
// const someId = "myId";
// const appRoot = document.getElementById("app");

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count : {count} </h1>
//       <button onClick={addOne} id={someId} className="button">
//         +1
//       </button>
//       <button onClick={reset} id={someId} className="button">
//       Reset
//     </button>

//       <button onClick={minusOne}> - 1 </button>
//     </div>
//   );
// ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter()
