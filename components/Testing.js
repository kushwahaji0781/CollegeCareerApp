import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png'
import shortid from 'shortid';
import {push,ref} from 'firebase/database';
import database from '../firebase';

const initialData = {
  customer_id: "",
  customer_mob: "",
  customer_name: "",
  customer_email: "",
  customer_gender: "",
  customer_address: "",
  customer_state: "",
  customer_city: "",
  customer_area: "",
  customer_number: ""
}

const initDataImg={
  customer_id: "",
  customer_image: ""
}

const Testing = () => {
  
  const [state,setState] = useState(initialData);
  const [stateimg,setStateImg]=useState(initDataImg);
  
  const handleChange = (name,value)=>{
    setState({...state,[name]:value})
  }
  // console.log("state---------------",state);
 
  const handleSubmit = () =>{
  state.customer_id=shortid.generate();
  stateimg.customer_id=state.customer_id;
  // console.log("state-----customer_id----------",state.customer_id);
  push(ref(database, 'customer_table'), state)
  .then(() =>{
    push(ref(database, `customer_img/${state.customer_mob}`), stateimg);
    alert(" user registered");
  })
  .catch(
    (err) =>{
        alert("user not registered");
    }
  );
  }
  
  return (
    <>
        <View style={styles.container}>
        <Image
          source={logo}
          style={{
            width: 160,
            height: 160, borderRadius: 95,
            alignSelf: 'center',
            marginBottom: '10%'
          }} />
          <Text style={styles.text}>
             SignUp
          </Text>
         <View style={styles.Inputtext}>
         <TextInput
            placeholderTextColor={'#000000'}
            keyboardType='number-pad'
            maxLength={10}
            placeholder='enter mobile number'
            onChangeText={(text)=> handleChange("customer_mob",text)}
           />
         </View>
         <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={()=>handleSubmit()}>
          <Text style={styles.buttonDesign}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text2}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.signupText}>Sign In</Text> 
         </TouchableOpacity>
      </View>
        </View>
    </>
  );
}

export default Testing;
  
const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
},
text: {
  fontSize: 40,
  fontWeight: 'bold',
  textAlign: 'center',
},
Inputtext: {
  width: '80%',
  height: 40,
  marginTop: 20,
  backgroundColor: '#ffffff',
  marginRight: 5,
  elevation: 10,
  borderRadius: 5,
  paddingLeft: 25
},
buttonStyle: {
  marginTop: 30,
  marginLeft: 15,
  marginRight: 15, 
  height: 30,
  width: '30%',
  borderColor: '',
  borderWidth: 1,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#026efd'
},
buttonDesign: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold'
    
},
text2: {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 5
},
signupText: {
  fontWeight: 'bold'
}
})
// import { LinearGradient } from "expo-linear-gradient";
// import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, } from "react-native";
// import logo from "../Images/logo.jpg";
// import { Ionicons, FontAwesome ,AntDesign,MaterialIcons} from '@expo/vector-icons';
// import { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { load_CustomerData } from "../redux/action";
// import SignUp from "./SIgnUp";
// import DropDownPicker from "react-native-dropdown-picker";
// const initialData = {
//     customer_id: "",
//     customer_name: "",
//     customer_gmail: "",
//     customer_mobile: "",
//     customer_gender: "",
//     state: "",
//     city:"",
//     area:"",
//     pincode:"",
// };
// let setlogin = false;
// const Profile = () => {
//     const [state, setState] = useState(initialData);
    // const [isOpen,setIsOpen]=useState(false);
    // const[currentValue,setCurrentValue]=useState();
    // state.customer_gender=currentValue;
//     const navigation = useNavigation();
//     const handleChange = (name, value) => {
//         setState({ ...state, [name]: value })
//     }
//     // console.log("state--",state.customer_mobile)
//     const { LoadCustomer } = useSelector(state => state.cartreducer);
//     const dispatch = useDispatch();
//     useEffect
//         (() => {
//             dispatch(load_CustomerData());

//         }, []);

//     // const{customer_mobile}=state; 
//     // console.log("customer table",LoadCustomer)
//     // Object.keys(LoadCustomer).map((id)=>{
//     //    console.log("customer_mobile",LoadCustomer[id].customer_mobile)
//     // })
//     const handleSubmit = () => {
//         Object.keys(LoadCustomer).map((id) => {
//             if (state.customer_mobile === LoadCustomer[id].customer_mobile) {
//                 setlogin = true;
//             }
//         })
//         if (setlogin === false) {
//             alert("Please enter vaild mobile number");
//         }
//     }
//     if (setlogin === true) {
//         return (<SignUp />)
//     }
   
//     console.log("customer gender",state.customer_gender)
//     return (

