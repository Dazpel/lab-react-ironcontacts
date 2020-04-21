import React, { Component } from 'react';
import contacts from '../../contacts.json';
import './table.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default class IronContacts extends Component {
  state = {
    list: contacts.slice(0, 5),
  };

  addContact = () => {
    let newContact = contacts[Math.floor(Math.random() * (199 - 5) + 5)];
    this.setState({ list: this.state.list.concat(newContact) });
  };

  sortName = () => {
    let currentArr = [...this.state.list].sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({ list: currentArr });
  };

  sortPopularity = () => {
    let currentArr = [...this.state.list].sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ list: currentArr });
  };

  deleteThis = (id) => {
    let currentArr = [...this.state.list];
    currentArr.splice(id, 1);
    this.setState({ list: currentArr });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>React Lab I: IronContacts</h1>
          <div className="Btns">
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              onClick={this.addContact}
            >
              Add Random Contact
            </Button>
            <Button variant="outlined" onClick={this.sortName}>
              Sort by Name
            </Button>
            <Button variant="outlined" onClick={this.sortPopularity}>
              Sort by Popularity
            </Button>
          </div>
          <TableContainer className="table" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="table-top">
                  <TableCell>Picture</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Popularity</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.list.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <img
                        src={row.pictureUrl}
                        alt={row.name}
                      />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">
                      {row.popularity.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="secondary"
                        href="#contained-buttons"
                        onClick={() => this.deleteThis(index)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
}
