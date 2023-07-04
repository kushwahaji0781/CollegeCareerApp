import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import logo from "../Images/logo.jpg";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  load_CustomerImg, LoginCustomer } from '../redux/action';
import { ref, set } from 'firebase/database';
import database from '../components/firebase';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';

const initialData = {
  customer_id: "",
  customer_name: "",
  customer_address: "",
  customer_state: "",
  customer_city: "",
  customer_area: "",
  customer_gender: "",
  customer_pincode: "",
  customer_number: "",
  customer_alt_number: "",
  customer_email: "",

}
const intitDataImg = {
  customer_id: "",
  customer_img: "",
}
let update_key;
let mob;
let image_key;
const Profile = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(initialData);
  const [stateImg, setStateImg] = useState(intitDataImg);
  const {  tempArray, LoadCustomerImg } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();
  useEffect(() => {
    Object.keys(tempArray).map((key, value) => {
      setState({ ...tempArray[key].value });
      update_key = (tempArray[key].key)
    })
    Object.keys(LoadCustomerImg).map((key,value)=>{
      image_key=key;
       setStateImg({...LoadCustomerImg[key]}) ;
  })
  }, [LoadCustomerImg]);

  const {customer_name, customer_number ,customer_address,customer_state,customer_city,customer_area,customer_gender,customer_pincode,customer_alt_number,customer_email} = state;

 
  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  }


  const handleSubmit = () => {
    set(ref(database, `customer_table/customer_data/${update_key}`), state)
      .then(() => {
        set(ref(database, `customer_table/customer_img/${state.customer_number}/${image_key}`),stateImg)
        alert("Data is updataed ")
      }).catch(
        (err) => {
          alert("Data is not update");
        }
      );
  }
  let gender = [
    { label: "Male  ", value: 'Male' },
    { label: "Female  ", value: 'Female' },
    { label: "Other ", value: 'Other' }
  ]
  RadioFunction = (value) => {
    state.customer_gender = value;
    console.log(state.customer_gender)
  };

// This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // per();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2


    });

    if (!result.canceled) {
      let name = "customer_img";
      let value = "data:image/jpeg;base64," + result.base64;

      setStateImg({ ...stateImg,[name]: value });

    }
  }
  // console.log("imageee",stateImg.customer_img)
  // console.log("imageee",state.customer_gender)
  return (
    <>
      <View style={{ flex: 1, }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.3 }}
          colors={['#c70000', '#020024']}
          style={styles.box}>

          <View style={{
            width: "100%",
            height: 140,
            backgroundColor: 'rgba(216, 250, 8);, 1',
            borderRadius: 95,
            alignSelf: 'center',
            marginTop: '10%',
            elevation: 90,
            alignItems: "center"
          }}>

            <Image
            source={{uri : stateImg.customer_img}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 95
              }}
            />
            <View style={{
              marginTop: -40,
              marginLeft: 110,
              backgroundColor: "#ffdf70",
              borderRadius: 30
              }}>
              <TouchableOpacity
                // setModelShow({ isVisible: true });
                // modelShow1();
                //
               
                onPress={() => { showImagePicker() }}
              >
                <View style={{
                
                  // marginLeft:13

                }}>
                  <Ionicons name='add' size={30} color='#191970' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 9 }}>
            <Text style={{
              color: "#ff0000",
              fontSize: 45,
              fontWeight: 600,
              textShadowColor: "#000000",
              textShadowOffset: { width: 0.7, height: 0.7 },
              textShadowRadius: 2,
              marginTop: 20
            }}>Profile</Text>
          </View>
          <ScrollView nestedScrollEnabled={true} >
            <View style={styles.textName}>
              <Ionicons name='person' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Name
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_name", text)}
              style={styles.TextInput}
              placeholder='Enter Name'
              value={customer_name || ""}
              placeholderTextColor={'#FFFFFF'}
            />
            <View style={styles.textName}>
              <Ionicons name='mail-outline' size={24} color='#000000' />
              <Text
                style={styles.name}>
                email
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_email", text)}
              style={styles.TextInput}
              value={customer_email || ""}
              placeholder='Enter customer email'
              placeholderTextColor={'#FFFFFF'}
            />

            <View style={styles.textName}>
              <Ionicons name='call-outline' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Mobile Number
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_number", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              placeholder='Enter mobile Number'
              keyboardType='number-pad'
              value={customer_number || ""}
             editable={false}
              maxLength={10}
            />
             
            <View style={styles.textName}>
              <Ionicons name='call-outline' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Alternate No.
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_alt_number", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              value={customer_alt_number || ""}
              placeholder='Enter alternate mobile  Number'
              keyboardType='number-pad'
              maxLength={10}
            />

            <View style={styles.textName}>
              <Ionicons name='person' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Gender
              </Text>
            </View>
            <RadioForm
              style={{
                flexDirection: 'row',
                marginTop: 5,
                marginLeft: '8%',
              }}
              labelStyle={{ fontSize: 17, color: '#fff' }}
              buttonColor={'#c70000'}
              buttonSize={10}
              radio_props={gender}
              value={customer_gender || ""}
              initial={""}

              // radioButton.checked = false 
              // animation={true}
              // onPress={(value) => {this.setState({value:value})}}
              onPress={(value) => this.RadioFunction(value)}
            />
            <View style={styles.textName}>
              <Ionicons name='pin' size={24} color='#000000' />
              <Text
                style={styles.name}>
                State
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_state", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              value={customer_state || ""}
              placeholder='Enter your State'
            />
            <View style={styles.textName}>
              <Ionicons name='pin' size={24} color='#000000' />
              <Text
                style={styles.name}>
                City
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_city", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              value={customer_city || ""}
              placeholder='Enter your City'
            />
            <View style={styles.textName}>
              <Ionicons name='pin' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Area
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_area", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              value={customer_area || ""}
              placeholder='Enter your Area'
            />

            <View style={styles.textName}>
              <Ionicons name='pin' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Street Address
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_address", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              value={customer_address || ""}
              placeholder='Enter your Street Address'
            />
            <View style={styles.textName}>
              <Ionicons name='attach' size={24} color='#000000' />
              <Text
                style={styles.name}>
                Area Pincode
              </Text>
            </View>
            <TextInput
              onChangeText={(text) => handleChange("customer_pincode", text)}
              placeholderTextColor={'#FFFFFF'}
              style={styles.TextInput}
              placeholder='Enter Your Area Pincode'
              keyboardType='number-pad'
              value={customer_pincode || ""}
              maxLength={10}
            />
            <View style={{ paddingBottom: 50 }}>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.button}
              >
                <Text
                  style={styles.buttonText}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  )
}

export default Profile;

const styles = StyleSheet.create({
  box: {
    height: 810,
    width: '100%',
  },

  textName: {
    flexDirection: 'row',
    marginLeft: '9%',
    alignItems: 'center',
    marginTop: 15,
    textShadowColor: '#ffffff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  TextInput: {
    width: '85%',
    height: 40,
    marginTop: 2,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: "400",
    color: "#ffffff",
    borderWidth: 0.3,
    borderColor: '#FFFFFF',
    elevation: 1,
  },
  name: {
    color: '#ff0000',
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 10,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 1,
  },
  button: {
    height: 35,
    width: '35%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: '',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#020024"
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '500',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  }
})
