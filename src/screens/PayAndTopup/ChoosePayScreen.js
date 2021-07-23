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
  CheckBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
import BottomSheet from "reanimated-bottom-sheet";
import * as Animatable from "react-native-animatable";
import Animated from "react-native-reanimated";
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
import electric from "../../model/electric";
import stock from "../../model/stock";
const ChoosePayScreen = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.contact}
        onPress={() => {
          setData(item);
          if (item) {
            navigation.push(
              route.params.type === "electric" ? "Pay" : "Topup",
              { ...item, type: route.params.type }
            );
            //console.log({ ...item, ...state });
          }
        }}
      >
        {route.params.type === "electric" ? (
          <FontAwesome
            name="bolt"
            size={30}
            style={{ alignSelf: "center" }}
            color="#FFC800"
          />
        ) : (
          <MaterialCommunityIcons
            name="chart-line"
            size={30}
            style={{ alignSelf: "center" }}
            color="#EB4E0C"
          />
        )}

        <View>
          <Text style={[styles.contactName, {}]}>{`${item.name}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
        <View style={styles.view1}>
          <View
            style={[
              styles.textInputView,
              { backgroundColor: "rgba(255,255,255,0.4)" },
            ]}
          >
            <MaterialCommunityIcons
              style={styles.textInputViewIcon}
              name="magnify"
              color="#fff"
              size={30}
            />
            <TextInput
              placeholder="Tìm kiếm..."
              placeholderTextColor="rgba(255,255,255,.8)"
              style={[styles.textInput]}
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>
        <Animatable.View animation="fadeInUpBig">
          <View style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Image
              style={{ width: 40, height: 40, marginTop: -10 }}
              source={require("../../../assets/Subtract.png")}
            ></Image>
          </View>
          <View
            style={{
              width: W,
              height: 50,
              borderTopLeftRadius: 40,
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={[
                styles.contactListLabel,
                { height: 50, textAlignVertical: "bottom" },
              ]}
            >
              Danh sách nhà cung cấp
            </Text>
          </View>

          <ScrollView style={styles.scrollView}>
            <SafeAreaView style={{ height: 660, backgroundColor: "#fff" }}>
              <FlatList
                //style={styles.contactView}
                // style={{ height: 50, backgroundColor: "red" }}
                data={route.params.type === "electric" ? electric : stock}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </SafeAreaView>
          </ScrollView>
        </Animatable.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChoosePayScreen;

const styles = StyleSheet.create({
  bG: {
    position: "relative",
    flex: 1,
    height: 120,
    width: W,
    //paddingTop: 20,
    height: H,
  },
  view1: {
    backgroundColor: "transparent",
    //backgroundColor: "yellow",
    //borderBottomRightRadius: 50,
    //height: 120,
    width: W,
    alignItems: "center",
    marginTop: 65,
  },
  textInputView: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#ffffff",
    marginHorizontal: 22,
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
  scrollView: {
    position: "relative",
    //borderTopLeftRadius: 40,
    // width: W,
    //height: "100%",
    marginTop: -1,
    // height: 80,
    backgroundColor: "#FFF",
    //backgroundColor: "blue",
    //marginHorizontal: 22,
  },
  contactListLabel: {
    fontSize: 18,
    marginHorizontal: 22,
    //marginTop: -10,
    color: "#465C5B",
    fontWeight: "700",
    //backgroundColor: "#fff",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    marginLeft: 25,
  },
  contactImg: {
    width: 60,
    height: 60,
    borderRadius: 999,

    alignSelf: "center",
  },
  contactName: {
    fontSize: 18,
    color: "#465C5B",
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "600",
    //backgroundColor: "red",
    marginLeft: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 32,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    //fontWeight: "700",
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 22,
    borderRadius: 40,
    height: 60,
  },
  nextView: {
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    zIndex: 1000,
    paddingVertical: 20,
  },
});