//         <>
//             <View
//                 style={{
//                     flex: 1,
//                     backgroundColor: "#fff",
//                     height: 850,
//                     width: "100%",
//                 }}
//             >
//                 <LinearGradient
//                     colors={["#c70000", "#020024"]}
//                     start={{
//                         x: 0,
//                         y: 0,
//                     }}
//                     end={{
//                         x: 1,
//                         y: 1,
//                     }}
//                     style={styles.box}
//                 >
//                     <Image
//                         source={logo}
//                         style={styles.image}
//                     />
//                     <View style={{ flex: 1 }}>
//                         <View
//                             style={{
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 marginTop: 25,
//                             }}
//                         >
//                             <Text style={styles.text}>Profile</Text>
//                             <View style={styles.icon1}>
//                                 <Ionicons name="person" size={24} color="black" />
//                                 <Text style={styles.lable}>Customer Name</Text>
//                             </View>
//                             <View style={styles.Inputtext}>
//                                 <TextInput
//                                     placeholderTextColor={"#000000"}
//                                     keyboardType="default"
//                                     maxLength={10}
//                                     placeholder="Enter Customer Name"
//                                     onChangeText={(text) => handleChange("customer_name", text)}
//                                 />
//                             </View>
//                             <View style={styles.icon2}>
//                                 <AntDesign name="mobile1" size={24} color="black" />
//                                 <Text style={styles.lable}>Mobile Number</Text>
//                             </View>
//                             <View style={styles.Inputtext}>
//                                 <TextInput
//                                     placeholderTextColor={"#000000"}
//                                     keyboardType="number-pad"
//                                     maxLength={10}
//                                     placeholder="Enter Mobile Number"
//                                     onChangeText={(text) => handleChange("customer_mobile", text)}
//                                 />
//                             </View>
//                             <View style={styles.icon3}>
//                                 <Ionicons  name="mail" size={24} color="black" />
//                                 <Text style={styles.lable}>Email</Text>
//                             </View>
//                             <View style={styles.Inputtext}>
//                                 <TextInput
//                                     placeholderTextColor={"#000000"}
//                                     keyboardType="email-address"
//                                     maxLength={10}
//                                     placeholder="Enter Email Address"
//                                     onChangeText={(text) => handleChange("customer_gmail", text)}
//                                 />
//                             </View>
//                             <View style={styles.icon3}>
//                                 <MaterialIcons name="email" size={24} color="black" />
//                                 <Text style={styles.lable}>Gender </Text>
//                             </View>
                            // <View style={styles.Inputtext} >
                            //     <DropDownPicker
                            //      items={[
                            //         {label: 'Male', value: 'Male'},
                            //         {label: 'Female', value: 'Female'},
                            //         {label: 'Transgender', value: 'Transgender'},
                            //     ]}
                            //    open={isOpen}
                            //    setOpen={()=>{setIsOpen(!isOpen)}}
                            //    value={currentValue}
                            //    setValue={(val)=>{setCurrentValue(val)}}
                            //     />
                            // </View>

//                             <View style={styles.buttonStyle}>
//                                 <TouchableOpacity
//                                     onPress={() => handleSubmit()}
//                                 >
//                                     <Text style={styles.buttonDesign}>SignIn</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={styles.text2}>
//                                 <Text style={styles.text3}>Don't have an account?</Text>
//                                 <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//                                     <Text style={styles.signupText}>Sign Up</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </LinearGradient>
//             </View>

//         </>
//     );
// };
// export default Profile;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     box: {
//         width: "100%",
//         height: 850,
//     },
//     text: {
        // color: "#ff0000",
        // fontSize: 50,
        // fontWeight: 600,
        // textShadowColor: "#000000",
        // textShadowOffset: { width: 0.7, height: 0.7 },
        // textShadowRadius: 2,
//     },
//     image: {
//         width: 150,
//         height: 150,
//         borderRadius: 95,
//         alignSelf: "center",
//         marginTop: "15%",
//     },
//     Inputtext: {
        // width: 300,
        // height: 32,
        // backgroundColor: "#ede8e8",
        // borderRadius: 15,
        // paddingHorizontal: 12,//placeholder text move ke lie
        // fontSize: 18,
        // color: "#991172",
        // marginVertical: 9,
        // flexDirection: "row",
        // marginTop: 10
//     },
//     lable: {
//         color: "#ff0000",
//         fontSize: 17,
//         fontWeight: 500,
//         textShadowColor: "#000000",
//         textShadowOffset: { width: 0.7, height: 0.7 },
//         textShadowRadius: 1,
//         marginRight: 150,
//         marginLeft: 10
//     },
    // buttonStyle: {
        // marginTop: 15,
        // marginLeft: 15,
        // marginRight: 15,
        // height: 30,
        // width: "30%",
        // borderColor: "",
        // borderWidth: 1,
        // borderRadius: 8,
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "#020024",
    // },
    // buttonDesign: {
        // fontSize: 18,
        // color: "#fff",
        // alignSelf: "center",
        // fontWeight: "bold",
    // },
