import { LinearGradient } from 'expo-linear-gradient/build/LinearGradient';
import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import logo from "../Images/logo.jpg";
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { load_CollegeType } from '../redux/action';
// import { load_CollegeType } from '../redux/Action';

let DATA_array = [];

const initData = {
    search: ""
}

const Category = () => {

    const [state, setState] = useState(initData);

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    }

    const { CollegeType } = useSelector(state => state.cartreducer);
    const dispatch = useDispatch();
    useEffect(() => {
    //   dispatch(load_CollegeType());
    dispatch(load_CollegeType());
  
    }, [dispatch]);

    // console.log("data is college type",CollegeType)
    if (CollegeType) {
        DATA_array = [];
        Object.keys(CollegeType).map((id) => {

            DATA_array.push({ key: id, value: CollegeType[id] })
        })
    }
        if (state.search) {
        DATA_array = DATA_array.filter(name =>
            (name.value.college_type).match(new RegExp(state.search, "i")))
    }

    const renderItem = ({ item }) => (
        <View style={{ width: 85, padding: 5, marginTop: 15 }}>
            <LinearGradient
                colors={['#0B0B45', '#FF0000']}
                style={{ padding: 2, borderRadius: 50 }}
            >
                <Image
                    // source={{ uri: item.imgdata }}
                    source={logo}
                    style={[styles.userImage, { borderWidth: 4 }]} />
            </LinearGradient>
            <Text style={styles.userName}>{item.value.college_type}</Text>
        </View>
    );

    return (
        <>
            <View >
                <LinearGradient
                    colors={['#0B0B45', '#FF0000']}
                    style={{ padding: 2 }}>
                    <View style={{
                        display: 'flex', flexDirection: "row", backgroundColor: "#fff", width: "70%", alignSelf: 'center',
                        justifyContent: 'center', marginTop: 45, borderRadius: 40
                    }}>
                        <Icon name="search" size={20} color="#096176" style={{ marginHorizontal: 10, marginTop: 7 }} />
                        <TextInput style={{
                            width: "70%",
                            height: 30,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 1,
                            backgroundColor: 'white',
                            fontSize: 17,
                            fontWeight: '500',
                            color: '#191970'
                        }}
                            onChangeText={(text) => handleChange("search", text)}
                            placeholder="Search College Category"
                            placeholderTextColor={"#000000"}
                        />
                    </View>

                    <FlatList
                        horizontal
                        data={DATA_array}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </LinearGradient>
            </View>
        </>
    );
}

export default Category;

const styles = StyleSheet.create({
    userImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: 4
    },
    userName: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'lowercase',
        margin: 5,
        color: "#000000"
    }
});