import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";



const AchievementWidget = () => {
    
  return (
    <Card sx={{ bgcolor:"primary.main", color:"primary.contrastText"}} >
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Avatar sx={{ bgcolor: "secondary.main", md: 3 }} >
                <StarIcon color="primary" />
            </Avatar>
            <Typography variant="h5" gutterBottom component="div">
                You have achieved your goal!
            </Typography>
            <Typography  marginBottom={3} component="body2">
                profile info
            </Typography>
            <Button variant="contained"  color="secondary" sx={{ marginTop: 3 }}>
                view profile
            </Button>
        </CardContent>
    </Card>
  )
}

export default AchievementWidget
