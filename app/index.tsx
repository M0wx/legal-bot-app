import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Text, View, useThemeColor } from "../components/Themed";
import InputText from "./../components/app/Input";
import Message from "./../components/app/message";
import { useState } from "react";
import { MessageType } from "@/types/Message";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([
    { id: Date.now(), texte: "Bonjour ! Je suis votre assistant juridique. Comment puis-je vous aider aujourd'hui ?", ia: true },
  ]);

  const backgroundColor = useThemeColor({}, 'background');

  const ajouterMessage = (texte: string[]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), texte: texte[0], ia: false },
      { id: Date.now() + 1, texte: texte[1], ia: true },
    ]);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Legal Bot</Text>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>En ligne</Text>
          </View>
        </View>

        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
        </ScrollView>

        <View style={styles.inputWrapper}>
          <InputText onEnvoyer={ajouterMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 30,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 0 : 10,
  },
});
