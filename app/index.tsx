import { StyleSheet, Text, View ,ScrollView} from 'react-native';
// import { inputText } from '@/components/app/Input';
import InputText from './../components/app/Input';
import Message from './../components/app/message';

export default function Home() {
  return (      
      <View style={styles.content}>
        <Text style={styles.title}>Legal bot</Text>
      <ScrollView style={styles.container}>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
        <InputText></InputText>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    width :'100%'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  chat :{
    flex: 1, // Occupe tout l'espace à l'intérieur du container
    backgroundColor: 'blue'
  },
});