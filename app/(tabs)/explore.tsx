import { Button, Text, StyleSheet, View } from 'react-native';



export default function TabTwoScreen() {
  return (
    
    <View>
        <Text>Bonjour React Native</Text>
      <Button title="Clique-moi" onPress={() => alert('Hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
