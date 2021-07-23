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
import Card from "../../components/Card";
const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
import { useFonts } from "expo-font";
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

import { render } from "react-dom";
//690

const SendMoneyScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.contact}>
        <Image
          style={styles.contactImg}
          source={item.source}
          // source={require("../../../assets/images/img1.jpg")}
          resizeMode="cover"
        />
        <View>
          <Text
            style={[styles.contactName, { fontWeight: "700" }]}
          >{`${item.fname} ${item.lname}`}</Text>
          <Text style={styles.contactName}>{item.cardNumber}</Text>
          <Text style={styles.contactName}>{item.bank}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTransparent: true,
  //   });
  const napFull = H - 85;
  const napSmall = H - 405;
  //var elmnt = document.getElementsByTagName("FocusAwareStatusBar");
  // var txt = "Height with padding and border: " + elmnt.offsetHeight + "px";
  // console.log("HhHHHAHAHAHA", txt);
  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);
  const renderInner = () => {
    return (
      <Animatable.View animation="fadeInUpBig" style={styles.contactView}>
        <FlatList
          style={{ height: "100%" }}
          data={contact}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          vertical
          showsVerticalScrollIndicator={false}
        />
      </Animatable.View>
    );
  };
  const renderHeader = () => (
    <Animatable.View animation="fadeInUpBig" style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
      <Text style={styles.contactListLabel}> Danh bạ thường xuyên</Text>
    </Animatable.View>
  );

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
        </View>
        <View style={styles.sendView}>
          <View style={styles.send}>
            <TouchableOpacity
              style={styles.sendTouch}
              onPress={() => navigation.push("Choose")}
            >
              <MaterialCommunityIcons
                name="bank-transfer"
                size={50}
                color="#fff"
                style={{ alignSelf: "center", paddingLeft: 4 }}
              />
            </TouchableOpacity>
            <Text style={styles.sendType}>Trong Ngân Hàng</Text>
          </View>
          <View style={styles.send}>
            <TouchableOpacity style={styles.sendTouch}>
              <MaterialCommunityIcons
                name="bank-transfer-out"
                size={50}
                color="#fff"
                style={{ alignSelf: "center", paddingLeft: 4 }}
              />
            </TouchableOpacity>
            <Text style={styles.sendType}>Liên Ngân Hàng</Text>
          </View>
          <View style={styles.send}>
            <TouchableOpacity style={styles.sendTouch}>
              <Ionicons
                name="rocket"
                size={38}
                color="#fff"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
            <Text style={styles.sendType}>Chuyển Nhanh 24/7</Text>
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[napFull, napSmall]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        {/* <View style={styles.contactView}></View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  bG: {
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
  },
  balanceTxt: {
    color: "#fff",
    textAlign: "center",
  },
  sendView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  send: {
    display: "flex",
    justifyContent: "center",
  },
  sendTouch: {
    display: "flex",
    width: 95,
    height: 95,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  sendType: {
    marginTop: 5,
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    width: 110,
    textAlign: "center",
  },
  header: {
    backgroundColor: "#fff",
    //shadowColor: "#333333",
    //shadowOffset: { width: -1, height: -3 },
    //shadowRadius: 2,
    //shadowOpacity: 0.4,
    elevation: 0,
    paddingTop: 15,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginBottom: -1,
    zIndex: 1005,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 80,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#E4e4e4",
    marginBottom: 10,
  },
  contactView: {
    width: W,
    //height: "100%",
    //marginBottom: -20,
    height: H,
    backgroundColor: "#FFF",
    paddingHorizontal: 22,
  },
  contactListLabel: {
    fontSize: 18,
    paddingHorizontal: 22,
    color: "#465C5B",
    fontWeight: "700",
    marginBottom: 0,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  contactImg: {
    width: 70,
    height: 70,
    borderRadius: 999,
    marginRight: 15,
    alignSelf: "center",
  },
  contactName: {
    fontSize: 18,
    color: "#465C5B",
    display: "flex",
    flexDirection: "column",
  },
});
