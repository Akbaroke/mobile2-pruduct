import { StyleSheet } from 'react-native';
import { Text, View } from "./Themed";

export default function CardProduct() {
  return (
    <View style={style.card}>
      <Text>Hallo</Text>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: 170,
    height: 230,
    border: 1,
    borderColor: "#eaeaea"
  }
})
