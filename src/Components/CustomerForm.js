import React, { useState } from 'react';
import { Grid, TextField, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function CustomerCreationForm(props) {
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    gstinNumber: '',
    importExportCode: '',
    phoneNumber: '',
    emailId: '',
    website: '',
  });

  const [addressDetails, setAddressDetails] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [contactPerson, setContactPerson] = useState({
    pocName: '',
    jobTitle: '',
    contactNumber1: '',
    contactNumber2: '',
    contactEmailId: '',
  });
  const [authorisedPerson, setAuthorisedPerson] = useState({
    authorisedPersonName: '',
    authorisedPersonDesignation: '',
    authorisedPersonContactNumber1: '',
    authorisedPersonContactNumber2: ''
  });

  const [customerData, setCustomerData] = useState([]); // State to store submitted data

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('companyDetails')) {
      setCompanyDetails({ ...companyDetails, [name.replace('companyDetails.', '')]: value });
    } else if (name.includes('addressDetails')) {
      setAddressDetails({ ...addressDetails, [name.replace('addressDetails.', '')]: value });
    } else if (name.includes('contactPerson')) {
      setContactPerson({ ...contactPerson, [name.replace('contactPerson.', '')]: value });
    } else if (name.includes('authorisedPerson')) {
      setAuthorisedPerson({ ...authorisedPerson, [name.replace('authorisedPerson.', '')]: value });
    }
  };
  const initialState = {
    companyDetails: {
      companyName: '',
      gstinNumber: '',
      importExportCode: '',
      phoneNumber: '',
      emailId: '',
      website: '',
    },
    addressDetails: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
    },
    contactPerson: {
      pocName: '',
      jobTitle: '',
      contactNumber1: '',
      contactNumber2: '',
      contactEmailId: '',
    },
    authorisedPerson: {
      authorisedPersonName: '',
      authorisedPersonDesignation: '',
      authorisedPersonContactNumber1: '',
      authorisedPersonContactNumber2: ''
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      ...companyDetails,
      ...addressDetails,
      ...contactPerson,
      ...authorisedPerson,
    };

    setCompanyDetails({ ...initialState.companyDetails });
    setAddressDetails({ ...initialState.addressDetails });
    setContactPerson({ ...initialState.contactPerson });
    setAuthorisedPerson({ ...initialState.authorisedPerson });
    props.setCustomerData((prevCustomerData) => [...prevCustomerData, newCustomer]);
    navigate('/');

  };

  const handleCancel = () => {
    setCompanyDetails('');
    setAddressDetails('');
    setContactPerson('');
    setAuthorisedPerson('');
    navigate('/')

  }
  console.log(customerData)
  return (
    <>
      <form>
        <Grid container marginTop={10} flexDirection="column" >
          <Grid item xs={12} >
            <Typography style={{ fontWeight: 'bold' }}>Customer Creation</Typography>
          </Grid>

          <Grid item xs={12}  >
            <Grid m={1} container spacing={2} >
              <Grid item xs={12}>
                <Typography style={{ fontWeight: 'bold' }}>Company Details</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField

                  required
                  label="Company Name"
                  name="companyDetails.companyName"
                  value={companyDetails.companyName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="GSTIN Number"
                  name="companyDetails.gstinNumber"
                  value={companyDetails.gstinNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="Import Export Code"
                  name="companyDetails.importExportCode"
                  value={companyDetails.importExportCode}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="Phone Number"
                  name="companyDetails.phoneNumber"
                  value={companyDetails.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="E-mail ID"
                  name="companyDetails.emailId"
                  value={companyDetails.emailId}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="Website"
                  name="companyDetails.website"
                  value={companyDetails.website}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} >
            <Grid container spacing={2} m={1}>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: 'bold' }}>Address Details</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required

                  label="Address Line 1"
                  name="addressDetails.addressLine1"
                  value={addressDetails.addressLine1}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required

                  label="Address Line 2"
                  name="addressDetails.addressLine2"
                  value={addressDetails.addressLine2}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="City"
                  name="addressDetails.city"
                  value={addressDetails.city}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField

                  required
                  label="State"
                  name="addressDetails.state"
                  value={addressDetails.state}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="Pincode"
                  name="addressDetails.pincode"
                  value={addressDetails.pincode}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} >
            <Grid container spacing={2} m={1}>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: 'bold' }}> Contact Person</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required

                  label="POC Name"
                  name="contactPerson.pocName"
                  value={contactPerson.pocName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  type
                  label="Job title"
                  name="contactPerson.jobTitle"
                  value={contactPerson.jobTitle}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  label="Contact Number 1"
                  name="contactPerson.contactNumber1"
                  value={contactPerson.contactNumber1}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  label="Contact Number 2"
                  name="contactPerson.contactNumber2"
                  value={contactPerson.contactNumber2}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  label="Contact E-mail ID"
                  name="contactPerson.contactEmailId"
                  value={contactPerson.contactEmailId}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

            </Grid>
          </Grid>


          <Grid item xs={12} >
            <Grid container spacing={2} m={1}>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: 'bold' }}>Authorised Person</Typography>
              </Grid>
              <Grid item xs={4} >
                <TextField
                  required

                  label="Authorised Person Name"
                  name="authorisedPerson.authorisedPersonName"
                  value={authorisedPerson.authorisedPersonName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} >
                <TextField
                  required

                  label="Authorised Person Designation"
                  name="authorisedPerson.authorisedPersonDesignation"
                  value={authorisedPerson.authorisedPersonDesignation}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} >
                <TextField
                  required

                  label="Authorised Person Contact Number1"
                  name="authorisedPerson.authorisedPersonContactNumber1"
                  value={authorisedPerson.authorisedPersonContactNumber1}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} >
                <TextField
                  required

                  label="Authorised Person Contact Number2"
                  name="authorisedPerson.authorisedPersonContactNumber2"
                  value={authorisedPerson.authorisedPersonContactNumber2}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>


            </Grid>
          </Grid>
          <Grid container justifyContent="center" >
            <Button onClick={handleCancel} variant="contained"
              color="primary"

              sx={{
                m: 3,
                backgroundColor: "white",
                border: "1px solid black",
                color: "black",
                '&:hover': {
                  backgroundColor: "white",
                },
              }}> Cancel</Button>
            <Button onClick={handleSubmit} variant="contained"
              color="primary"

              sx={{
                m: 3,
                backgroundColor: "black",
                border: "1px solid black",
                color: "white",
                '&:hover': {
                  backgroundColor: "black",
                },
              }}> Save & Continue</Button>
          </Grid>
        </Grid>
      </form>




    </>
  );
}

export default CustomerCreationForm

