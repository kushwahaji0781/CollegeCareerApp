import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

let DATA_array = [];
// let IMAGE = [];

const initData = {
  search: "",
};

const FlatListData = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(initData);
  const [ImgData, setImgData] = useState({});
  const { OwnerImg } = useSelector((state) => state.cartreducer);

  const FlatListImg = (user_mobile) =>
    Object.keys(OwnerImg).map((id, index) => {
      // console.log("mobile", user_mobile)
      // console.log("id", id)
      if (id === user_mobile) {
        Object.keys(OwnerImg[id]).map((id1, index) => {
          // console.log("image", OwnerImg[id][id1])
          global.imgdataload = OwnerImg[id][id1].img_data;
        });
        return (
          <>
            <Image
              source={{ uri: global.imgdataload }}
              style={[styles.image, { borderWidth:80 }]}
              // onClick="ProductDetails"
            />
          </>
        );
      }
    });

  const RenderItem = ({ item }) => {
    return (
      <>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", item)} >

          <View>{FlatListImg(item.value.user_mobile)}</View>
          <Text style={styles.name}>{item.value.college_name}</Text>
          <Text style={styles.time}>{item.value.currentTime}</Text>

          </TouchableOpacity>
        </View>
      </>
    );
  };
  useEffect(() => {
    setImgData({ ...OwnerImg });
  }, [OwnerImg]);

  const { OwnerData } = useSelector((state) => state.cartreducer);
  if (OwnerData) {
    DATA_array = [];
    Object.keys(OwnerData).map((id) => {
      DATA_array.push({ key: id, value: OwnerData[id] });
    });
  }

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  if (state.search) {
    DATA_array = DATA_array.filter(name =>
      (name.value.college_name).match(new RegExp(state.search, "i"))
      || (name.value.currentTime).match(new RegExp(state.search, "i")))
  }
  return (
    <>
      <View style={styles.container}>
        <LinearGradient colors={["#0B0B45", "#FF0000"]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "70%",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 7,
              borderRadius: 40,
            }}
          >
            <Icon
              name="search"
              size={20}
              color="#096176"
              style={{ marginHorizontal: 10, marginTop: 5 }}
            />
            <TextInput
              style={{
                width: "70%",
                height: 30,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: "white",
                fontSize: 17,
                fontWeight: "500",
                color: "#191970",
              }}
              onChangeText={(text) => handleChange("search", text)}
              placeholder="Search Near College..."
              placeholderTextColor={"#000000"}
            />
          </View>
          <View style={{ marginTop: 20,marginBottom: 80 }}>
            <FlatList
              data={DATA_array}
            keyExtractor={(item) => item.id}
              renderItem={RenderItem}
            />
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default FlatListData;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
    flex: 1,
    width: "100%",
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  TextInput: {
    width: "70%",
    height: 45,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "500",
    color: "#191970",
  },
  image: {
    width: "96%",
    alignSelf: "center",
  },
  name: {
    color: "#FFFF00",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 8,
    textShadowColor: "black",
  },
  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: 40,
    backgroundColor: "#0b0b45",
    elevation: 5,
    alignSelf: "center",
    marginTop: 7,
    resizeMode: "contain",
  },
  LinearGradient: {
    padding: 2,
  },
  time: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textShadowColor: "black",
  },
});
