import React from "react";

import {
  Box,
  CardMedia,
  Card,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core";
import { Page } from "../Page/Page";
import MuiPhoneNumber from "material-ui-phone-number";
import { makeStyles } from "@material-ui/core/styles";
import { useFormSubmit } from "../../hooks/useFormSubmit";

import OrangeSpread from "../../images/full-spread/full_orange_spread.jpg";

const useStyles = makeStyles((theme) => ({
  formInputs: {
    //flexGrow: 1,
    width: "100%",
  },
  formRows: {
    paddingTop: "30px",
  },
  form: {
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

const orderTopics = [
  { value: "Cake Order" },
  { value: "Cookie Order" },
  { value: "Wedding Cake Tasting/Order" },
  { value: "Event Catering" },
  { value: "Cake/Cookie Decorating Classes" },
  { value: "Other..." },
];

const contactPreferences = [
  { value: "Text" },
  { value: "Phone" },
  { value: "Email" },
];

export const ContactUs = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [contactPreference, setContactPreference] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const [{ data }, execute] = useFormSubmit("/api/contact-us");
  const classes = useStyles();

  const onSubmit = React.useCallback(() => {
    const formData = new FormData();

    console.log(firstName);

    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("number", phoneNumber);
    formData.append("preference", contactPreference);
    formData.append("subject", subject);
    formData.append("body", body);

    execute({ data: formData });
  }, [
    body,
    contactPreference,
    email,
    execute,
    firstName,
    lastName,
    phoneNumber,
    subject,
  ]);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Page title="Contact Us">
      <Card style={{ position: "relative", height: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          image={OrangeSpread}
          alt="Wedding Cake Tasting Display"
          style={{ height: "95vh" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Paper
            elevation={20}
            component={Box}
            p={4}
            height="75%"
            classes={{ root: classes.form }}
            overflow="auto"
          >
            <form
              noValidate={true}
              autoComplete="off"
              style={{ width: "100%", height: "100%" }}
              onSubmit={() => {
                onSubmit();
              }}
            >
              <Grid
                container={true}
                width="100%"
                height="100%"
                display="flex"
                //flexDirection="column"
                spacing={3}
                //justifyContent="space-evenly"
              >
                <Grid item={true} xs={12}>
                  <Typography variant="h3">Contact Us</Typography>
                </Grid>

                <Grid item={true} xs={6} lg={3}>
                  <TextField
                    id="first-name"
                    required={true}
                    value={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    label="First Name"
                    variant="outlined"
                    classes={{ root: classes.formInputs }}
                  />
                </Grid>
                <Grid item={true} xs={6} lg={3}>
                  <TextField
                    id="last-name"
                    required={true}
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    label="Last Name"
                    variant="outlined"
                    classes={{ root: classes.formInputs }}
                  />
                </Grid>

                <Grid item={true} xs={12} lg={6}>
                  <TextField
                    id="email"
                    required={true}
                    label="Email"
                    variant="outlined"
                    classes={{ root: classes.formInputs }}
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Grid>

                <Grid item={true} xs={12} md={6}>
                  <MuiPhoneNumber
                    id="phone"
                    type="tel"
                    defaultCountry="us"
                    onlyCountries={["us", "ca"]}
                    variant="outlined"
                    disableAreaCodes={true}
                    disableCountryCode={true}
                    disableDropdown={true}
                    required={true}
                    value={phoneNumber}
                    onChange={(value) => {
                      setPhoneNumber(value);
                    }}
                    inputClass={classes.formInputs}
                    classes={{ nativeRoot: classes.formInputs }}
                  />
                </Grid>
                <Grid item={true} xs={12} md={6}>
                  <TextField
                    id="select-preference"
                    select={true}
                    required={true}
                    label="Contact Preference"
                    variant="outlined"
                    // value={currency}
                    // onChange={handleChange}
                    classes={{ root: classes.formInputs }}
                    value={contactPreference}
                    onChange={(event) => {
                      setContactPreference(event.target.value);
                    }}
                  >
                    {contactPreferences.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item={true} xs={12}>
                  <TextField
                    id="select-subject"
                    select={true}
                    required={true}
                    label="Order Info"
                    variant="outlined"
                    // value={currency}
                    // onChange={handleChange}
                    classes={{ root: classes.formInputs }}
                    helperText="Please select why you are contacting"
                    value={subject}
                    onChange={(event) => {
                      setSubject(event.target.value);
                    }}
                  >
                    {orderTopics.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    id="contact-details"
                    required={true}
                    multiline={true}
                    label="Details"
                    rows={3}
                    rowsMax={6}
                    variant="outlined"
                    placeholder="Please provide more details of why you are contacting :)"
                    classes={{ root: classes.formInputs }}
                    value={body}
                    onChange={(event) => {
                      setBody(event.target.value);
                    }}
                  />
                </Grid>
                <Grid
                  item={true}
                  container={true}
                  xs={12}
                  justify="flex-end"
                  alignContent="flex-end"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Card>
    </Page>
  );
};
