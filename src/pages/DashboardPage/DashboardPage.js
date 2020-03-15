import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Navigation from "../../components/Navigation/Navigation";

import makeStyles from "@material-ui/core/styles/makeStyles";

import "./DashboardPage.scss";

const Charts = lazy(() => import("../../components/Charts/Charts"));

function DashboardPage() {
  const drawerOffSets = useSelector(state => state.drawerReducer);

  const classes = makeStyles({
    toolbarsOffset: drawerOffSets
  })();

  return (
    <section>
      <Navigation selected="dashboard" />
      <main className={clsx(classes.toolbarsOffset, "DashboardPage")}>
        <Suspense fallback="...">
          <Charts />
        </Suspense>
      </main>
    </section>
  );
}

export default DashboardPage;
