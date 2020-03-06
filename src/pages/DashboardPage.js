import React from "react";
import Navbar from "../components/Navigation/NavBar";
import ChartsContent from "../components/ChartsContent/ChartsContent";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  }
}));

function DashboardPage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <main className={clsx(classes.content, "DashboardPage")}>
        <div className={classes.toolbar} />
        <ChartsContent />
      </main>
    </div>
  );
}

export default DashboardPage;
