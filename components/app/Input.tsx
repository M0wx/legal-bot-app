import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type inputBarProps = {
  onEnvoyer: (message: string[]) => void;
};

const InputText = ({ onEnvoyer }: inputBarProps) => {
  const [valeur, setValeur] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEnvoyer = async () => {
    if (!valeur.trim()) return; // ignore si vide
    setLoading(true);
    try {
      const response = await fetch("http://192.168.1.153:8000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ question: valeur }),
      });
      const data = await response.json();

      //   const reponseTmp = "Reponse tsiory";
      const answer = [valeur, data.answer];
      onEnvoyer(answer);
      setValeur("");
    } catch (error) {
      console.error("Erreur API :", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message here..."
        value={valeur}
        onChangeText={setValeur}
      ></TextInput>
      <Pressable style={styles.button} onPress={handleEnvoyer}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: "white" }}>Envoyer</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'blue',
    width: "100%",
    padding: 8,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
});

export default InputText;
