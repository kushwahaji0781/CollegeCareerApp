import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { load_AreaData, load_CityData, load_OwnerData, load_StateData,load_OwnerImg } from "../redux/action";
import { Picker } from "@react-native-picker/picker";
import FlatListData from './FlatListData';
import { LoginCustomer} from "../redux/action";
import Home from "./Home";


const initialdata = {
  state_name: "",
  city_name: "",
  area_name: "",
};
let cityDataArray = [];
let areaDataArray = [];

const Search = () => {
  const [state, setState] = useState(initialdata);
  const [login, setLogin] = useState(false);
  const { LoadState } = useSelector((state) => state.cartreducer);
  const { LoadCity } = useSelector((state) => state.cartreducer);
  const { LoadArea } = useSelector((state) => state.cartreducer);
  const { OwnerData } = useSelector((state) => state.cartreducer);
  const { OwnerImg } = useSelector((state) => state.cartreducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(load_StateData());
    dispatch(load_CityData());
    dispatch(load_AreaData());

  }, [dispatch]);
  // console.log(" state,,city,,,area,,,in profile", Loadstate , Loadcity , Loadarea );

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  cityDataArray = [];
  Object.keys(LoadCity).map((key) => {
    if (state.state_name === LoadCity[key].state_name)
      cityDataArray.push(LoadCity[key].city_name);
  });

  areaDataArray = [];
  Object.keys(LoadArea).map((id) => {
    if (state.city_name === LoadArea[id].city_name)
      areaDataArray.push(LoadArea[id].area_name);
    // console.log("areaDataArray............", areaDataArray);
  });
  // console.log("load",OwnerData)

  const handleSubmit = () => {
    let stnm = state.state_name;
    let ctnm = state.city_name;
    let arnm = state.area_name;
    dispatch(load_OwnerData(stnm, ctnm, arnm));
    dispatch(load_OwnerImg(stnm, ctnm, arnm));
    console.log("load_RegistrationData",OwnerData)
    setLogin(true);
  };
 
  if (login) {
      return<Home/>
  } 
  else
    return (
      //  <login/>?<Flate/>:
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LinearGradient
            style={{ width: "100%", flex: 1 }}
            colors={["#c70000", "#020024"]}
          >
            <View
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 200,
              }}
            >
              <Text style={styles.text}>Search College</Text>
            </View>
            <View style={{ flex: 0 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="pin" size={24} color="#FFDF00" />
                <Picker
                  itemStyle={{
                    color: "#ffffff",
                    width: "50%",
                    backgroundColor: "#191970",
                  }}
                  selectedValue={state.state_name}
                  onValueChange={(text) => handleChange("state_name", text)}
                  dropdownIconColor="#FFFFFF"
                  dropdownIconRippleColor={"#ffa500"}
                  //  onChangeText={(text) => handleChange("state_name", text)}
                  themeVariant="dark"
                  placeholder="Select your country"
                  mode="dialog" //Android only
                  style={{
                    width: "70%",
                    height: 45,
                    borderRadius: 10,
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    textShadowColor: "#000000",
                    textShadowOffset: { width: 2, height: 4 },
                    textShadowRadius: 5,
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  <Picker.Item label="Please select state" value="Unknown" />
                  {Object.keys(LoadState).map((key) => {
                    return (
                      <Picker.Item
                        label={LoadState[key].state_name}
                        value={LoadState[key].state_name}
                        key={key}
                      />
                    ); //if you have a bunch of keys value pair
                  })}
                </Picker>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="pin" size={24} color="#FFDF00" />
                <Picker
                  itemStyle={{
                    color: "#ffffff",
                    width: "50%",
                    backgroundColor: "#191970",
                  }}
                  selectedValue={state.city_name}
                  onValueChange={(text) => handleChange("city_name", text)}
                  dropdownIconColor="#FFFFFF"
                  dropdownIconRippleColor={"#ffa500"}
                  onChangeText={(text) => handleChange("city_name", text)}
                  themeVariant="dark"
                  placeholder="Select your country"
                  mode="dialog" //Android only
                  style={{
                    width: "70%",
                    height: 45,
                    borderRadius: 10,
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    textShadowColor: "#000000",
                    textShadowOffset: { width: 2, height: 4 },
                    textShadowRadius: 5,
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  <Picker.Item label="Please select city" value="Unknown" />
                  {Object.keys(cityDataArray).map((key) => {
                    return (
                      <Picker.Item
                        label={cityDataArray[key]}
                        value={cityDataArray[key]}
                        key={key}
                      />
                    ); //if you have a bunch of keys value pair
                  })}
                </Picker>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="pin" size={24} color="#FFDF00" />
                <Picker
                  itemStyle={{
                    color: "#ffffff",
                    width: "50%",
                    backgroundColor: "#191970",
                  }}
                  selectedValue={state.area_name}
                  onValueChange={(text) => handleChange("area_name", text)}
                  dropdownIconColor="#FFFFFF"
                  // onChangeText={(text) => handleChange("area_name", text)}
                  dropdownIconRippleColor={"#ffa500"}
                  themeVariant="dark"
                  placeholder="Select your country"
                  mode="dialog" //Android only
                  style={{
                    width: "70%",
                    height: 45,
                    borderRadius: 10,
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    textShadowColor: "#000000",
                    textShadowOffset: { width: 2, height: 4 },
                    textShadowRadius: 5,
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  <Picker.Item label="Please select area" value="Unknown" />
                  {Object.keys(areaDataArray).map((key) => {
                    return (
                      <Picker.Item
                        label={areaDataArray[key]}
                        value={areaDataArray[key]}
                        key={key}
                      />
                    ); //if you have a bunch of keys value pair
                  })}
                </Picker>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={
                    () => handleSubmit()
                    // (navigation.navigate("Flate"))
                  }
                >
                  <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </>
    );
};

export default Search;

const styles = StyleSheet.create({
  box: {
    height: 810,
    width: "100%",
  },
  textName: {
    flexDirection: "row",
    marginLeft: "9%",
    alignItems: "center",
    marginTop: 15,
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  text: {
    color: "#ff0000",
    fontSize: 40,
    fontWeight: 600,
    textShadowColor: "#000000",
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 2,
  },
  TextInput: {
    width: "85%",
    height: 40,
    marginTop: 2,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: "400",
    color: "#ffffff",
    borderWidth: 0.3,
    borderColor: "#FFFFFF",
    elevation: 1,
  },
  name: {
    color: "#ff0000",
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 10,
    textShadowColor: "#000000",
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 1,
  },
  button: {
    height: 30,
    width: "30%",
    alignSelf: "center",
    flexDirection: "row",
    borderColor: "",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020024",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "500",
    textShadowColor: "#fff",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
});
