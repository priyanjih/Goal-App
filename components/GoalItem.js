import { StyleSheet, View, Text, Pressable } from "react-native";
export default function GoalItem({ text,onDelete,id }) {
if(text!==''){
  return (
    <Pressable onPress={onDelete.bind(this,id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },

  goalText: {
    color: "#ffffff",
  },
});
