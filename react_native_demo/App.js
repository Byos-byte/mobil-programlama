import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';

export default function App() {
  // 1. State Tanımlaması (React'in dinamik hafızası)
  const [sayac, setSayac] = useState(0);

  // 2. Fonksiyonlar
  const arttir = () => setSayac(sayac + 1);
  const azalt = () => setSayac(sayac > 0 ? sayac - 1 : 0);
  const sifirla = () => setSayac(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e2e" />

      {/* Başlık Alanı */}
      <View style={styles.header}>
        <Text style={styles.title}>AI Dünyayı Ele Geçirecek</Text>
        <Text style={styles.subtitle}>İlk React Native Uygulamam 🚀</Text>
      </View>

      {/* Sayaç Kartı */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Mevcut Sayaç Değeri</Text>
        <Text style={styles.counterText}>{sayac}</Text>
      </View>

      {/* Butonlar Alanı */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.decreaseBtn]} onPress={azalt}>
          <Text style={styles.buttonText}>- Azalt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.resetBtn]} onPress={sifirla}>
          <Text style={styles.buttonText}>Sıfırla</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.increaseBtn]} onPress={arttir}>
          <Text style={styles.buttonText}>+ Arttır</Text>
        </TouchableOpacity>
      </View>

      {/* Alt Bilgi */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>VS Code ile düzenleyip kaydedin,</Text>
        <Text style={styles.footerText}>ekran anında güncellensin!</Text>
      </View>
    </SafeAreaView>
  );
}

// 3. Stiller (CSS benzeri StyleSheet yapısı)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181825',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#89b4fa',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#a6adc8',
  },
  card: {
    backgroundColor: '#1e1e2e',
    width: '100%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 30,
  },
  cardLabel: {
    fontSize: 14,
    color: '#a6adc8',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  counterText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#a6e3a1',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  increaseBtn: {
    backgroundColor: '#a6e3a1',
  },
  decreaseBtn: {
    backgroundColor: '#f38ba8',
  },
  resetBtn: {
    backgroundColor: '#45475a',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#11111b',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6c7086',
  },
});
