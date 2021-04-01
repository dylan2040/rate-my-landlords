import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, city: string, state: string, street: string, zipcode: string, id: number) {
  return { name, city, state, street, zipcode, id};
}



//props is an object, why do we need to type it as an array to compile?
export default function BasicTable(props: any[]) {
  // console.log('props',props)
  // console.log('type', typeof props)

  const rows: any[] = []

  for (let landlords in props) {
    // console.log('landlords', landlords)
    // console.log('landlords types', typeof landlords)
    // console.log('landlord data', props[landlords])
    const {name, city, state, street, zipcode, id}: {name: string; city: string; state: string; street: string; zipcode: string; id: number} = props[landlords]
    rows.push(createData(name, city, state, street, zipcode, id))
  }

  console.log('rows', rows);


  // const HandleClick = async (event: Object) => {
  //   let queryObj: QueryObj = {address: "default", city: "default", zipcode:"default"};

  //   if (searchInputRef.current) {
  //     queryObj = {
  //       address: searchInputRef.current['addressSearchBar'].value,
  //       city: searchInputRef.current['citySearchBar'].value,
  //       zipcode: searchInputRef.current['zipSearchBar'].value
  //     };

  //     await setQuery(queryObj);
  //     console.log(query)
  //     history.push({
  //       pathname: "/searchresults",
  //       state: {
  //         query: queryObj
  //       }
  //     })
  //   }
  // }

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link to = {{
                  pathname: '/landlordprofile',
                  state: row.id
                }}>
                  {row.name}
                </Link>
                {/* {row.name} onClick = {(e) =>handleClick(index)} */}
              </TableCell>
              <TableCell align="right">{row.street}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}