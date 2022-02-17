import { useEffect, useContext } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import FirebaseContext from "../context/firebase/firebaseContext";
import Background from "../assets/background.jpg";

const Menu = () => {
  const { getDishes } = useContext(FirebaseContext);
  useEffect(() => {
    getDishes()
  }, []);
  
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.image}
    >
      <Text>Menú</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  algo: {
    color: "red",
    textAlign: "center",
  },
});

export default Menu;
