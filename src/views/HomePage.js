import React from 'react';
import { Paper, Grid, Typography, IconButton, 
        Divider, InputBase, List, ListItem, Avatar,
        ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import ImageIcon from '@material-ui/icons/Image';
import report from '../constants/svg/report.svg';
import { farms, cards1, cards2 } from '../constants/initialState.json';
import ReactSVG from 'react-svg'


export default class HomePage extends React.Component{
    state = {
        show: false,
    }

    handleList = () => {
        this.setState({
            show : !this.state.show
        })
    }

    renderLists = (props) => (
        <div>
            <ListItem>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            <ListItemText primary={props.name}/>
            </ListItem>
            <li>
                <Divider variant="inset" />
            </li>
        </div>
    )

    rednerCards = (props) => (
        <Paper className="home-paper-card">
            <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                <DirectionsIcon style={{fontSize: 70, marginTop: '7%'}} />
                <Typography variant='h4' style={{marginTop: '7%'}}>{props.header}</Typography>
                <Typography variant='subtitle1' style={{marginTop: '7%'}}>{props.sentence}</Typography>
            </Grid>
        </Paper>
    )

    render(){
        const { show } = this.state;
        return(
            <div>
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
                        <SearchIcon onClick={this.handleList}/>
                    </IconButton>
                    <Divider className="home-divider" />
                    <IconButton color="primary" className="home-iconButton" aria-label="Directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
                { 
                    show && 
                    <div style={{marginTop: 5}}>
                        <List className="home-list">
                            {farms.map(farm => (this.renderLists(farm)))}
                        </List>
                    </div>
                        
                }
                </Grid>
            </Paper>
            <Paper className="home-middle-paper" square={true}>
                <Grid container direction="column" alignItems="center">
                    <Typography variant='h3' style={{marginTop: '5%'}}>Features That Make Us Hero</Typography>
                    <p className="home-middle-subheader">
                        In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space
                        telescope.
                    </p>
                    <Grid style={{marginTop: '5%'}} container direction="row" justify="space-evenly" alignItems="center">
                        {cards1.map(card => (this.rednerCards(card)))}
                    </Grid>
                    <Grid style={{marginTop: '5%'}} container direction="row" justify="space-evenly" alignItems="center">
                        {cards2.map(card => (this.rednerCards(card)))}
                    </Grid>
                </Grid>
            </Paper>
            </div>
        )
    }
}