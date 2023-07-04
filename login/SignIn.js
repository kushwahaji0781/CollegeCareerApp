import { LinearGradient } from "expo-linear-gradient";
import {  StyleSheet,  Text,  TextInput,  View,  Image,  TouchableOpacity,} from "react-native";
import logo from "../Images/logo.jpg";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { load_CustomerData,load_CustomerImg,LoginCustomer} from "../redux/action";
import Profile from "./Profile";
import Search from "../components/Search";
const initialData = {
    customer_number: "",
};
let loginvalidation=false;
const SignIn = () => {
    const[state,setState] =useState(initialData);
    const navigation = useNavigation();
    const [Login, setLogin] = useState(false);
    const handleChange=(name,value)=>{
        setState({...state,[name]:value})
    }
    const {LoadCustomer,LoadCustomerImg } =useSelector (state => state.cartreducer);
    const dispatch = useDispatch();
    useEffect
       (() => {
             dispatch(load_CustomerData());

        }, []);  
     
    const handleSubmit = () => {
        Object.keys(LoadCustomer).map((id) => {
            if (state.customer_number === LoadCustomer[id].customer_number) {
                loginvalidation =true;
                dispatch(LoginCustomer(LoadCustomer[id],id));
                dispatch(load_CustomerImg(state.customer_number))
                setLogin(true);
            }
        })
        if (loginvalidation == false) {
            alert("Please enter vaild mobile number");
        }
    }

    if(loginvalidation==true)
    {
        // return <Profile/>
        return <Search/>
    }
    return (
       
        <> 
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    height: 850,
                    width: "100%",
                }}
            >
                <LinearGradient
                    colors={["#c70000", "#020024"]}
                    start={{
                        x: 0,
                        y: 0,
                    }}
                    end={{
                        x: 1,
                        y: 1,
                    }}
                    style={styles.box}
                >
                    <Image
                        source={logo}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 95,
                            alignSelf: "center",
                            marginTop: "15%",
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 25,
                            }}
                        >
                            <Text style={styles.text}>SignIn</Text>
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
                                maxLength={10}

                            />

                            <View style={styles.buttonStyle}>
                                <TouchableOpacity
                                onPress={() => handleSubmit()}
                                >
                                    <Text style={styles.buttonDesign}>SignIn</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text2}>
                                <Text style={styles.text3}>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                <Text style={styles.signupText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
          
        </>
    );
};
export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: "100%",
        height: 850,
    },
    text: {
        color: "#ff0000",
        fontSize: 50,
        fontWeight: 600,
        textShadowColor: "#000000",
        textShadowOffset: { width: 0.7, height: 0.7 },
        textShadowRadius: 2,
    },
    textName: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight:'50%',
        alignItems: 'center',
        marginTop: 15,
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
      },
      TextInput: {
        width: '85%',
        height: 40,
        marginTop: 4,
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
    buttonStyle: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        height: 30,
        width: "30%",
        borderColor: "",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020024",
    },
    buttonDesign: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
        fontWeight: "bold",
    },
    text2: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 5,
    },
    signupText: {
        fontWeight: "bold",
        color: "#ff0000",
        fontSize: 16,
        fontWeight: 600,
        textShadowColor: "#000000",
        textShadowOffset: { width: 0.7, height: 0.7 },
        textShadowRadius: 1,
    },
    text3: {
        color: "#ff0000",
        fontSize: 14,
        fontWeight: 500,
        textShadowColor: "#000000",
        textShadowOffset: { width: 0.7, height: 0.7 },
        textShadowRadius: 1,
        marginRight: 4,
    },
    icon:{
        marginTop:5,
        marginRight:5,
    }
});
