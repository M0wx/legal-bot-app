import { StyleSheet, View } from "react-native";
import { Text, useThemeColor } from "../Themed";
import { MessageType } from "@/types/Message";

type messageProps = {
  message: MessageType;
};

const Message = (props: messageProps) => {
  const isAI = props.message.ia;
  
  const userBubbleColor = useThemeColor({}, 'userMessage');
  const userTextColor = useThemeColor({}, 'userMessageText');
  const aiBubbleColor = useThemeColor({}, 'aiMessage');
  const aiTextColor = useThemeColor({}, 'aiMessageText');
  const aiBorderColor = useThemeColor({}, 'aiMessageBorder');

  return (
    <View style={[
      styles.container, 
      isAI ? styles.aiContainer : styles.userContainer
    ]}>
      <View style={[
        styles.message,
        isAI ? { 
          backgroundColor: aiBubbleColor, 
          borderColor: aiBorderColor,
          borderWidth: 1,
          borderBottomLeftRadius: 4 
        } : { 
          backgroundColor: userBubbleColor,
          borderBottomRightRadius: 4 
        }
      ]}>
        <Text style={[
          styles.text, 
          { color: isAI ? aiTextColor : userTextColor }
        ]}>
          {props.message.texte}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 4,
    flexDirection: 'row',
  },
  userContainer: {
    justifyContent: 'flex-end',
    paddingLeft: 40,
  },
  aiContainer: {
    justifyContent: 'flex-start',
    paddingRight: 40,
  },
  message: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxWidth: '100%',
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android Shadow
    elevation: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Message;
