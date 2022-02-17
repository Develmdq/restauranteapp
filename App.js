import "react-native-gesture-handler";
import FirebaseState from "./context/firebase/firebaseState";
import OrdersState from "./context/orders/ordersState";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewOrder from "./views/NewOrder";
import Menu from "./views/Menu";
import DetailDish from "./views/DetailDish";
import FormDish from "./views/FormDish";
import OrderSummary from "./views/OrderSummary";
import OrderProgress from "./views/OrderProgress";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <FirebaseState>
        <OrdersState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={
                {
                  // headerShown: false,
                }
              }
            >
              <Stack.Screen name="NewOrder" component={NewOrder} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="DetailDish" component={DetailDish} />
              <Stack.Screen name="FormDish" component={FormDish} />
              <Stack.Screen name="OrderSummary" component={OrderSummary} />
              <Stack.Screen name="OrderProgress" component={OrderProgress} />
            </Stack.Navigator>
          </NavigationContainer>
        </OrdersState>
      </FirebaseState>
    </NativeBaseProvider>
  );
};

export default App;