//     text2: {
//         flexDirection: "row",
//         justifyContent: "center",
//         paddingTop: 5,
//     },
//     signupText: {
//         fontWeight: "bold",
//         color: "#ff0000",
//         fontSize: 16,
//         fontWeight: 600,
//         textShadowColor: "#000000",
//         textShadowOffset: { width: 0.7, height: 0.7 },
//         textShadowRadius: 1,
//     },
//     text3: {
//         color: "#ff0000",
//         fontSize: 14,
//         fontWeight: 500,
//         textShadowColor: "#000000",
//         textShadowOffset: { width: 0.7, height: 0.7 },
//         textShadowRadius: 1,
//         marginRight: 4,
//     },
//     icon: {
//         marginTop: 5,
//         marginRight: 5,
//     },
//     icon1: {
//         flexDirection: 'row',
//         marginTop: 10,
//         marginRight: 5,
//         marginLeft: 15
//     },
//     icon2:{
//         flexDirection: 'row',
//         marginTop: 5,
//         marginRight:10,
//         marginLeft: 15
//     },
//     icon3:{
//         flexDirection: 'row',
//         marginTop: 5,
//         marginRight:80,
//         marginLeft: 15
// },
// });
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Button } from "react-bootstrap";
// import shortid from "shortid";
// import database from '../component/firebase';
// import{load_StateData,load_CityData,Load_Area_Table} from '../redux/action';
// import { useDispatch,useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import Dashboard from "../component/Dashboard";

// const initialData = {
//   state_name: "",
//   state_id: "",
//   city_name: "",
//   city_id: "",
//   area_name: "",
//   area_id: "",
//   pincode: ""
// }
// // let cityDataArray = [];
// const AreaRegis = () => {
//   const [state, setState] = useState(initialData);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
//   const matchid =useParams();
//   const { LoadState,LoadCity,LoadArea } = useSelector(state => state.cartreducer); 
//   const dispatch=useDispatch();
//   useEffect
//   (
//    ()=>
//    {
//       dispatch(load_StateData());
//       dispatch(load_CityData());
//       Object.keys(LoadArea).map((id,index)=>{
//         if(matchid.id===id)
//         {
//             setState({...LoadArea[id]});
//         }
//     })

//    },[]);
  
//    const{state_id,state_name,city_id,city_name,area_id,area_name,pincode}=state;
//   if(state.state_name)
//   {
//     Object.keys(LoadState).map((id,index) =>{
//       if(state.state_name===LoadState[id].state_name)
//       {
//         state.state_id=LoadState[id].state_id;
//       }

//      })
//   }

//   if(state.city_name)
//   {
//     Object.keys(LoadCity).map((id,index) =>{
//       if(state.city_name===LoadCity[id].city_name)
//       {
//         state.city_id=LoadCity[id].city_id;
//       }

//      })
//   }

//   let cityDataArray = [];
  
//   Object.keys(LoadCity).map((id, index) => {
//     if (state.state_name === LoadCity[id].state_name) {
//       cityDataArray.push(LoadCity[id].city_name);
//     }
//   });
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(matchid.id)
//     {
//         // update block
//         database.ref(`area_table/${matchid.id}`).set(state,(err)=>{
//             if(err){
//                 alert("data not updated");
//             }
//             else{
//                 alert("data successfully updated");
//             }
//         })
//     }
//     else
//     {
//     //push block
//     const areaid= shortid.generate();
//     state.area_id=areaid;
//     e.preventDefault();
//     database.ref("area_table").push(state,(err)=>{
//         if(err){
//             alert("not inserted");
//         }
//         else{
//             alert("inserted");
//         }
//     })
//     }
// }


//   return (
//     <>
//     <Dashboard/>
//       <div className="container mt-4">
//         <form
//           className="container col-sm-4 col-sm-offset-4 border border-dark"
//           style={{ backgroundColor: "#0B0B45" }}
//           onSubmit={ handleSubmit }
//         >
//           <div className="container">
//             <h2 className="text text-primary text-center mt-4">
//               Area Registration
//             </h2>
//           </div>
//           <div className="container mt-3">
//           <label className='text-warning'>State Name</label>
//           <select
//                           name="state_name"
//                           className=" form-control mb-3"
//                           value={state_name||""}
//                          onChange={handleChange}
//                          >
//                           <option>select state name</option>
//                           {
                            
//                               Object.keys(LoadState).map((id, index) => {
//                                 return (
//                                     <option>{LoadState[id].state_name}</option>
//                                 )
//                               })
//                           }
                          
                          
//           </select>
//           <label className='text-warning'>City Name</label>
//           <select
//               name="city_name"
//               className="form-control mb-3"
//               onChange={handleChange}
//               value={city_name||""}
//             >
//               <option>select city name</option>
//               {
//                 Object.keys(cityDataArray).map((id, index) => {
//                 return(
//                    <option>{cityDataArray[id]}</option>
//                 )
//                 })
//               }
//             </select>
//             <label className='text-warning'>Area Name</label>
//             <input
//               type="text"
//               name="area_name"
//               className="form-control mb-3"
//               placeholder="enter area name"
//               value={area_name||""}
//               onChange={handleChange}
//             />
//             <label className='text-warning'>Pincode</label>
//             <input
//               type="text"
//               name="pincode"
//               className="form-control mb-3"
//               placeholder="Enter the pincode"
//               value={pincode||""}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="container text-center mb-3 mt-2">
//             <Button type="submit" className="btn btn-warning mt-3">
//             {matchid.id?"update":"register"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default AreaRegis;



// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { ref, set } from 'firebase/database';
// import database from './firebase';
// import { useSelector } from 'react-redux';
// import RadioForm from 'react-native-simple-radio-button';
// import * as ImagePicker from 'expo-image-picker';

