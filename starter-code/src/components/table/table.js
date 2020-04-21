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
    obj: [
      {
        name: 'Idris Elba',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg',
        popularity: 11.622713,
        id: '11731993-0604-4bee-80d5-67ad845d0a38',
      },
      {
        name: 'Jessica Chastain',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg',
        popularity: 8.324357,
        id: '17980511-75ca-48b0-bea8-462fec2ee43d',
      },
      {
        name: 'Johnny Depp',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg',
        popularity: 15.656534,
        id: '7dad00f7-3949-477d-a7e2-1467fd2cfc06',
      },
      {
        name: 'Emilia Clarke',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg',
        popularity: 16.211837,
        id: 'e14aa81d-b812-412d-bc4d-4a0d2c9c66f4',
      },
      {
        name: 'Leonardo DiCaprio',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg',
        popularity: 11.245333,
        id: 'b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6',
      },
    ],
  };

  addContact = () => {
    let newContact = contacts[Math.floor(Math.random() * (199 - 5) + 5)];
    this.setState({ obj: this.state.obj.concat(newContact) });
  };

  sortName = () => {
    let currentArr = [...this.state.obj].sort(function(a, b){return (a.name).localeCompare(b.name)})
    this.setState({ obj: currentArr});
  }

  sortPopularity = () => {
    let currentArr = [...this.state.obj].sort(function(a, b){return b.popularity - a.popularity})
    this.setState({ obj: currentArr});
  }

  deleteThis = (id) => {
    let currentArr = [...this.state.obj]
    currentArr.splice(id, 1)
    this.setState({ obj: currentArr});
  }

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
          <Button variant="outlined" onClick={this.sortName}>Sort by Name</Button>
          <Button variant="outlined" onClick={this.sortPopularity}>Sort by Popularity</Button>
        </div>
        <TableContainer className="table" component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow className="table-top">
                <TableCell>Picture</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Popularity</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.obj.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <img
                      src={row.pictureUrl}
                      alt={row.name}
                      width="70"
                      height="70"
                    />
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.popularity.toFixed(2)}</TableCell>
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
