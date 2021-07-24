import React from "react";
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
import * as Animatable from "react-native-animatable";
import Card from "../../components/Card";
const W = Dimensions.get("window").width;
import { useFonts } from "expo-font";
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

const HomeScreen = ({ navigation }) => {
  // const [loaded] = useFonts({
  //   Montserrat: require("../../../assets/fonts/Montserrat-Thin.ttf"),
  // });

  const Tap = (props) => {
    return (
      <View
        style={{
          display: "flex",
          width: 60,
          flexDirection: "column",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <View style={styles.iconRound}>
          <Ionicons name="water-outline" size={30} color="white" />
        </View>
        <Text style={{ alignSelf: "center", fontSize: 18, marginTop: 5 }}>
          {props.name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <FocusAwareStatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      ></FocusAwareStatusBar>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Animatable.Image
              animation="bounceIn"
              source={require("../../../assets/images/sang.jpg")}
              style={styles.avt}
            ></Animatable.Image>
            <View>
              <Text style={{ fontSize: 16, color: "#465C5B" }}>
                Chào buổi chiều
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: "#465C5B" }}
              >
                Minh Sang
              </Text>
            </View>
          </View>
          <Feather name="bell" size={30} color="#465C5B" />
        </View>
        <Card></Card>

        <Animatable.View animation="fadeInUpBig" style={styles.func}>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              //backgroundColor: "green",
            }}
          >
            <TouchableOpacity
              style={[styles.touch, { backgroundColor: "rgba(0,152,194,0.7)" }]}
              onPress={() => navigation.push("Send")}
            >
              <FontAwesome
                name="send"
                size={40}
                style={{ padding: 15 }}
                color="#FFF"
              />
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  paddingBottom: 15,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Chuyển Tiền
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.touch, { backgroundColor: "rgba(0,152,194,0.7)" }]}
            >
              <MaterialCommunityIcons
                name="qrcode"
                style={{ padding: 15 }}
                size={42}
                color="#FFF"
              />
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  paddingBottom: 15,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                QR Pay
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              //backgroundColor: "green",
            }}
          >
            <TouchableOpacity
              style={[
                styles.touch,
                { backgroundColor: "#rgba(0,152,194,0.7)" },
              ]}
            >
              <SimpleLineIcons
                name="wallet"
                style={{ padding: 15 }}
                size={42}
                color="#FFF"
              />
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  paddingBottom: 15,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Tài Khoản
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.touch, { backgroundColor: "rgba(0,152,194,0.7)" }]}
            >
              <AntDesign
                name="creditcard"
                style={{ padding: 15 }}
                size={42}
                color="#FFF"
              />
              <Text
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  paddingBottom: 15,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Dịch Vụ Thẻ
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.big}>Thanh Toán</Text>

            {/* THANH TOÁN ROW 1 */}

            <View style={styles.row}>
              <View
                style={{
                  display: "flex",

                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#FFF6D4" }]}
                  onPress={() =>
                    navigation.push("ChoosePay", { type: "electric" })
                  }
                >
                  <FontAwesome5
                    name="bolt"
                    size={30}
                    style={{ alignSelf: "center" }}
                    color="#FFC800"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Điện</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#C8F3FF" }]}
                >
                  <Ionicons name="water-outline" size={30} color="#0098C2" />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Nước</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#E7FFFC" }]}
                >
                  <Entypo
                    name="graduation-cap"
                    size={30}
                    style={{ alignSelf: "center" }}
                    color="#00E0C8"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Học Phí</Text>
              </View>
            </View>

            {/* THANH TOÁN ROW 2 */}

            <View style={styles.row}>
              <View
                style={{
                  display: "flex",

                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#FFE2FE" }]}
                >
                  <MaterialIcons
                    name="wifi"
                    size={30}
                    style={{ alignSelf: "center", marginRight: 1 }}
                    color="#D300CB"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Viễn Thông</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#E7FFFC" }]}
                >
                  <Ionicons name="cart-outline" size={30} color="#00E0C8" />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Mua Sắm</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#FFD9C9" }]}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={30}
                    style={{ alignSelf: "center", marginLeft: 2 }}
                    color="#EB4E0C"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Thuế</Text>
              </View>
            </View>
            <Text style={styles.big}>Nạp Tiền</Text>

            {/* NẠP TIỀN ROW 1 */}

            <View style={styles.row}>
              <View
                style={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[styles.iconRound, { backgroundColor: "#FFD9C9" }]}
                  onPress={() =>
                    navigation.push("ChoosePay", { type: "stock" })
                  }
                >
                  <MaterialCommunityIcons
                    name="chart-line"
                    size={30}
                    style={{ alignSelf: "center" }}
                    color="#EB4E0C"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>C. Khoán</Text>
              </View>
              <View
                style={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.iconRound,
                    { backgroundColor: "#FFE2FE", width: 60 },
                  ]}
                >
                  <Ionicons
                    name="phone-portrait-outline"
                    size={30}
                    style={{ alignSelf: "center" }}
                    color="#D300CB"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Điện Thoại</Text>
              </View>
              <View
                style={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  //backgroundColor: "red",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.iconRound,
                    { backgroundColor: "#E7FFFC", width: 60 },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="signal-4g"
                    size={30}
                    style={{ alignSelf: "center" }}
                    color="#00E0C8"
                  />
                </TouchableOpacity>
                <Text style={styles.smallIconText}>Data</Text>
              </View>
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    width: W,
    paddingTop: 20,
    //backgroundColor: "#E7FFFC",
  },
  hiText: {
    fontWeight: "bold",
    color: "#373737",
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 15,
    // fontFamily: "Montserrat",
  },
  touch: {
    flex: 1,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  func: {
    backgroundColor: "#fff",
    marginTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 50,
    paddingVertical: 15,
  },
  big: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 30,
    color: "#465C5B",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  smallIconText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    color: "#465C5B",
    width: 110,
    //backgroundColor: "red",
  },
  iconRound: {
    width: 60,
    height: 60,
    padding: 15,
    borderRadius: 999,
    // backgroundColor: "#E7FFFC",
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
  },
  icon: {
    // backgroundColor: "red",
    alignContent: "center",
    padding: 0,
  },
  avt: {
    width: 60,
    height: 60,
    borderRadius: 999,
    //borderWidth: 1,
    //borderColor: "#D300CB",
    marginRight: 10,
  },
});
