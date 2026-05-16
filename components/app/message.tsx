import { StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import { MessageType } from "@/types/Message";
type messageProps = {
  message: MessageType;
};
const Message = (props: messageProps) => {
  return (
    <View style={[styles.message, props.message.ia && styles.messageIA]}>
      <Text>{props.message.texte}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  message: {
    backgroundColor: "#F3F0FF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  messageIA: {
    borderColor: "#6C63FF",
    borderWidth: 1,
  },
});

export default Message;
