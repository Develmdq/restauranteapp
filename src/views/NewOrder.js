import { Container, Button, Text, Box } from "native-base";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const NewOrder = () => {
  const navigation = useNavigation()
  return (
    <Container style={globalStyles.container}>
      <Box style={globalStyles.content}>
        <Button style={globalStyles.button} onPress={()=>navigation.navigate('Menu')}>
          <Text style={globalStyles.textButton}>Nueva Orden</Text>
        </Button>
      </Box>
    </Container>
  );
};

export default NewOrder;
