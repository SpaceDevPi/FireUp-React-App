import React from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: "#F57C00"
    }
}));

const StepButton = props => {
    const { step } = props;
    const classes = useStyles();
    switch (step) {
        case 1:
            return (
                <>
                    <Button
                        variant="contained"
                        className={classes.button}
                        type="submit"
                    >
                        Next Step
                    </Button>
                </>
            );
        case 2:
            return (
                <>
                    <Button
                        variant="contained"
                        className={classes.button}
                        type="submit"
                    >
                        Next Step
                    </Button>
                </>
            );
        case 3:
            return (
                <>
                    <Button
                        variant="contained"
                        className={classes.button}
                        type="submit"
                    >
                        Next Step
                    </Button>
                </>
            );
        case 4:
            return (
                <>
                    <Button
                        variant="contained"
                        className={classes.button}
                        type="submit"
                    >
                        Submit
                    </Button>
                </>
            );
        default:
            return <></>;
    }
}

export default StepButton;