// const initialData = {
//   customer_id: "",
//   customer_name: "",
//   customer_address: "",
//   customer_state: "",
//   customer_city: "",
//   customer_area: "",
//   customer_gender: "",
//   customer_pincode: "",
//   customer_number: "",
//   customer_alt_number: "",
//   customer_email: "",

// }

// const intitDataImg = {
//   customer_image: "",
//   customer_imgId: "",
// }

// let custid;
// let imgid;
// const ProfileNew = () => {

//   const [state, setState] = useState(initialData);
//   const [stateImage, setStateImage] = useState(intitDataImg);
//   const { LoginUser , CustomerData,CustomerImage} = useSelector(state => state.cartreducer);

//   console.log("customer----------------------_id",CustomerImage);
//   // console.log("state....",Loadstate);
//   useEffect(() => {
//     Object.keys(LoginUser).map((key, index) => {
//       setState({ ...LoginUser[key].value });
//       custid = (LoginUser[key].key)
    
//     })

//     Object.keys(CustomerImage).map((id,index) => {
//       setStateImage({ ...CustomerImage[id]});
//      imgid=id;
//     })
//   }, [CustomerImage]);

//   // console.log("login profile......", CustomerImage); 

//   // customer_imgId=CustomerData.customer_id;

//   const handleChange = (name, value) => {
//     setState({ ...state, [name]: value });
//   }

//   const {
//     customer_name,
//     customer_address,
//     customer_state,
//     customer_city,
//     customer_area,
//     customer_gender,
//     customer_pincode,
//     customer_alt_number,
//     customer_email,
//     customer_number,
//     customer_image } = state;

//   const handleSubmit = () => {
//     set(ref(database, `customer_table/customer_data_table/${custid}`), state)
//       .then(() => {
//         set(ref(database, `customer_table/customer_image_table/${state.customer_number}/${imgid}`), stateImage)
//         alert("Data is updataed ")
//       }).catch(
//         (err) => {
//           alert("Data is not update");
//         }
//       );
//   }
//   var gender = [
//     { label: "Male  ", value: 'male' },
//     { label: "Female  ", value: 'female' },
//     { label: "Other  ", value: 'male' }
//   ]

//   loadRadio = (value) => {
//     state.customer_gender = value;
//     console.log(state.customer_gender)
//   }

//   // This function is triggered when the "Select an image" button pressed
//   const showImagePicker = async () => {
//     // per();
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       base64: true,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 0.2


//     });

//     if (!result.canceled) {
//       let name = "customer_image";
//       let value = "data:image/jpeg;base64," + result.base64;

//       setStateImage({ ...stateImage,[name]: value });

//     }
//   }

//   return (
//     <>
//       <View style={{ flex: 1, }}>
//         <LinearGradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//           colors={['black', 'green']}
//           style={styles.box}>
//           <View style={{
//             width: "100%",
//             height: 140,
//             backgroundColor: 'rgba(216, 250, 8);, 1',
//             borderRadius: 95,
//             alignSelf: 'center',
//             marginTop: '10%',
//             elevation: 90,
//             alignItems: "center"
//           }}>

//             <Image
//             source={{uri : stateImage.customer_image}}
//               style={{
//                 width: 150,
//                 height: 150,
//                 borderRadius: 95
//               }}
//             />
//             <View style={{
//               marginTop: -40,
//               marginLeft: 110,
//               backgroundColor: "#ffdf70",
//               borderRadius: 30
//             }}>
//               <TouchableOpacity
//                 // setModelShow({ isVisible: true });
//                 // modelShow1();
//                 //
               
//                 onPress={() => { showImagePicker() }}
//               >
//                 <View style={{
                
//                   // marginLeft:13

//                 }}>
//                   <Ionicons name='add' size={30} color='#191970' />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{ alignItems: 'center', marginTop: 9 }}>
//             <Text style={{
//               color: '#FFDF00',
//               fontSize: 32,
//               fontWeight: 800,
//               textShadowColor: '#ffffff',
//               textShadowOffset: { width: 0.7, height: 0.7 },
//               textShadowRadius: 1,
//               marginTop: 70,
//             }}>Profile</Text>
//           </View>
//           <ScrollView>
//             <View style={styles.textName}>
//               <Ionicons name='person' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Name
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_name", text)}
//               style={styles.TextInput}
//               placeholder='Enter Name'
//               placeholderTextColor={'#FFFFFF'}
//               value={customer_name || " "}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='mail-outline' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 email
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_email", text)}
//               style={styles.TextInput}
//               placeholder='Enter customer email'
//               placeholderTextColor={'#FFFFFF'}
//               value={customer_email || " "}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='call-outline' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Mobile Number
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_number", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter mobile Number'
//               keyboardType='number-pad'
//               value={customer_number || ""}
//               maxLength={10}

//             />
//             <View style={styles.textName}>
//               <Ionicons name='call-outline' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Alternate No.
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_alt_number", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter alternate mobile  Number'
//               keyboardType='number-pad'
//               value={customer_alt_number || " "}
//               maxLength={10}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='person' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Gender
//               </Text>
//             </View>
//             <RadioForm
//               style={{ flexDirection: 'row', marginTop: 8, marginLeft: '8%' }}

