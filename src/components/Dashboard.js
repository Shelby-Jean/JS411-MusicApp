import React from 'react';
import { Card, CardContent, CardActions, Typography, Switch, Slider, Select, MenuItem } from '@material-ui/core';

class Dashboard extends React.Component {
  state = {
    online: true,
    volume: 20,
    quality: 2,
    notifications: [
      "Your application is offline. You won't be able to share or stream music to other devices.", 
      "Listening to music at a high volume could cause long-term hearing loss.",
      "Music quality is degraded. Increase quality if your connection allows it."
    ]
  }

  handleOnline = () => {
    this.setState({
      online: !this.state.online
    })
  }

  handleVolume = (event, value) => {
    this.setState({
      volume: value
    })
  }

  handleQuality = (event) => {
    this.setState({
      quality: event.target.value
    })
  }

  // componentDidUpdate = (prevState) => {
    
  // }


  render() {
    return (
      <div className="dashboard-container">

        <div className="welcome-header">
          <Typography component="h2" variant="h5" color="textSecondary" display="inline">Welcome User!</Typography>
        </div>

        <div className="cards-container">
          <Card className="card">
            <CardContent>
              <Typography component="h4" fontWeight="fontWeightBold">
                Online Mode
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <Switch checked={this.state.online} onChange={this.handleOnline} value={this.state.online} name="online" />
            </CardActions>
          </Card>

          <Card className="card" id="middle-card">
            <CardContent>
              <Typography component="h4" fontWeight="fontWeightBold">
              Master Volume
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Overrides all other sound settings in this application
              </Typography>
            </CardContent>
            <CardActions>
              <Slider marks={true} step={10} min={0} max={100} onChange={this.handleVolume} value={this.state.volume} name="volume" />
            </CardActions>
          </Card>

          <Card className="card">
            <CardContent>
              <Typography component="h4" fontWeight="fontWeightBold">
                Sound Quality
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Manually control the music quality in event of poor connection
              </Typography>
            </CardContent>
            <CardActions>
              <Select value={this.state.quality} onChange ={this.handleQuality} name="quality">
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </CardActions>
          </Card>
        </div>
        
        <div>
          <Typography component="h3" variant="h6" display="inline">System Notifications:</Typography>
          {this.state.online ? null :
            <div>
              <p style={{color: "red"}}>{this.state.notifications[0]}</p>
            </div>
          }
          {this.state.volume > 80 ?
            <div>
              <p style={{color: "red"}}>{this.state.notifications[1]}</p>
            </div>
            : null
          }
          {this.state.quality === 1 ?
            <div>
              <p style={{color: "red"}}>{this.state.notifications[2]}</p>
            </div>
            : null
          }
        </div>
        

      </div>
    )
  }
}

export default Dashboard;