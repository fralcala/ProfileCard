import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1027411724103593994/1414989958346702949/20250210_174012.jpg?ex=68c19397&is=68c04217&hm=b77f98cd807c7cd25ea185ba258afdbb8a69628e09484740a36cb7f504450133&=&format=webp&width=1170&height=1560",
          }}
          style={styles.profile}
        />
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
    borderRadius: 22,
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

  profile: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 15,
    borderColor: "#d0351dff",
    borderWidth: 2,
  },

  name: {
    textAlign: "center",
    fontSize: 25,
  },

  bio: {
    textAlign: "center",
    fontSize: 15,
  },

  funFact: {
    textAlign: "center",
  },
});
