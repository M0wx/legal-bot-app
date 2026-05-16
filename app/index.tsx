import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { inputText } from '@/components/app/Input';
import InputText from "./../components/app/Input";
import Message from "./../components/app/message";
import { useState } from "react";
import { MessageType } from "@/types/Message";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([
    { id: Date.now(), texte: "Bonjour comment puis je vous aider?", ia: true },
  ]);
  const ajouterMessage = (texte: string[]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), texte: texte[0], ia: false },
      { id: Date.now() + 1, texte: texte[1], ia: true },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Legal bot</Text>
      <ScrollView style={styles.container}>
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </ScrollView>
      <InputText onEnvoyer={ajouterMessage}></InputText>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
  },
});
