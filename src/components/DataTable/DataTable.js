import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";

import tableData from "./data/tableData";
import "./DataTable.scss";

const useStyles = makeStyles(() => ({
  tableHead: {
    backgroundColor: "#F5F6FA"
  },
  tableTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#A3A6B4"
  }
}));

function DataTable() {
  const classes = useStyles();

  const renderTable = () => {
    return tableData.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{item.location}</TableCell>
          <TableCell>{item.views}</TableCell>
          <TableCell>{item.sales}</TableCell>
          <TableCell>{item.conversion}</TableCell>
          <TableCell>{item.total}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className="DataTable">
      <h3 className="title">Referrer</h3>
      <div className="table">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableTitle}>location</TableCell>
                <TableCell className={classes.tableTitle}>views</TableCell>
                <TableCell className={classes.tableTitle}>sales</TableCell>
                <TableCell className={classes.tableTitle}>conversion</TableCell>
                <TableCell className={classes.tableTitle}>total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTable()}</TableBody>
          </Table>
          <p className="showMore">Show More</p>
        </TableContainer>
      </div>
    </div>
  );
}

export default DataTable;
