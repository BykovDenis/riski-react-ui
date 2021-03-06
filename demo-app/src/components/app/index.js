import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Tablebody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ReactSelectCustom from 'riski-react-ui/react-select-custom';
import ReactSelectInputCustom from "riski-react-ui/react-select-input-custom";
import ErrorComponent from 'riski-react-ui/error';
import NoDataAvailableComponent from 'riski-react-ui/not-data-available';
import MuiButton from 'riski-react-ui/mui-button';
import DatePickerCustom from 'riski-react-ui/date-picker-custom';
import './index.css';

function Index() {
  return (
    <div className="App">
      <Typography variant="h1" style={{ fontSize: '48px' }}>Demo of the common components</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <DatePickerCustom value={'2019-01-01'} label="Some date" />
            </TableCell>
            <TableCell>
              <ReactSelectInputCustom activeElement="one" elements={['one', 'two', 'three']} />
            </TableCell>
            <TableCell>
              <ReactSelectCustom activeElement="one" elements={['one', 'two', 'three']} />
            </TableCell>
            <TableCell>
              <MuiButton>Click me!</MuiButton>
            </TableCell>
            <TableCell>
              <NoDataAvailableComponent />
            </TableCell>
            <TableCell>
              <ErrorComponent />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Index;
