import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [Goals, setGoals] = useState([]);
  return (
    <View style={styles.appContainer}>
      <GoalInput
        setEnteredGoal={setEnteredGoal}
        enteredGoal={enteredGoal}
        setGoals={setGoals}
      />

      <View style={styles.goalConatainer}>
        <FlatList
          data={Goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalConatainer: {
    flex: 6,
  },
});
