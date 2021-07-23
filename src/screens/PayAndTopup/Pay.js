import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Text,
  Image,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
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
import contact from "../../model/contact.js";

const Pay = ({ navigation, route }) => {
  const [state, setState] = useState(() => {
    return { userId: "", provider: route.params.name };
  });
  const id = route.params.id;
  console.log(id);
  const item = contact.find((user) => user.id === id);
  //   const item = contact.find((value) => {
  //     if (value.id === id) return value;
  //   });
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <FocusAwareStatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      ></FocusAwareStatusBar>

      <ImageBackground
        source={require("../../../assets/BackGround.png")}
        style={styles.bG}
      >
        <View style={styles.balanceView}>
          <Text style={[styles.balanceTxt, { fontSize: 18 }]}>
            Số dư khả dụng
          </Text>
          <Text
            style={[
              styles.balanceTxt,
              { fontSize: 45, paddingRight: 4, letterSpacing: 2 },
            ]}
          >
            $ 100,000
          </Text>
          <ImageBackground
            style={{
              alignSelf: "center",
              width: 340,
              height: 100,
              marginTop: 15,
              display: "flex",
              justifyContent: "center",
            }}
            source={require("../../../assets/nhan.png")}
          >
            <View style={styles.contact}>
              <View style={styles.contactImg}>
                <FontAwesome
                  name="bolt"
                  size={38}
                  style={{ alignSelf: "center" }}
                  color="#FFC800"
                />
              </View>
              <View>
                <Text style={[styles.contactName, { fontWeight: "700" }]}>
                  Tiền điện
                </Text>
              </View>
            </View>
          </ImageBackground>
          <Animatable.View
            animation="fadeInUpBig"
            style={{
              height: H - 340,
              width: W,
              position: "relative",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: "#fff",
              marginTop: 30,
              paddingTop: 25,
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.contactListLabel}>Thông tin giao dịch</Text>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Nhà cung cấp</Text>
              <View
                style={[
                  styles.textInputView,
                  { backgroundColor: "#E7FFFC", marginTop: 5 },
                ]}
              >
                <FontAwesome
                  style={styles.textInputViewIcon}
                  name="bolt"
                  color="#FFC800"
                  size={30}
                />
                <Text style={[styles.textInput, { color: "#465C5B" }]}>
                  {route.params.name}
                </Text>
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Mã khách hàng</Text>
              <View
                style={[
                  styles.textInputView,
                  { backgroundColor: "#E7FFFC", marginTop: 5 },
                ]}
              >
                <FontAwesome5
                  style={styles.textInputViewIcon}
                  name="user"
                  color="#00E0C8"
                  size={25}
                />
                <TextInput
                  value={state.userId.toString()}
                  onChangeText={(e) => {
                    setState({ ...state, userId: e });
                  }}
                  placeholder="Nhập mã khách hàng"
                  keyboardType="number-pad"
                  placeholderTextColor="rgba(70,92,91,.7)"
                  style={[styles.textInput, { color: "#465C5B" }]}
                  autoCapitalize="none"
                ></TextInput>
              </View>
            </View>
            <View style={styles.nextView}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => {
                  if (item) {
                    navigation.push("ConfirmBill", {
                      ...state,
                      type: route.params.type,
                    });
                    //console.log({ ...item, ...state });
                  }
                  //navigation.push("SendOk");
                }}
              >
                <LinearGradient
                  style={styles.next}
                  // Button Linear Gradient
                  colors={[
                    "rgba(4,109,224,.8)",
                    "rgba(11,140,217,.88)",
                    "rgba(0,152,194,.84)",
                  ]}
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.5, y: 1.0 }}
                  locations={[0.3, 0.5, 0.8]}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      width: 60,
                      height: 60,
                      borderRadius: 999,
                      marginLeft: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="send"
                      size={32}
                      style={{ alignSelf: "center" }}
                      color="white"
                    />
                  </View>
                  <Text
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 18,
                      color: "#fff",
                      fontWeight: "700",
                      marginLeft: 25,
                      // backgroundColor: "red",
                      //width: "100%",
                    }}
                  >
                    VUỐT ĐỂ THANH TOÁN
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Pay;

const styles = StyleSheet.create({
  bG: {
    position: "relative",
    flex: 1,
    height: 120,
    width: W,
    //paddingTop: 20,
    height: H,
  },

  balanceView: {
    marginTop: 105,
    marginBottom: 35,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  balanceTxt: {
    color: "#fff",
    textAlign: "center",
  },
  contact: {
    alignSelf: "center",
    marginLeft: 0,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  contactImg: {
    display: "flex",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 999,
    marginRight: 15,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  contactName: {
    fontSize: 18,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  next: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 22,
    borderRadius: 35,
    height: 70,
    width: W * 0.88,
  },
  nextView: {
    width: W,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
    // top: 0,
    bottom: 0,
    zIndex: 1000,
    paddingTop: 5,
    paddingBottom: 30,
  },
  contactListLabel: {
    fontSize: 18,
    marginHorizontal: 22,
    //marginTop: -10,
    color: "#465C5B",
    fontWeight: "700",
    //backgroundColor: "#fff",
    marginBottom: 15,
  },
  inputView: {
    //marginTop: 15,
    color: "#465C5B",
    fontWeight: "700",
    //backgroundColor: "#fff",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginHorizontal: 22,
    //marginTop: -10,
    color: "#465C5B",
    fontWeight: "600",
    //backgroundColor: "#fff",
  },
  textInputView: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 15,
    height: 55,
  },
  textInputViewIcon: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 0,
    color: "#fff",
    fontSize: 18,
    textAlignVertical: "center",
  },
});
