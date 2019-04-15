import React from 'react';
import { Paper, Grid, Typography, IconButton, 
        Divider, InputBase, List, ListItem, Avatar,
        ListItemText
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyRounded from '@material-ui/icons/MoneyRounded';
import ListIcon from '@material-ui/icons/List';
import DirectionsIcon from '@material-ui/icons/Directions';
import ImageIcon from '@material-ui/icons/Image';
import axios from 'axios';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: []
        }
    }

    componentDidMount(){
        let self = this;
        axios.get('https://cors-anywhere.herokuapp.com/https://salty-tor-23821.herokuapp.com/')
        .then(function (response) {
            self.setState({data:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleList = () => {
        this.setState({
            show : !this.state.show
        })
    }

    renderLists = (props) => (
        <div key={props.shopid}>
            <ListItem >
                <Avatar>
                    <ImageIcon />
                </Avatar>
            <ListItemText primary={props.address}/>
            </ListItem>
            <li>
                <Divider variant="inset" />
            </li>
        </div>
    )

    rednerCards = (props, index) => (
        <Paper key={index} className="home-paper-card">
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
                <h1 className="home-header">Welcome to Lemon</h1>
                <p className="home-header">
                    Choose your grocery store and start reducing food waste! 
                </p>
                <Paper className="home-paper-search">
                    <IconButton className="home-iconButton" aria-label="Menu">
                    </IconButton>
                    <InputBase className="home-input" placeholder="Get your store recomendation" />
                    {/* <Typography className="home-input">Get your store recomendation</Typography> */}
                    {/* <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                        <h6 className="home-header" style={{marginTop: 10}}>Search</h6>
                    </Paper> */}
                    
                    <IconButton onClick={this.handleList} color="primary" className="home-iconButton" aria-label="Directions">
                        <ArrowDownwardIcon />
                    </IconButton>
                </Paper>
                { 
                    show && 
                    <div style={{marginTop: 5}}>
                        <List className="home-list">
                            {this.state.data.map(farm => (this.renderLists(farm)))}
                        </List>
                    </div>  
                }
                </Grid>
            </Paper>
            <Paper className="home-middle-paper" square={true}>
                <Grid container direction="column" alignItems="center">
                    <Typography variant='h3' style={{marginTop: '10%'}}>Lemon's Key Benefits</Typography>
                    <p className="home-middle-subheader">
                        Minimize monetary losses, reduce food waste, and get customer behavior insights
                    </p>
                    <Grid style={{marginTop: '10%'}} container direction="row" justify="space-evenly" alignItems="center">
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <MoneyRounded style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Minimize Monetary Losses</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '7%'}}>A more accurate shipment forecast will reduce <br/>the number of wasted food items</Typography>
                        </Grid>
                    </Paper>
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <DirectionsIcon style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Reduce Food Loss</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '17%'}}>Track items that are more frequently wasted</Typography>
                        </Grid>
                    </Paper>
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <ListIcon style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Gather Customer Behavior Insights</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '7%'}}>Gather knowledge on which food items are sold <br/> and wasted</Typography>
                        </Grid>
                    </Paper>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        )
    }
}