<h1 align="center">
  <br>
  <a href="https://devpost.com/software/perfect-pitch-ydqptv"><img src="https://github.com/optitruck/client/blob/master/logo/Lemon_Logo.png" alt="caretaker" width="200"></a>
  <br>
    Lemon
  <br>
</h1>

<h4 align="center">Lemon is a food supply chain management platform for grocery store managers to analyze inventory data on food items so that they can reduce food waste by optimizing for future shipments of food.</h4>

<p align="center">
  <a href="#problem/audience">Problem/Audience</a> •
  <a href="#experience">Experience</a> •
  <a href="#views">Views</a> •
  <a href="#other">Other</a> •
  <a href="#hackathon-milestones">Hackathon Milestones</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![alt text](https://github.com/VietDinh17/perfect-pitch/blob/master/images/demo.PNG)

## Problem/Audience
 
 According to Business Insider and the US Department of Agriculture, 133 billion pounds of food of food waste comes from grocery stores. That is 10% of US food waste, this is clearly a problem that needs to mitigated. Our platform is designed for grocery managers to gather and analyze the data of their store's inventory to optimize future shipments of food and reduce food waste. 

Source: https://www.businessinsider.com/why-grocery-stores-throw-out-so-much-food-2014-10 

## Experience
A user navigates to the home page where he will select the store that he wants to manage. When the user clicks on the Input tab in the navbar, the user can upload a csv file or manually enter data on a food item, its supply, consumer demand and number of items spoiled. In the recommendation tab, there will be a table displaying the inventory information of the supermarket and a recommendation for future shipment supplies expressed as a percentage of items. For example, if 5% of items are spoiled, the next recommended shipment will be 5% that the prior shipment of an item.
The map tab will show the optimal route of the future shipment.

## Views
* HomePage
InputDataPage
DataPage
MapPage

## Other

Languages: HTML, CSS, React, Node.js, 
Technologies: AWS Amplify, Google Maps API

Colors: #FAEA15
rgb(250,234,21)

#000000
rgb(0,0,0)

## Hackathon Milestones
- User Interace for Grocery Store Managers (React)
- Syncing food inventory database with DataPage (AWS Amplify, DynamoDB)
- Display route of farm and grocery store (Google Maps API)

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## License

MIT