//               radio_props={gender}
//               // value={state.gender}
//               onPress={(value) => this.loadRadio(value)}
//               labelStyle={{ fontSize: 17, color: '#ffffff' }}
//               buttonColor={'yellow'}
//               buttonSize={12}
//               // labelHorizontal={true}
//               // formHorizontal={false}
//               // initial={0}
//               // buttonWrapStyle={{ marginLeft: 10 }}
//               // animation={true}

//             />
//             <View style={styles.textName}>
//               <Ionicons name='pin' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 State
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_state", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter your State'
//               value={customer_state || " "}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='pin' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 City
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_city", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter your City'
//               value={customer_city || " "}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='pin' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Area
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_area", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter your Area'
//               value={customer_area || " "}
//             />

//             <View style={styles.textName}>
//               <Ionicons name='pin' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Street Address
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_address", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter your Street Address'
//               value={customer_address || " "}
//             />
//             <View style={styles.textName}>
//               <Ionicons name='attach' size={24} color='#FFDF00' />
//               <Text
//                 style={styles.name}>
//                 Area Pincode
//               </Text>
//             </View>
//             <TextInput
//               onChangeText={(text) => handleChange("customer_pincode", text)}
//               placeholderTextColor={'#FFFFFF'}
//               style={styles.TextInput}
//               placeholder='Enter Your Area Pincode'
//               keyboardType='number-pad'
//               maxLength={10}
//               value={customer_pincode || " "}
//             />
//             <View style={{ paddingBottom: 50 }}>
//               <TouchableOpacity
//                 onPress={() => handleSubmit()}
//                 style={styles.button}
//               >
//                 <Text
//                   style={styles.buttonText}>
//                   Save
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </LinearGradient>
//       </View>
//     </>
//   )
// }

// export default ProfileNew;

// const styles = StyleSheet.create({
//   box: {
//     height: 810,
//     width: '100%',
//   },
//   textName: {
//     flexDirection: 'row',
//     marginLeft: '9%',
//     alignItems: 'center',
//     marginTop: 15,
//     textShadowColor: '#ffffff',
//     textShadowOffset: { width: 0.5, height: 0.5 },
//     textShadowRadius: 1,
//   },
//   TextInput: {
//     width: '85%',
//     height: 40,
//     marginTop: 2,
//     alignSelf: 'center',
//     borderRadius: 5,
//     paddingLeft: 15,
//     fontSize: 15,
//     fontWeight: "400",
//     color: "#ffffff",
//     borderWidth: 0.3,
//     borderColor: '#FFFFFF',
//     elevation: 1,
//   },
//   name: {
//     color: '#FFDF00',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 10,
//     textShadowColor: '#FFFFFF',
//     textShadowOffset: { width: 0.4, height: 0.4 },
//     textShadowRadius: 1,
//   },
//   button: {
//     height: 40,
//     width: '40%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#FFDF00',
//     borderColor: '#FFFFFF',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     marginBottom: 2,
//     marginTop: 20,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#191970',
//     alignSelf: 'center',
//     fontWeight: '900',
//     textShadowColor: '#fff',
//     textShadowOffset: { width: 0.5, height: 0.5 },
//     textShadowRadius: 2,
//   }
// })





// FlatList


// import React  from 'react';
// import{ StyleSheet,
//         Text,
//         View,
//         FlatList,
//       } from 'react-native';
// const DATA = [
//   {
//     id:"1",
//     title:"Data Structures"
//   },
//   {
//     id:"2",
//     title:"STL"
//   },
//   {
//     id:"3",
//     title:"C++"
//   },
//   {
//     id:"4",
//     title:"Java"
//   },
//   {
//     id:"5",
//     title:"Python"
//   },
//   {
//     id:"6",
//     title:"CP"
//   },
//   {
//     id:"7",
//     title:"ReactJs"
//   },
//   {
//     id:"8",
//     title:"NodeJs"
//   },
//   {
//     id:"9",
//     title:"MongoDb"
//   },
//   {
//     id:"10",
//     title:"ExpressJs"
//   },
//   {
//     id:"11",
//     title:"PHP"
//   },
//   {
//     id:"12",
//     title:"MySql"
//   },
// ];
  
// const Item = ({title}) => {
//   return( 
//     <View style={styles.item}>
//       <Text>{title}</Text>
//     </View>
//   );
// }
  
// export default function App() {
    
  
// const renderItem = ({item})=>( 
//   <Item title={item.title}/>
// );
// return (
//   <View style={styles.container}>
//     <FlatList
//        data={DATA}
//        renderItem={renderItem}
//        keyExtractor={item => item.id}
//     />
//   </View>
//   );
// }
  
// const styles = StyleSheet.create({
//   container: {
//     marginTop:30,
//     padding:2,
//   },
//   item: {
//     backgroundColor: '#f5f520',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });


// 



// import React from 'react';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useSelector } from 'react-redux';
// import { StyleSheet, Text, View, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useState } from "react";
// import { useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';

// let DATA_array = [];

// const initData = {
//   search: ""
// }

// const FlatListJs = () => {

