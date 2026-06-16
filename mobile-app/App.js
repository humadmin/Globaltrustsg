import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Linking, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const PHONE = '+6589318152';
const WHATSAPP = 'https://wa.me/6589318152';

export default function App() {
  const dial = () => {
    const url = Platform.OS === 'ios' ? `telprompt:${PHONE}` : `tel:${PHONE}`;
    Linking.openURL(url).catch(() => {});
  };

  const openWhatsApp = () => {
    Linking.openURL(WHATSAPP).catch(() => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <Text style={styles.title}>Site Under Construction</Text>
        <Text style={styles.subtitle}>We're updating our website — we'll be live by the end of June with full plumbing, cleaning, and aircon services.</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.button, styles.call]} onPress={dial}>
            <Text style={styles.buttonText}>Call +65 8931 8152</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.chat]} onPress={openWhatsApp}>
            <Text style={styles.buttonText}>Chat on WhatsApp</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.note}>Services remain available — call or WhatsApp us anytime.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  title: { fontSize: 22, fontWeight: '700', color: '#1a1a2e', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#444', marginBottom: 16 },
  actions: { flexDirection: 'row', gap: 10, justifyContent: 'space-between' },
  button: { flex: 1, paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  call: { backgroundColor: '#0066cc' },
  chat: { backgroundColor: '#25D366' },
  buttonText: { color: '#fff', fontWeight: '700' },
  note: { marginTop: 14, color: '#6c757d', fontSize: 14 }
});
