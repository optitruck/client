import React from 'react';
import { Paper, Grid, Typography, IconButton, Divider, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { farms } from '../constants/initialState.json';

export default class HomePage extends React.Component{
    render(){
        return(
            <Paper className="home-top-paper" square={true}> 
                <Grid container direction="column" style={{paddingTop: '5%'}} alignItems="center">
                <h1 className="home-header">We Choose The Best Farm Location</h1>
                <p className="home-header">
                    In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space
                    telescope.
                </p>
                <Paper className="home-paper-search">
                    <IconButton className="home-iconButton" aria-label="Menu">
                    </IconButton>
                    <InputBase className="home-input" placeholder="Enter Your Store Address" />

                    {/* <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                        <h6 className="home-header" style={{marginTop: 10}}>Search</h6>
                    </Paper> */}
                    
                    <IconButton className="home-iconButton" aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                    <Divider className="home-divider" />
                    <IconButton color="primary" className="home-iconButton" aria-label="Directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
                </Grid>
            </Paper>
        )
    }
}