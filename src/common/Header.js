import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button, Toolbar } from '@material-ui/core';
import logo from '../constants/Logo_Lemon_Transparent.png';

export default class Header extends React.Component{
    render(){
        return(
            <Paper className="header-paper" square={true}>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}>

                    {/* <Typography variant="h6" style={{flexGrow:1}}>
                        Lemon
                    </Typography> */}
                    <img src={logo} alt="Logo" className="logo-header"/>
                    </Link>

                    <div className="header-titles-container">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button>Home</Button>
                        </Link>
                        <Link to="/input" style={{ textDecoration: 'none' }}>
                            <Button>Input</Button>
                        </Link>
                        <Link to="/data" style={{ textDecoration: 'none' }}>
                            <Button>Recommendation</Button>
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