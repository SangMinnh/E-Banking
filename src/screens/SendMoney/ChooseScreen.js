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
import contact from "../../model/contact.js";

const ChooseScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.contact}
        onPress={() => {
          setData(item);
        }}
      >
        <Image
          style={styles.contactImg}
          source={item.source}
          // source={require("../../../assets/images/img1.jpg")}
          resizeMode="cover"
        />
        <View>
          <Text style={[styles.contactName, {}]}>{`${item.lname}`}</Text>
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
        <View style={styles.nextView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              if (data) {
                navigation.push("SendIn", { id: data.id });
                console.log(data.id);
              }
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
              <Text
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  width: "100%",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                TIẾP TỤC
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

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
              Danh bạ thường xuyên
            </Text>
          </View>
          {/* 
          <ScrollView
            style={{
              borderTopLeftRadius: 40,
              width: W,

              backgroundColor: "#fff",
            }}
          >
            <Text style={styles.contactListLabel}> Danh bạ thường xuyên</Text>

          

            <View style={{ height: 110, backgroundColor: "#fff" }}>
              <FlatList
                //style={styles.contactView}
                // style={{ height: 50, backgroundColor: "red" }}
                data={contact}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View
              style={{
                width: "100%",
                //backgroundColor: "red",
                //height: "100%",
                marginBottom: 0,
                //justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.contactListLabel}>
                  Số thẻ/Số tài khoản/Số điện thoại
                </Text>
                <View
                  style={[
                    styles.textInputView,
                    { backgroundColor: "#E7FFFC", marginTop: 10 },
                  ]}
                >
                  <AntDesign
                    style={styles.textInputViewIcon}
                    name="scan1"
                    color="#00E0C8"
                    size={30}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Số thẻ/Số tài khoản/Số điện thoại"
                    placeholderTextColor="rgba(70,92,91,.7)"
                    style={[styles.textInput, { color: "#465C5B" }]}
                    autoCapitalize="none"
                  ></TextInput>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Lưu danh bạ thụ hưởng</Text>
                </View>
                {!isSelected ? null : (
                  <View
                    style={[
                      styles.textInputView,
                      { backgroundColor: "#E7FFFC", marginTop: 10 },
                    ]}
                  >
                    <AntDesign
                      style={styles.textInputViewIcon}
                      name="contacts"
                      color="#00E0C8"
                      size={30}
                    />
                    <TextInput
                      placeholder="Tên gợi nhớ"
                      placeholderTextColor="rgba(70,92,91,.7)"
                      style={[styles.textInput, { color: "#465C5B" }]}
                      autoCapitalize="none"
                    ></TextInput>
                  </View>
                )}
              </View>
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
                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    width: "100%",
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  TIẾP TỤC
                </Text>
              </LinearGradient>
            </View>
          </ScrollView> */}
          <ScrollView style={styles.scrollView}>
            <View style={{ height: 110, backgroundColor: "#fff" }}>
              <FlatList
                //style={styles.contactView}
                // style={{ height: 50, backgroundColor: "red" }}
                data={contact}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Text style={styles.contactListLabel}>
              Số thẻ/Số tài khoản/Số điện thoại
            </Text>
            <View
              style={[
                styles.textInputView,
                { backgroundColor: "#E7FFFC", marginTop: 10 },
              ]}
            >
              <AntDesign
                style={styles.textInputViewIcon}
                name="scan1"
                color="#00E0C8"
                size={30}
              />
              <TextInput
                value={data ? data.cardNumber : ""}
                // autoFocus={true}
                keyboardAppearance="dark"
                keyboardType="number-pad"
                //placeholder="Số thẻ/Số tài khoản/Số điện thoại"
                placeholderTextColor="rgba(70,92,91,.7)"
                style={[styles.textInput, { color: "#465C5B" }]}
                autoCapitalize="none"
                onChangeText={(e) => {
                  setData({ id: "2", cardNumber: e });
                }}
              ></TextInput>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Lưu danh bạ thụ hưởng</Text>
            </View>
            {!isSelected ? null : (
              <View
                style={[
                  styles.textInputView,
                  { backgroundColor: "#E7FFFC", marginTop: 10 },
                ]}
              >
                <AntDesign
                  style={styles.textInputViewIcon}
                  name="contacts"
                  color="#00E0C8"
                  size={30}
                />
                <TextInput
                  placeholder="Tên gợi nhớ"
                  placeholderTextColor="rgba(70,92,91,.7)"
                  style={[styles.textInput, { color: "#465C5B" }]}
                  autoCapitalize="none"
                ></TextInput>
              </View>
            )}

            <Text style={{ fontSize: 80, color: "transparent" }}>
              React Native
            </Text>
            <Text style={{ fontSize: 80, color: "transparent" }}>
              React Native
            </Text>
          </ScrollView>
        </Animatable.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChooseScreen;

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
    flexDirection: "column",
    marginTop: 10,
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
