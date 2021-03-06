import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.jpg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Typography from "@material-ui/core/Typography";
import Menu from "../menues/Menu";
import "../../App.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    border: "solid 2px transparent",
    backgroundClip: "padding-box",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    fontFamily: "Poppins 200",
    ["@media (min-width:768px) and (max-width:900px)"]: {
      width: "60%",
    },
  },
  paperIphone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    border: "solid 2px transparent",
    backgroundClip: "padding-box",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "100%",

    fontFamily: "Poppins 200",
  },
  btn: {
    border: "none",
    fontSize: "1.5rem",
    background: "transparent",
    color: "gold",
    cursor: "pointer",
    outline: "none",
    fontFamily: "Poppins 200",
  },
}));

const TransitionsModal = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const width = window.innerWidth;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.btn}>
        <Typography>{title}</Typography>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            className={width < 768 ? classes.paperIphone : classes.paper}
            onClick={handleClose}
          >
            <img src={logo} alt="logo" className="logoMenu" />
            <h2 className="titleMenu">{title}</h2>
            <Menu id={id} />
            <h5 className="dietary">
              Please contact us fon any enquire on dietary requirements
            </h5>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
