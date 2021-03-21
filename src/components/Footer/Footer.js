/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.right}>
        <span>
                <a
              href="http://localhost:3000/"
              target="_blank"
            >
              AlgoAssist
            </a>, Made with <i class="fa fa-heart pulse"></i> for a better learning
            </span>
        </p>
      </div>
    </footer>
  );
}
