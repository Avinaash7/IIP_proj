import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class InsuranceDetails extends Component {
  continue=e=>{//when continue button is clicked it proceeds to next page in the form
    e.preventDefault();
    this.props.nextStep();
  }

  back=e=>{//when back button is clicked it reverses to previous page in the form
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const{values,handleChange}=this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Insurance Details"
          />
          <TextField hintText="Name of policy holder"
          floatingLabelText="Policy holder name"
          onChange={handleChange('policy_holder')}
          defaultValue={values.policy_holder}
          />
          <br/>
          <TextField hintText="Enter policy holder's DOB"
          floatingLabelText="Policy holder DOB"
          onChange={handleChange('pol_dob')}
          defaultValue={values.pol_dob}
          />
          <br/>
          <TextField hintText="Enter your policy"
          floatingLabelText="Policy name"
          onChange={handleChange('policy')}
          defaultValue={values.policy}
          />
          <br/>
          <TextField hintText="Policy holder's relation to patient"
          floatingLabelText="Relation to patient"
          onChange={handleChange('rel_to_patient')}
          defaultValue={values.rel_to_patient}
          />
          <br/>
          <TextField hintText="Enter policy holder's address"
          floatingLabelText="Policy holder's address"
          onChange={handleChange('pol_addr')}
          defaultValue={values.bio}
          />
          <br/>
          <TextField hintText="Enter policy holder's phone number"
          floatingLabelText="Policy holder's phone number"
          onChange={handleChange('pol_ph_num')}
          defaultValue={values.pol_ph_num}
          />
          <br/>
          <RaisedButton
          label="previous"
          primary={false}
          style={styles.button}
          onClick={this.back}//moves to line 13
          />
          <RaisedButton
          label="continue"
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

export default InsuranceDetails
;

