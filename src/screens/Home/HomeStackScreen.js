import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SendMoneyScreen from "../SendMoney/SendMoneyScreen";
import SendInScreen from "../SendMoney/SendInScreen";
import ChooseScreen from "../SendMoney/ChooseScreen";
import Confirm from "../SendMoney/Confirm";
import SendOkScreen from "../SendMoney/SendOkScreen";
import ChoosePayScreen from "../PayAndTopup/ChoosePayScreen";
import Pay from "../PayAndTopup/Pay";
import Topup from "../PayAndTopup/Topup";
import ConfirmBill from "../PayAndTopup/ConfirmBill";
import {
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  Entypo,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import PayOk from "../PayAndTopup/PayOk";
const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {
  const tabHiddenRoutes = [
    "Send",
    "Choose",
    "SendIn",
    "SendOk",
    "Confirm",
    "Pay",
    "ChoosePay",
    "Topup",
    "ConfirmBill",
    "PayOk",
  ];
  React.useLayoutEffect(() => {
    //const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Send"
        component={SendMoneyScreen}
        options={{
          headerTransparent: true,
          title: "Chuyển tiền",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Choose"
        component={ChooseScreen}
        options={{
          headerTransparent: true,
          title: "Người thụ hưởng",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("Send")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="SendIn"
        component={SendInScreen}
        options={{
          headerTransparent: true,
          title: "Chuyển tiền nội bộ",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("Choose")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTransparent: true,
          title: "Xác nhận giao dịch",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={
                {
                  //marginLeft: 10,
                  // backgroundColor: "red",
                }
              }
              onPress={() => navigation.navigate("Choose")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="#000"
                backgroundColor="yellow"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="SendOk"
        component={SendOkScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ChoosePay"
        component={ChoosePayScreen}
        options={{
          headerTransparent: true,
          title: "Chọn nhà cung cấp",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Pay"
        component={Pay}
        options={{
          headerTransparent: true,
          title: "Thanh toán",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("ChoosePay")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Topup"
        component={Topup}
        options={{
          headerTransparent: true,
          title: "Nạp tiền",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 17,
                //backgroundColor: "red",
              }}
              onPress={() => navigation.navigate("ChoosePay")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="ConfirmBill"
        component={ConfirmBill}
        options={{
          headerTransparent: true,
          title: "Xác nhận giao dịch",
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={
                {
                  //marginLeft: 10,
                  // backgroundColor: "red",
                }
              }
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={45}
                color="#000"
                backgroundColor="yellow"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="PayOk"
        component={PayOk}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

const styles = StyleSheet.create({});