//   const navigation = useNavigation();
//   const [state, setState] = useState(initData);
//   const [LoadRegisReportImgData, setLoadRegisReportImgData] = useState({})
//   const { LoadRegisReportImg } = useSelector(state => state.cartreducer);

//   const FlatListJsImg = (mobile_number) => (
//     Object.keys(LoadRegisReportImg).map((id, index) => {
//       if (id === mobile_number) {
//         Object.keys(LoadRegisReportImg[id]).map((id1, index) => {
//           global.imgdataload = LoadRegisReportImg[id][id1].imgdata;

//         })
//         return (
//           <>
//             <Image
//               source={{ uri: global.imgdataload }}
//               style={[styles.image, { borderWidth: 4 }]}
//             // onClick="Hotel_Details"
//             />
//           </>
//         )
//       }
//     })
//   )

//   const RenderItem = ({ item }) => {

//     return (
//       <>
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate("Hotel_Details", item)} >

//             <View>
//               {FlatListJsImg(item.value.mobile_number)}
//             </View>
//             <Text style={styles.name}>{item.value.shop_name}</Text>
//             <Text style={styles.time}>{item.value.registerTime}</Text>

//           </TouchableOpacity>
//         </View>
//       </>
//     )
//   };

//   useEffect(() => {

//     setLoadRegisReportImgData({ ...LoadRegisReportImg });

//   }, [LoadRegisReportImg])

//   const { LoadRegistration } = useSelector(state => state.cartreducer);

//   if (LoadRegistration) {
//     DATA_array = [];
//     Object.keys(LoadRegistration).map((id) => {

//       DATA_array.push({ key: id, value: LoadRegistration[id] })
//     })
//   }


//   const handleChange = (name, value) => {
//     setState({ ...state, [name]: value });
//   }

//   if (state.search) {
//     DATA_array = DATA_array.filter(name =>
//       (name.value.shop_name).match(new RegExp(state.search, "i"))
//       || (name.value.registerTime).match(new RegExp(state.search, "i")))
//   }

//   // const sendItem =(item)=>{
//   //   console.log("data-----------------------------------",item);

//   //   navigation.navigate("Hotel_Details",item);

//   // }
//   return (
//     <>
//       <View style={styles.container}>
//         {/* <LinearGradient
//           colors={['#0B0B45', '#FF0000']}
//         > */}

//         <View style={{
//           display: 'flex', 
//           flexDirection: "row", 
//           backgroundColor: "#fff",
//            width: "70%",
//             alignSelf: 'center',
//           justifyContent: 'center',
//            marginTop: 7,
//             borderRadius: 40
//         }}>
//           <Icon name="search" size={20} color="#096176" style={{ marginHorizontal: 10, marginTop: 5 }} />
//           <TextInput style={{
//             width: "70%",
//             height: 30,
//             flexDirection: "row",
//             alignSelf: 'center',
//             justifyContent: 'center',
//             backgroundColor: 'white',
//             fontSize: 20,
//             fontWeight: '500',
//             color: '#191970'
//           }}
//             onChangeText={(text) => handleChange("search", text)}
//             placeholder="Search Near Shop"
//             placeholderTextColor={"#000000"} />
//         </View>
//         <View style={{ marginTop: 20, marginBottom: 80 }}>
//           <FlatList
//             data={DATA_array}
//             keyExtractor={(item) => item.id}
//             renderItem={RenderItem}
//           />
//         </View>
//         {/* </LinearGradient> */}
//       </View>
//     </>
//   );
// }

// export default FlatListJs;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 0,
//     padding: 0,
//     flex: 1,
//     width: '100%'
//   },
//   item: {
//     backgroundColor: '#f5f520',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   TextInput: {
//     width: "70%",
//     height: 45,
//     flexDirection: "row",
//     alignSelf: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     fontSize: 20,
//     fontWeight: '500',
//     color: '#191970'
//   },
//   image: {
//     width: "96%",
//     height: 180,
//     alignSelf: 'center'
//   },
//   name: {
//     color: "#FFFF00",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginLeft: 10,
//     marginTop: 8,
//     textShadowColor: "black",
//   },
//   TouchableOpacity: {
//     alignItems: "center",
//     justifyContent: "space-around",
//     width: "90%",
//     height: 40,
//     backgroundColor: '#0b0b45',
//     elevation: 5,
//     alignSelf: 'center',
//     marginTop: 7,
//     resizeMode: "contain"
//   },
//   LinearGradient: {
//     padding: 2
//   },
//   time: {
//     color: "#000000",
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 10,
//     textShadowColor: "black",
//   }
// });


// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react'
// import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
// import { useSelector } from 'react-redux';
// import { FontAwesome } from '@expo/vector-icons';
// // import { Load_ProductData, Load_SendHotel_User } from '../redux/Action';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'; 

// let DATA_array = [];
// let data = [];

// const Hotel_Details = ({ route }) => {

//   const navigation = useNavigation();
//   const item = route.params;

//   const { LoadProduct } = useSelector(state => state.cartreducer); 
//   const { LoadHotelData } = useSelector(state => state.cartreducer);
  
//   const dispatch = useDispatch();

