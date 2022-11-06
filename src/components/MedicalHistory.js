import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class MedicalHistory extends Component {
  continue=e=>{//when continue button is clicked it proceeds to next page in the form
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const{values,handleChange}=this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Patient Details"
          />
          <TextField hintText="Enter your first name"
          floatingLabelText="First Name"
          onChange={handleChange('fname')}
          defaultValue={values.fname}
          />
          <br/>
          <TextField hintText="Enter your last name"
          floatingLabelText="Last Name"
          onChange={handleChange('lname')}
          defaultValue={values.lname}
          />
          <br/>
          <TextField hintText="Enter your patient's date of birth"
          floatingLabelText="DOB"
          onChange={handleChange('pat_dob')}
          defaultValue={values.pat_dob}
          />
          <br/>
          <TextField hintText="Enter your address"
          floatingLabelText="Address"
          onChange={handleChange('pat_addr')}
          defaultValue={values.email}
          />
          <br/>
          <TextField hintText="M/F/Other"
          floatingLabelText="Sex"
          onChange={handleChange('sex')}
          defaultValue={values.sex}
          />
          <br/>
          <TextField hintText="Enter your blood type"
          floatingLabelText="Blood type"
          onChange={handleChange('blood')}
          defaultValue={values.blood}
          />
          <br/>
          <TextField hintText="History of chronic diseases"
          floatingLabelText="Chronic diseases"
          onChange={handleChange('chr_dis')}
          defaultValue={values.chr_dis}
          />
          <br/>
          <TextField hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          />
          <br/>
          <TextField hintText="Enter your phone number"
          floatingLabelText="Phone number"
          onChange={handleChange('phnum')}
          defaultValue={values.email}
          />
          <br/>
          <TextField hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          />
          <br/>
          <TextField hintText="Enter your city"
          floatingLabelText="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
          />
          <br/>
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

export default MedicalHistory;

