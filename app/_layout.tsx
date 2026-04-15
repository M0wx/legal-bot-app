import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* On définit juste la route principale */}
      <Stack.Screen name="index" options={{ title: 'Accueil', headerShown: false }} />
    </Stack>
  );
}