//   useEffect(() => {
    

//     dispatch(Load_ProductData());
//     // dispatch(Load_SendHotel_User(DATA_array))
//     // console.log("hotel  data=---------------------------------",LoadHotelData);

//     Object.keys(LoadProduct).map((id) => {
//       // console.log("id===========.,LoadProduct", id);
//       if (data.value.mobile_number === id) {
//         Object.keys(LoadProduct[id]).map((id1) => {
//           // console.log("id1--------------------------", id1)
//           DATA_array.push({ key: id1, value: (LoadProduct[id])[id1] })
          
//         })
//       }
//     })

//   }, [dispatch, LoadProduct]);

//   Object.keys(item).map((id) => {
//     data = ({ key: id, value: item[id] })
//   })

//   // console.log("DATA_array--------------------------", DATA_array)

//   // if (LoadProduct) {

//   //   Object.keys(LoadProduct).map((id) => {

//   //     Object.keys(LoadProduct[id]).map((id1) => {

//   //       DATA_array.push({ key: id1, value: (LoadProduct[id])[id1] })

//   //     })
//   //   })
//   // }


//   const RenderItem = ({ item }) => {

//     return (
//       <>
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate("MemberShip",item)} >
//             <View style={{ flexDirection: 'row' }}>
//               <View>
//                 <Image
//                   source={{ uri: item.value.imgdata }}
//                   style={[styles.image, { borderWidth: 4 }]}
//                 />
//               </View>

//               <View>
//                 <View style={{ padding: 15 }}>
//                   <Text style={styles.name}>
//                     <FontAwesome5 name="hotel" size={24} color="black" /> {item.value.product_name}
//                   </Text>
//                 </View>
//                 <View style={{ marginLeft: 33 }}>
//                   <Text style={styles.rupee}>
//                     <FontAwesome name="rupee" size={24} color="black" />  {item.value.product_price}
//                   </Text>
//                 </View>
//                 <View style={{ marginLeft: 25 }}>
//                   <Text style={styles.about_product}>
//                     <MaterialIcons name="room-service" size={24} color="black" /> {item.value.about_product}
//                   </Text>
//                 </View>
//               </View>

//             </View>

//           </TouchableOpacity>
//         </View>
//       </>
//     )
//   };

//   return (
//     <>
//       <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
//         <LinearGradient
//           colors={['#0B0B45', '#ff0000']}
//           style={{ width: '100%', flex: 1 }}
//         >
//           <View style={{ marginTop: 30 }}>
//             <Text
//               style={styles.buttonText}
//             >
//               Hotel Details
//             </Text>
//           </View>
//           <View style={{ marginTop: 5, marginBottom: 80 }}>
//             <FlatList
//               data={DATA_array}
//               keyExtractor={(item) => item.id}
//               renderItem={RenderItem}
//             />
//           </View>
//         </LinearGradient>
//       </View>

//     </>
//   )
// };

// export default Hotel_Details;

// const styles = StyleSheet.create({

//   name: {
//     color: "#FFFF00",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginLeft: 10,
//     textShadowColor: "black",
//   },
//   rupee: {
//     color: "#000000",
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: -10,
//     textShadowColor: "black",
//   },
//   about_product: {
//     color: "#000000",
//     fontSize: 15,
//     fontWeight: "bold",
//     textShadowColor: "black",
//     marginRight: 80,
//     paddingRight: 60,
//   },
//   button: {
//     height: 30,
//     elevation: 1,
//     width: '30%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#FFFF33',
//     borderWidth: 0.3,
//     borderRadius: 8,
//     marginBottom: 10,
//     marginTop: 25,
//     marginRight: "10%",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   TextInput: {
//     width: '85%',
//     height: 40,
//     marginTop: 2,
//     alignSelf: 'center',
//     borderRadius: 5,
//     paddingLeft: 15,
//     fontSize: 15,
//     fontWeight: "400",
//     color: "#ffffff",
//     borderWidth: 0.3,
//     borderColor: '#FFFFFF',
//     elevation: 1,
//   },
//   buttonText: {
//     fontSize: 35,
//     color: '#191970',
//     alignSelf: 'center',
//     fontWeight: '900',
//     textShadowColor: '#fff',
//     textShadowOffset: { width: 0.5, height: 0.5 },
//     textShadowRadius: 2,
//     color: "#FFFF00"
//   },
//   image: {
//     width: "100%",
//     height: 140,
//     alignSelf: 'center',
//     padding: 50,
//     marginLeft: 30,
//     marginTop: 5,
//     marginBottom: 10
//   }
// })

// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react'
// import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
// import { useSelector } from 'react-redux';
// import { FontAwesome } from '@expo/vector-icons';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'; 
// import { load_ProductData } from '../redux/action';

// let DATA_array = [];
// let data = [];
// const ProductDetails =({ route }) => {
//     const navigation = useNavigation();
//     const item = route.params;

//     const { ProductData } = useSelector(state => state.cartreducer); 
//     const dispatch = useDispatch();

// useEffect(() => {

//     dispatch(load_ProductData());

//     Object.keys(ProductData).map((id) => {
//       if (data.value.user_mobile === id) {
//         console.log("id===========", id);

