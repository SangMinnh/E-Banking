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
import react from "react";

const ConfirmBill = ({ navigation, route }) => {
  const napFull = 500;
  const napSmall = 50;
  //var elmnt = document.getElementsByTagName("FocusAwareStatusBar");
  // var txt = "Height with padding and border: " + elmnt.offsetHeight + "px";
  // console.log("HhHHHAHAHAHA", txt);
  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);
  const renderInner = () => {
    return (
      <Animatable.View animation="fadeInUpBig" style={styles.confirmInput}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          {
            "Vui lòng nhập mã OTP đã được gửi \n tới số điện thoại của Quý khách \n để xác thực giao dịch."
          }
        </Text>

        <View>
          <TextInput keyboardType="number-pad"></TextInput>
        </View>
      </Animatable.View>
    );
  };
  const renderHeader = () => (
    <Animatable.View
      animation="fadeInUpBig"
      style={styles.header}
    ></Animatable.View>
  );
  // const id = route.params.id;
  console.log(route.params);
  // const item = contact.find((user) => user.id === id);
  //console.log(W);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // backgroundColor: "red",
      }}
    >
      <FocusAwareStatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      ></FocusAwareStatusBar>
      <View style={styles.bG}>
        <View style={styles.confirmView}>
          <View style={styles.lineText}>
            <Text style={[styles.prop, { textAlign: "left" }]}>
              Tài khoản nguồn
            </Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              227719036221
            </Text>
          </View>

          <View style={styles.lineText}>
            <Text style={[styles.prop, { textAlign: "left" }]}>Dịch vụ</Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              {route.params.type === "electric"
                ? "Tiền điện"
                : "Nạp tiền chứng khoán"}
            </Text>
          </View>
          <View style={styles.lineText}>
            <Text style={[styles.prop, { textAlign: "left" }]}>
              {route.params.type === "electric"
                ? "Mã khách hàng"
                : "TK Nhà đầu tư"}
            </Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              {route.params.userId
                ? route.params.userId
                : route.params.whereNum}
            </Text>
          </View>
          <View
            style={[
              styles.lineText,
              {
                // borderBottomColor: "#e4e4e4",
                // borderBottomWidth: 1,
                paddingBottom: 20,
              },
            ]}
          >
            <Text
              style={[
                styles.prop,
                {
                  textAlign: "left",
                },
              ]}
            >
              Nhà cung cấp
            </Text>
            <Text
              style={[
                styles.prop,
                { fontWeight: "700", textAlign: "right", width: W / 2 - 35 },
              ]}
            >
              {route.params.provider}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              borderBottomColor: "#e4e4e4",
              borderBottomWidth: 1,
            }}
          ></View>
          <View
            style={[
              styles.lineText,
              {
                paddingTop: 20,
                // borderBottomColor: "#e4e4e4",
                // borderBottomWidth: 1,
                paddingBottom: 20,
              },
            ]}
          >
            <Text style={[styles.prop, { textAlign: "left" }]}>Số tiền</Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              {"$" + " " + `${route.params.money ? route.params.money : "20"}`}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              borderBottomColor: "#e4e4e4",
              borderBottomWidth: 1,
            }}
          ></View>
          <View
            style={[
              styles.lineText,
              {
                paddingTop: 20,
                // borderBottomColor: "#e4e4e4",
                //borderBottomWidth: 1,
                paddingBottom: 20,
              },
            ]}
          >
            <Text style={[styles.prop, { textAlign: "left" }]}>
              Phí giao dịch
            </Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              Miễn phí
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 8,
              borderBottomColor: "#e4e4e4",
              borderBottomWidth: 1,
            }}
          ></View>
          <View
            style={[
              styles.lineText,
              {
                paddingTop: 20,
                //borderBottomColor: "#e4e4e4",
                //borderBottomWidth: 1,
                paddingBottom: 15,
              },
            ]}
          >
            <Text style={[styles.prop, { textAlign: "left" }]}>Tổng tiền</Text>
            <Text
              style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
            >
              {"$" + " " + `${route.params.money ? route.params.money : "20"}`}
            </Text>
          </View>
        </View>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={{
          height: H - 540,
          width: W,
          position: "absolute",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#fff",
          marginTop: 30,
          paddingTop: 25,
          paddingHorizontal: 10,
          bottom: 0,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          {
            "Vui lòng nhập mã OTP đã được gửi \n tới số điện thoại của Quý khách \n để xác thực giao dịch."
          }
        </Text>

        <View>
          <TextInput
            style={{
              //alignSelf: "",
              //marginHorizontal: 30,
              paddingLeft: 48,
              //backgroundColor: "red",
              fontSize: 35,
              //textAlign: "center",
              letterSpacing: 25,
              marginTop: 20,
            }}
            keyboardType="number-pad"
          ></TextInput>
          <View
            style={{
              //backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 20,
            }}
          >
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
          </View>
        </View>
        <View style={styles.nextView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              const d = new Date();
              const n = d.toLocaleString("vi-VN");
              navigation.push("PayOk", { ...route.params, time: n });
              //console.log({ ...item, ...state });

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
                <MaterialIcons
                  name="lock"
                  size={32}
                  style={{ alignSelf: "center" }}
                  color="white"
                />
              </View>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: "700",
                  //marginLeft: 25,
                  //backgroundColor: "red",
                  left: 0,
                  right: 0,
                }}
              >
                XÁC NHẬN
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ConfirmBill;

const styles = StyleSheet.create({
  lines: {
    width: 30,
    height: 5,
    backgroundColor: "#00E0C8",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  bG: {
    //backgroundColor: "red",
    flex: 1,
    width: W,
    //paddingTop: 20,
    height: H,
    // backgroundColor: "#fff",
    //justifyContent: "center",
  },
  bottomSheet: {
    position: "absolute",
    bottom: -30,
  },

  confirmView: {
    marginTop: 80,
    //backgroundColor: "red",
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    //color: "#465C5B",
    borderColor: "#e4e4e4",
    borderWidth: 1,
    borderRadius: 15,
  },
  bill: {
    marginTop: 50,
  },
  line: {
    width: W * 0.95,
    height: 40,

    alignSelf: "center",
  },

  lineText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    //backgroundColor: "red",
  },
  prop: {
    fontSize: 18,
    color: "#465C5B",
  },
  btnHome: {
    display: "flex",
    justifyContent: "center",
    width: W * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 40,
  },
  btnSend: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    width: W * 0.9,
    height: 50,
    //backgroundColor: "rgba(255,255,255,0.4)",
    borderColor: "#FFF",
    borderRadius: 40,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  btnView: {
    width: W,
    position: "absolute",
    bottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#00E0C8",
    marginBottom: -20,
    alignSelf: "center",
  },
  confirmInput: {
    backgroundColor: "#eee",
    //borderRadius: 25,
    paddingTop: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 1,
    //borderBottomWidth: 0,
    // borderTopColor: "#000",
  },
  next: {
    alignSelf: "center",
    position: "relative",
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
});
