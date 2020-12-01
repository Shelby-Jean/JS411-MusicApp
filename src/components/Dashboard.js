import React from 'react';
import { Card, CardContent, CardActions, Typography, Switch, Slider, Select, MenuItem } from '@material-ui/core';

class Dashboard extends React.Component {
  state = {
    online: true,
    volume: 20,
    quality: 2,
    notifications: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.name === "online" ? !this.state.online : event.target.value
    })
  }

  render() {
    return (
      <div className="cards-container">
        <Card>
          <CardContent>
            <Typography component="h4">
              Online Mode
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <Switch value={this.state.online} onChange={this.handleChange} />
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography component="h4">
            Master Volume
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Overrides all other sound settings in this application
            </Typography>
          </CardContent>
          <CardActions>
            <Slider marks={true} step="10" mix="0" max="100" value={this.state.volume} onChange={this.handleChange} />
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography component="h4">
              Sound Quality
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions>
            <Select value={this.state.quality} onChange ={this.handleChange}>
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Dashboard;