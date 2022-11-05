import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List,ListItem} from 'material-ui/List'

export class Confirm extends Component {
  continue=e=>{//when continue button is clicked it proceeds to next page in the form
    e.preventDefault();
    //After clicking this the data in form gets processed
    this.props.nextStep();
  }

  back=e=>{//when back button is clicked it reverses to previous page in the form
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const{values:{fname,lname,email,occupation,city,bio}}=this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm"
          />
        <List>
            <ListItem
            primaryText="First Name"
            secondaryText={fname}
            />
            <ListItem
            primaryText="Last Name"
            secondaryText={lname}
            />
            <ListItem
            primaryText="Email"
            secondaryText={email}
            />
            <ListItem
            primaryText="Occupation"
            secondaryText={occupation}
            />
            <ListItem
            primaryText="City"
            secondaryText={city}
            />
            <ListItem
            primaryText="Bio"
            secondaryText={bio}
            />
        </List>
          <br/>
          <RaisedButton
          label="previous"
          primary={false}
          style={styles.button}
          onClick={this.back}//moves to line 8
          />
          <RaisedButton
          label="confirm & continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}//moves to line 8
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles={
  button:{
    margin:30
  }
}

export default Confirm;

