import React from "react";
import Navbar from "../../components/Navigation/NavBar";
import ChartsContent from "../../components/ChartsContent/ChartsContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

import "./DashboardPage.scss";
const useStyles = makeStyles({
  toolbarsOffset: { paddingLeft: "6.1rem", paddingTop: "4.4rem" }
});

function DashboardPage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <main className={clsx(classes.toolbarsOffset, "DashboardPage")}>
        <ChartsContent />
      </main>
    </div>
  );
}

export default DashboardPage;
