import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Image /> */}
        <Text style={styles.name}>Francis Alcala</Text>
        <Text style={styles.bio}>
          I am a senior at IUI majoring in Media Arts & Science.
        </Text>
        <View>
          <Text style={styles.funFact}>I like to Paint miniatures.</Text>
          <Text style={styles.funFact}>I am allergic to cats.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b66435ff",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#d4ab60ff",
    // height: 300,
    padding: 20,
    margin: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderColor: "#d0351dff",
    borderWidth: 2,
  },

  name: {
    textAlign: "center",
    fontSize: 20,
  },

  bio: {
    textAlign: "center",
    fontSize: 15,
  },

  funFact: {
    textAlign: "center",
  },
});
