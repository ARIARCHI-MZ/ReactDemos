import "./App.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import DEMOform from "./components/DEMOS/FORM DEMO/DEMOform";
import GreetingDemo from './components/DEMOS/Greeting carts/GreetingDemo';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  const [activeDemo, setActiveDemo] = React.useState("form");

  const handleDemoChange = (demo) => {
    setActiveDemo(demo);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => handleDemoChange("form")}
            disabled={activeDemo === "form"}
          >
            Registration Form Demo
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => handleDemoChange("card")}
            disabled={activeDemo === "card"}
          >
            Gift Card Demo
          </Button>
        </Toolbar>
      </AppBar>

      {activeDemo === "form" && <DEMOform />}
      {activeDemo === "card" && <GreetingDemo />}
    </div>
  );
}

export default App;
