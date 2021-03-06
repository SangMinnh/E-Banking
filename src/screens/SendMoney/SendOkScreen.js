import React, { useRef } from "react";
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

const SendOkScreen = ({ navigation, route }) => {
  // const id = route.params.id;
  console.log(route.params);
  // const item = contact.find((user) => user.id === id);
  console.log(W);
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
        <View style={styles.bill}>
          <View style={styles.part1}>
            <View
              style={{
                display: "flex",
                width: 70,
                height: 70,
                backgroundColor: "rgba(0,224,200,.2)",
                alignSelf: "center",
                borderRadius: 999,
                justifyContent: "center",
              }}
            >
              <Entypo
                name="check"
                size={55}
                color="#00E0C8"
                style={{ alignSelf: "center" }}
              />
            </View>
            <Text
              style={{
                marginBottom: 20,
                marginTop: 10,
                textAlign: "center",
                fontSize: 24,
                fontWeight: "700",
                color: "#00E0C8",
              }}
            >
              Chuy???n ti???n th??nh c??ng
            </Text>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                S??? ti???n chuy???n
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                {"$" + " " + `${route.params.money}`}
              </Text>
            </View>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                Ph?? giao d???ch
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                Mi???n ph??
              </Text>
            </View>
          </View>
          <ImageBackground
            source={require("../../../assets/line.png")}
            style={styles.line}
          ></ImageBackground>
          <View style={styles.part2}>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                M?? giao d???ch
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                20201118181445
              </Text>
            </View>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                T??n ng?????i nh???n
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                {`${route.params.fname} ${route.params.lname}`}
              </Text>
            </View>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                Ng??n h??ng th??? h?????ng
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                {route.params.bank}
              </Text>
            </View>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>
                S??? t??i kho???n
              </Text>
              <Text
                style={[styles.prop, { fontWeight: "700", textAlign: "right" }]}
              >
                {route.params.cardNumber}
              </Text>
            </View>
            <View style={styles.lineText}>
              <Text style={[styles.prop, { textAlign: "left" }]}>L???i nh???n</Text>
              <Text
                style={[
                  styles.prop,
                  { fontWeight: "700", textAlign: "right", width: W / 2 - 35 },
                ]}
              >
                {route.params.message}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={() => {
              // if (data) {
              //   navigation.push("SendIn", { id: data.id });
              //   console.log(data.id);
              // }
              navigation.push("HomeScreen");
            }}
            style={styles.btnHome}
          >
            <Text style={styles.btnText}>V??? TRANG CH???</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // if (data) {
              //   navigation.push("SendIn", { id: data.id });
              //   console.log(data.id);
              // }
              navigation.push("Send");
            }}
            style={styles.btnSend}
          >
            <Text style={styles.btnText}>TI???P T???C CHUY???N TI???N</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SendOkScreen;

const styles = StyleSheet.create({
  bG: {
    position: "relative",
    flex: 1,
    height: 120,
    width: W,
    //paddingTop: 20,
    height: H,
    //justifyContent: "center",
  },
  bill: {
    marginTop: 60,
  },
  line: {
    width: W * 0.95,
    height: 40,

    alignSelf: "center",
  },
  part1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 15,
    alignSelf: "center",
    width: W * 0.95,
    //height: H * 0.3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
  },
  part2: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 40,
    alignSelf: "center",
    width: W * 0.95,
    //height: H * 0.35,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#fff",
  },
  lineText: {
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prop: {
    fontSize: 18,
  },
  btnHome: {
    display: "flex",
    justifyContent: "center",
    width: W * 0.9,
    height: 60,
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
    height: 60,
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
});
