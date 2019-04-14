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
                    <Link to="/" style={{ textDecoration: 'none' }}>

                    <Typography variant="h6" style={{flexGrow:1}}>

                        OptiTruck
                    </Typography>
                    </Link>

                    <div className="header-titles-container">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button>Home</Button>
                        </Link>
                        <Link to="/input" style={{ textDecoration: 'none' }}>
                            <Button>Input</Button>
                        </Link>
                        <Link to="/data" style={{ textDecoration: 'none' }}>
                            <Button>Recomendation</Button>
                        </Link>
                        <Link to="/map" style={{ textDecoration: 'none' }}>
                            <Button>Map</Button>
                        </Link>
                            <Button>About Us</Button>    
                    </div>
                </Toolbar>
            </Paper>
        )
    }
}