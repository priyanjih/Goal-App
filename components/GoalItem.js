import {StyleSheet,View,Text} from "react-native"
export default function GoalItem({text}){
    return(
        <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
              </View>
    )
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
})