//         Object.keys(ProductData[id]).map((id1) => {
//           console.log("id1--------------------------", id1)
//           DATA_array.push({ key: id1, value: (ProductData[id])[id1] })
          
//         })
//       }
//     })

//   }, [dispatch, ProductData]);
 
//   console.log("hii deepak",item)
//   Object.keys(item).map((id) => {
//     data = ({ key: id, value: item[id] })
//   })
//   const RenderItem = ({ item }) => {

//     return (
//       <>
//         <View>
//           {/* <TouchableOpacity onPress={() => navigation.navigate("MemberShip",item)} > */}
//             <View style={{ flexDirection: 'row' }}>
//               <View>
//                 <Image
//                   source={{ uri: item.value.img_data }}
//                   style={[styles.image, { borderWidth:5 }]}
//                 />
//               </View>

//               <View>
//                 <View style={{ padding:18 }}>
//                   <Text style={styles.name}>
//                     <FontAwesome5 name="book" size={18} color="black" /> {item.value.course_name}
//                   </Text>
//                 </View>
//                 <View style={{ marginLeft:18 }}>
//                   <Text style={styles.branch}>
//                     <FontAwesome5 name="book" size={18} color="black" /> {item.value.course_branch}
//                   </Text>
//                 </View>
//                 <View style={{ marginLeft: 33 }}>
//                   <Text style={styles.rupee}>
//                     <FontAwesome name="rupee" size={24} color="black" />  {item.value.course_fee}
//                   </Text>
//                 </View>
//                 <View style={{ marginLeft: 25 }}>
//                   <Text style={styles.about_product}>
//                     <MaterialIcons name="room-service" size={24} color="black" /> {item.value.course_detail}
//                   </Text>
//                 </View>
//               </View>

//             </View>

//           {/* </TouchableOpacity> */}
//         </View>
//       </>
//     )
//   };
//   return (
//     <>
//           <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
//         <LinearGradient
//           colors={['#0B0B45', '#ff0000']}
//           style={{ width: '100%', flex: 1 }}
//         >
//           <View style={{ marginTop: 30 }}>
//             <Text
//               style={styles.buttonText}
//             >
//               College Details
//             </Text>
//           </View>
//           <View style={{ marginTop: 5, marginBottom: 80 }}>
//             <FlatList
//               data={DATA_array}
//               keyExtractor={(item) => item.id}
//               renderItem={RenderItem}
//             />
//           </View>
//         </LinearGradient>
//       </View>
//     </>
//   )
// }

// export default ProductDetails;

// const styles = StyleSheet.create({
//   name: {
//     // color: "#FFFF00",
//     // fontSize: 18,
//     marginLeft: 10,
//     marginRight: 20,
//     color: '#ff0000',
//     fontSize: 18,
//     fontWeight: '500',
//     textShadowColor: '#000000',
//     textShadowOffset: { width: 0.7, height: 0.7 },
//     textShadowRadius: 1,
//   },
//   branch: {
//     fontSize: 18,
//     marginLeft: 10,
//     marginRight: 20,
//     marginTop: -5,
//     color: '#ff0000',
//     fontWeight: '500',
//     textShadowColor: '#000000',
//     textShadowOffset: { width: 0.9, height: 0.9 },
//     textShadowRadius: 1,
//   },
//   rupee: {
//     fontSize: 23,
//     marginTop: 5,
//     color: '#fff',
//     fontWeight: '300',
//     textShadowColor: '#000000',
//     textShadowOffset: { width: 0.7, height: 0.7 },
//     textShadowRadius: 1,  },
//   about_product: {
//     fontSize: 18,
//     color: '#ff0000',
//     fontWeight: '500',
//     textShadowColor: '#000000',
//     textShadowOffset: { width: 0.7, height: 0.7 },
//     textShadowRadius: 1,
//     marginRight: 80,
//     paddingRight: 60,
//   },
//   button: {
//     height: 30,
//     elevation: 1,
//     width: "30%",
//     alignSelf: "center",
//     flexDirection: "row",
//     backgroundColor: "#FFFF33",
//     borderWidth: 0.3,
//     borderRadius: 8,
//     marginBottom: 10,
//     marginTop: 25,
//     marginRight: "10%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   TextInput: {
//     width: "85%",
//     height: 40,
//     marginTop: 2,
//     alignSelf: "center",
//     borderRadius: 5,
//     paddingLeft: 15,
//     fontSize: 15,
//     fontWeight: "400",
//     color: "#ffffff",
//     borderWidth: 0.3,
//     borderColor: "#FFFFFF",
//     elevation: 1,
//   },
//   buttonText: {
//     color: "#ff0000",
//     fontSize: 28,
//     fontWeight: 600,
//     textShadowColor: "#000000",
//     textShadowOffset: { width: 0.7, height: 0.7 },
//     textShadowRadius: 2,
//     alignSelf: "center",

//     // color: "#FFFF00"
//   },
//   image: {
//     width: "100%",
//     height: 140,
//     alignSelf: "center",
//     padding: 50,
//     marginLeft: 30,
//     marginTop: 5,
//     marginBottom: 10,
//   },
// });
