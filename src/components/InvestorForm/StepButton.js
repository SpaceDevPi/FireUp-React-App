import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export const StepButton = props => {
  const { step } = props;
  const classes = useStyles();
  switch (step) {
    case 1:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Next step
          </Button>
        </>
      );
    case 2:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Next step
          </Button>
          
          
          
        </>
      );
      case 3:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Submit
          </Button>
        </>
    
    
      );
      case 4:
      return (
        <>
        <a href="/InvestisorDashbord">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            MyDashbord
          </Button>
          </a>
        </>
    
    
      );
    default:
      return <></>;
  }
};



