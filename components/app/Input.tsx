import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../Themed";

type inputBarProps = {
  onEnvoyer: (message: string[]) => void;
};

const InputText = ({ onEnvoyer }: inputBarProps) => {
  const [valeur, setValeur] = useState("");
  const [loading, setLoading] = useState(false);

  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const tintColor = useThemeColor({}, "tint");
  const placeholderColor = useThemeColor({}, "placeholder");

  const handleEnvoyer = async () => {
    const messageTrimmed = valeur.trim();
    if (!messageTrimmed || loading) return;

    setLoading(true);
    Keyboard.dismiss();

    try {
      const response = await fetch("http://10.209.123.9:8000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: messageTrimmed }),
      });

      if (!response.ok) {
        throw new Error("Erreur serveur (" + response.status + ")");
      }

      const data = await response.json();
      
      if (data && data.answer) {
        onEnvoyer([messageTrimmed, data.answer]);
        setValeur("");
      } else {
        throw new Error("Format de réponse invalide");
      }
    } catch (error) {
      console.error("Erreur API :", error);
      Alert.alert(
        "Erreur",
        "Impossible de contacter le serveur. Veuillez vérifier votre connexion."
      );
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = !valeur.trim() || loading;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Posez votre question juridique..."
        placeholderTextColor={placeholderColor}
        value={valeur}
        onChangeText={setValeur}
        multiline
        editable={!loading}
      />
      <Pressable
        style={[
          styles.button,
          { backgroundColor: isButtonDisabled ? placeholderColor : tintColor },
        ]}
        onPress={handleEnvoyer}
        disabled={isButtonDisabled}
      >
        {loading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Ionicons name="send" size={20} color="white" />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 10,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingRight: 12,
    maxHeight: 100,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InputText;
