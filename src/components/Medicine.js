import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Medicine extends Component {
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
          <AppBar title="Medical Details"
          />
          <TextField hintText="Enter hospital name"
          floatingLabelText="Hospital"
          onChange={handleChange('hos')}
          defaultValue={values.hos}
          />
          <br/>
          <TextField hintText="Enter hospital number"
          floatingLabelText="Hospital No"
          onChange={handleChange('hosno')}
          defaultValue={values.hosno}
          />
          <br/>
          <TextField hintText="Enter the name of the doctor treated: "
          floatingLabelText="Doctor Name"
          onChange={handleChange('docname')}
          defaultValue={values.docname}
          />
          <br/>
          <TextField hintText="Enter the ID of the doctor: "
          floatingLabelText="Doctor ID"
          onChange={handleChange('docid')}
          defaultValue={values.docid}
          />
          <br/>
          <TextField hintText="Enter the date of visit "
          floatingLabelText="Visit Date"
          onChange={handleChange('visitdate')}
          defaultValue={values.visitdate}
          />
          <br/>
          <TextField hintText="Medicine allergies,if any"
          floatingLabelText="Medicinal allergies"
          onChange={handleChange('med_allergy')}
          defaultValue={values.med_allergy}
          />
          <br/>
          <TextField hintText="Enter the problem: "
          floatingLabelText="Treated for"
          onChange={handleChange('prob')}
          defaultValue={values.prob}
          />
          <br/>
          <TextField hintText="Enter medicine names"
          floatingLabelText="Prescribed Medicine(s)"
          onChange={handleChange('meds')}
          defaultValue={values.meds}
          />
          <br/>
          <TextField hintText="Enter the Bill amount: "
          floatingLabelText="Total amount"
          onChange={handleChange('bill')}
          defaultValue={values.bill}
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

export default Medicine;

