import React, { Component } from "react";
import axios from "axios";
class ReactClSho extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredName: "",
      enteredLast: "",
      enteredNationality: "",
      selectJob: "Worker",
    };
    this.inpFocus = React.createRef();
  }
  componentDidMount() {
    this.inpFocus.current.focus();
    console.log(this.inpFocus.current);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  jobHandler = (event) => {
    this.setState({
      selectJob: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then((response)=> {
      console.log(response);
    })
    .catch ((error) => {
      console.log(error); 
    })
  };
  render() {
    const { enteredName, enteredLast, enteredNationality } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label> First Name :</label>
            <input
              type="text"
              name="enteredName"
              value={enteredName}
              ref={this.inpFocus}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label> last Name :</label>
            <input
              type="text"
              name="enteredLast"
              value={enteredLast}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label> nationality :</label>
            <input
              type="text"
              name="enteredNationality"
              value={enteredNationality}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Job :</label>
            <select value={this.state.selectJob} onChange={this.jobHandler}>
              <option value="Student">Student</option>
              <option value="Worker">Worker</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div>
            <button type="submit"> submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReactClSho;
