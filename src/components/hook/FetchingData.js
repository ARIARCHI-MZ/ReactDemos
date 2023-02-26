import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "fetch_error":
      return {
        post: {},
        loading: false,
        error: "It is wrong",
      };
    default: 
    return state;
  }
};

function FetchingData() {
  const [state , dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({type: "fetch_success",payload: response.data});
      })
      .catch((error) => {
        dispatch({type: "fetch_error"});
      });
  }, []);
  return (
    <div>
      {/* <button type="button" onClick={changeHandler}>
        {" "}
        change{" "}
      </button>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> */}
        {state.loading? `loading` :state.post.title}
        {state.error? state.error : null}
        {/* {posts.map (post => <li key={post.id}>{post.title}</li>)} */}
    </div>
  );
}

export default FetchingData;
