import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Index() {
  const [valeur, setValeur] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={styles.inputView}>
        <TextInput
          value={valeur}
          onChangeText={setValeur}
          placeholder="Écris quelque chose..."
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("cliqué")}
          activeOpacity={0.7} // opacité au clic (0 à 1)
        >
          <Text style={styles.text}>Valider</Text>
        </TouchableOpacity>
      </View>
      
      <Text>Tu as écrit : {valeur}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red",
  },
  input: {
    borderBlockColor: "blue",
    // borderRadius: "9px",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: "9px",
    margin:2,
    padding:2,
  },
  text: {
    fontFamily: "Arial, sans-serif;",
  },
  inputView : {
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // position
  }
});
