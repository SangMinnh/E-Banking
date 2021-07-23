import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import * as Animatable from "react-native-animatable";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const W = Dimensions.get("window").width;

const Card = (props) => {
  const [showBalance, setShowBalance] = useState(() => {
    return false;
  });
  return (
    <Animatable.View animation="bounceIn">
      <ImageBackground
        source={require("../../assets/Card.png")}
        style={styles.card}
      >
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.smallText}>Master Card</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.actionIcon}
                onPress={() => setShowBalance(!showBalance)}
              >
                {showBalance ? (
                  <MaterialIcons name="attach-money" color="white" size={38} />
                ) : (
                  <MaterialIcons name="money-off" color="white" size={38} />
                )}
              </TouchableOpacity>
              <TextInput
                style={[
                  styles.userName,
                  { paddingLeft: 0, fontSize: 36, fontWeight: "600" },
                ]}
                placeholder=""
                secureTextEntry={showBalance ? false : true}
                autoCapitalize="none"
                editable={false}
                selectTextOnFocus={false}
                value={showBalance ? "100,000" : "0000"}
              />
            </View>
            <Text
              style={[
                styles.userName,
                {
                  letterSpacing: 2,
                  textAlignVertical: "center",
                  paddingTop: 2,
                  fontSize: 20,
                },
              ]}
            >
              **** **** 1903 6221
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Text style={styles.userName}>50,000,000 VND</Text>
          <Feather name="eye" color="grey" size={20} /> */}
            <View>
              <Text style={styles.smallText}>Card Holder</Text>
              <Text style={[styles.userName, { letterSpacing: 2 }]}>
                DƯƠNG MINH SANG
              </Text>
            </View>

            <Image
              style={styles.mastercard}
              source={require("../../assets/masterCard.png")}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </Animatable.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    resizeMode: "cover",
    width: W - 30,
    height: ((W - 30) / 8) * 5,
    borderRadius: 45,
    alignSelf: "center",
  },
  cardContent: {
    alignSelf: "stretch",
    height: ((W - 30) / 8) * 5,
    //backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",

    //backgroundColor: "blue",
  },
  smallText: {
    color: "#fff",
    fontSize: 16,
  },
  mastercard: { width: 60, height: 40 },
  actionIcon: {
    alignSelf: "center",
    //backgroundColor: "red",
    marginLeft: -9,
  },
});
