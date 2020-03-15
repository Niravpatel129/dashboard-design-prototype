import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Navigation from "../../components/Navigation/Navigation";
import ChartsContent from "../../components/ChartsContent/ChartsContent";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./DashboardPage.scss";

function DashboardPage() {
  const drawerOffSets = useSelector(state => state.drawerReducer);

  const classes = makeStyles({
    toolbarsOffset: drawerOffSets
  })();

  return (
    <section>
      <Navigation selected="dashboard" />
      <main className={clsx(classes.toolbarsOffset, "DashboardPage")}>
        <ChartsContent />
      </main>
    </section>
  );
}

export default DashboardPage;
