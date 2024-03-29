import { Typography, Snackbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Data from "../assets/coding.svg";
import Vacancy from "../assets/search.svg";
import Work from "../assets/working.svg";
import React from "react";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [verified, setVerified] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("/api/auth/verify", {
        headers: {
          "auth-token": localStorage.getItem("tkn"),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          setVerified(true);
          setOpen(true);
        } else setVerified(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            align='center'
            style={{
              fontSize: 28,
              fontWeight: "bolder",
              marginBottom: 30,
              paddingBottom: 10,
              color: "#a3a3a3",
              borderBottom: "1px solid #dedede",
            }}
          >
            {" "}
            Home{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            style={{
              marginBottom: 30,
              fontSize: 25,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Virtual Learning and Software Engineering (VLSE)
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Vision
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Data}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          {" "}
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              What We Do
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Work}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          {" "}
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 400,
              flexDirection: "column",
            }}
          >
            <Typography
              align='center'
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              Join Us
            </Typography>
            <img
              alt=''
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: "100px",
                height: "100px",
              }}
              src={Vacancy}
            />
            <Typography
              align='justify'
              style={{ padding: "0px 30px 20px 30px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} style={{ padding: 50, paddingTop: 15 }}>
          <Typography
            style={{ marginBottom: 10, fontSize: 23, fontWeight: "bold" }}
          >
            {" "}
            About us
          </Typography>
          <Typography align='justify'>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity='success'
        >
          You are currently logged in as admin, click on the "Admin" button in
          the footer if you would like to log out.
        </Alert>
      </Snackbar>
    </div>
  );
}
