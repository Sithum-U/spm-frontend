// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Paper from "@material-ui/core/Paper";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
// import Typography from "@material-ui/core/Typography";

// import PaymentForm from "./Payment/PaymentForm";
// import ReviewOrderForm from "./ReviewOrderForm";
// import OrderConfirmationForm from "./OrderConfirmationForm";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: "relative",
//   },
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 1200,
//       marginLeft: "255px",
//       marginRight: "auto",
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(0),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
//   stepper: {
//     padding: theme.spacing(3, 0, 5),
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(1),
//   },
// }));

// const steps = ["Payment Details", "Review Your Order", "Order Confirmation"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <PaymentForm />;
//     case 1:
//       return <ReviewOrderForm />;
//     case 2:
//       return <OrderConfirmationForm />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

// export default function PO() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <React.Fragment>
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Typography component="h1" variant="h4" align="center">
//             <ul> Purchase Order</ul>
//           </Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <React.Fragment>
//             {activeStep === steps.length ? (
//               <React.Fragment>
//                 <Typography variant="h5" gutterBottom>
//                   Thank you for your order.
//                 </Typography>
//                 <Typography variant="subtitle1">
//                   Your order number is #2001539. Order created succefully.We
//                   will notify your order , and will send you an update when your
//                   order is ready to be delivered.
//                 </Typography>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 {getStepContent(activeStep)}
//                 <div className={classes.buttons}>
//                   {activeStep !== 0 && (
//                     <Button onClick={handleBack} className={classes.button}>
//                       Back
//                     </Button>
//                   )}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                   </Button>
//                 </div>
//               </React.Fragment>
//             )}
//           </React.Fragment>
//         </Paper>
//       </main>
//     </React.Fragment>
//   );
// }
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "./Payment/PaymentForm";
import OrderConfirmationForm from "./OrderConfirmationForm";
import ReviewOrderForm from "./ReviewOrderForm";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "255px",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "Purchase Request",
  "Purchase Request Management",
  "Purchase Order",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <OrderConfirmationForm />;
    case 2:
      return <ReviewOrderForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function PO() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      {/* <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Wickrama Super
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            <ul> Purchase Order</ul>
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. Order created succefully.We
                  will notify your order , and will send you an update when your
                  order is ready to be delivered.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
