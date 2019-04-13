import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default class Header extends React.Component{
    render(){
        return(
            <Paper className="header-paper" square={true}>
                <Toolbar>
                    <IconButton className="header-menuButton" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{flexGrow:1}}>
                        OptiTruck
                    </Typography>
                    <div className="eader-titles-container">
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Product</Button>
                        <Button color="inherit">About Us</Button>
                    </div>
                </Toolbar>
            </Paper>
        )
    }
}