import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import Table from '../components/Table';

export default class DataPage extends React.Component{
    render(){
        return(
            <Paper className="data-container">
                <Table/>
            </Paper>
        )
    }
}