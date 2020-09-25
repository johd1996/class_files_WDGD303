import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [choice, setChoice] = useState(""); 
  const [pick1, setPick1] = useState("rock");
  const [pick2, setPick2] = useState("paper");
  const [pick3, setPick3] = useState("scissors");

  //This function gets user choice
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("User choice is not valid, please try again.");
    }
  };

  //This function gets opponent choice 
  const getOpponentChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };

  //This function will determine the winner 
  const determineWinner = (userChoose, opponentChoice) => {
    if (userChoose === opponentChoice) {

      return "Game is a tie!";
    }
    if (userChoose === "rock") {
      if (opponentChoice === "paper") {
        return "Your opponent won!";
      } else {
        return "User won!";
      }
    }
    if (userChoose === "paper") {
      if (opponentChoice === "scissors") {
        return "Your opponent won";
      } else {
        return "User won!";
      }
    }
    if (userChoose === "scissors") {
      if (opponentChoice === "rock") {
        return "Your opponent won!";
      } else {
        return "User won!";
      }
    }
  };

  // let userChoice = getUserChoice(choice);
  let opponentChoice = getOpponentChoice();
  let winner = determineWinner(choice, opponentChoice); 
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.gameTitle}>Rock Paper Scissor Game</Text>
      </View>
      <View style={styles.gamePiece}>

        <TouchableOpacity onPress={() => setChoice("rock")}>
          {/* with Every button press, this will change the state with setState*/}
          <Text style={styles.option1}>Rock</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChoice("paper")}>
          <Text style={styles.option2}>Paper</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChoice("scissors")}>
          <Text style={styles.option3}>Scissor</Text>
        </TouchableOpacity>

      </View >

      <View style={styles.container2}>
        <Text style={styles.text}>You Threw : {choice}</Text>
        <Text style={styles.text}>Your opponent threw : {opponentChoice}</Text>
        <Text style={styles.text1}>{winner}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 80,
  },
  gameTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  option1: {
    backgroundColor: "violet",
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
  option2: {
    backgroundColor: "orange",
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
  option3: {
    backgroundColor: "lightgreen",
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
  gamePiece: {
    // flex: 1,
    paddingTop: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  text1: {
    fontSize: 30,
    paddingTop: 60,
    color: 'lightgreen',
    fontWeight: "bold",
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
  },
});
