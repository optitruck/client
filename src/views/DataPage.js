import React from 'react';
import { Paper } from '@material-ui/core';
import TableComp from '../components/TableComp';

export default class DataPage extends React.Component{
    render(){
        return(
            <Paper className="data-container">
                <TableComp/>
            </Paper>
        )
    }
}