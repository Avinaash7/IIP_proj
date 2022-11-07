import React, { Component } from 'react';
import MedicalHistory from './MedicalHistory';
import InsuranceDetails from './InsuranceDetails';
import Medicine from './Medicine';
import Success from './Success';

export class UserForm extends Component {
    state={
        step:1,
        fname:'',
        lname:'',
        pat_dob:'',
        pat_addr:'',
        sex:'',
        blood:'',
        chr_dis:'',
        email:'',
        phnum:'',
        occupation:'',
        city:'',
        policy_holder:'',
        pol_dob:'',
        policy:'',
        rel_to_patient:'',
        pol_addr:'',
        pol_ph_num:'',
        sumass:'',
        validity:'',
        hos:'',
        hosno:'',
        docname:'',
        docid:'',
        visitdate:'',
        meds:'',
        prob:'',
        med_allergy:'',
        bill:''
    }

    //proceed to next step
    nextStep=()=>{
        //pulling step out of state using destructuring
        const {step}=this.state;
        //going to next step
        this.setState({
            step:step+1
        })
    }
    //goin back to previous step
    previousStep=()=>{
        //pulling step out of state using destructuring
        const {step}=this.state;
        //going to next step
        this.setState({
            step:step-1
        })
    }

    //handle changes in input fields
    handleChange=input=>e=>{
        //using event value e and setting input to target value of event e
        this.setState({[input]:e.target.value})
    }
  render() {
    const {step}=this.state
    const {fname,lname,pat_dob,pat_addr,sex,blood,chr_dis,email,phnum,occupation,city,policy_holder,pol_dob,policy,rel_to_patient,pol_addr,pol_ph_num,sumass,validity,hos,hosno,docname,docid,visitdate,meds,prob,med_allergy,bill}=this.state;
    const values={fname,lname,pat_dob,pat_addr,sex,blood,chr_dis,email,phnum,occupation,city,policy_holder,pol_dob,policy,rel_to_patient,pol_addr,pol_ph_num,sumass,validity,hos,hosno,docname,docid,visitdate,meds,prob,med_allergy,bill}

    switch(step){
        case 1:
            return(
                <MedicalHistory
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 2:
            return(
                <Medicine
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 3:
            return(
                <InsuranceDetails
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 4:
            return(
                <Success/>
            )
        default:
    }
    
  }
}

export default UserForm