
//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Cheesecake from "./components/Cheesecake";
// import Footer from "./components/Footer";
import cake from "./cake.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    cake,
    clickedCake: [],
    score: 0
  };

//when you click on a card ... the cake is taken out of the array
  imageClick = event => {
    const currentCake = event.target.alt;
    const CakeAlreadyClicked =
      this.state.clickedCake.indexOf(currentCake) > -1;

//if you click on a cake that has already been selected, the game is reset and cards reordered
    if (CakeAlreadyClicked) {
      this.setState({
        cake: this.state.cake.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCake: [],
        score: 0
      });
        alert("You lose.");

//if you click on an available cake, your score is increased and cards reordered
    } else {
      this.setState(
        {
          cake: this.state.cake.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCake: this.state.clickedCake.concat(
            currentCake
          ),
          score: this.state.score + 1
        },
//if you get all 12 cake corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cake: this.state.cake.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCake: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, body, cheese, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Body />
        <div className="wrapper">
          {this.state.cake.map(cake => (
            <Cheesecake
              imageClick={this.imageClick}
              id={cake.id}
              key={cake.id}
              image={cake.image}
            />
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;