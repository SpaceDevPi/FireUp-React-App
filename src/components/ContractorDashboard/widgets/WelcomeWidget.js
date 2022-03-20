import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as WelcomeSVG } from '../../../assets/svg/welcome.svg';

const WelcomeWidget = () => {
  return (
    <Card elevation={0} sx={{ backgroundColor: "transparent", md: 2}}>
        <CardContent>
            <Typography variant="h3" gutterBottom component="div">
                welcome Firstname Lastname
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 300, md: 3}} component="div">
                subheader
            </Typography>
            <Typography color="textSecondary" component="p" gutterBottom marginBottom={2} variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <WelcomeSVG />
        </CardContent>
    </Card>
  )
}

export default WelcomeWidget
