import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";


import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [Goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function onDeleteHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New To Do"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        showModal={modalIsVisible}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalConatainer}>
        <FlatList
          data={Goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDelete={onDeleteHandler}
              />
            );
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
    backgroundColor:'#1e085a',
  },
  goalConatainer: {
    flex: 6,
  },
});
