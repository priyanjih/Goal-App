import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
export default function GoalInput({ onAddGoal, showModal, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHander() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.testInput}
          placeholder="The Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHander} color='#5e0acc'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#311b6b'
  },
  testInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:'#120438',
    borderRadius:6,
    width: "90%",
    padding: 9,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
