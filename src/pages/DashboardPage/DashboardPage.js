import React from "react";
import clsx from "clsx";

import Navbar from "../../components/Navigation/NavBar";
import ChartsContent from "../../components/ChartsContent/ChartsContent";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./DashboardPage.scss";
import { useSelector } from "react-redux";

function DashboardPage() {
  const drawerOffSets = useSelector(state => state.drawerReducer);

  const classes = makeStyles({
    toolbarsOffset: drawerOffSets
  })();

  return (
    <section>
      <Navbar selected="dashboard" />
      <main className={clsx(classes.toolbarsOffset, "DashboardPage")}>
        <ChartsContent />
      </main>
    </section>
  );
}

export default DashboardPage;
