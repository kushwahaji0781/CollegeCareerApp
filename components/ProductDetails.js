import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { load_ProductData } from '../redux/action';

let DATA_array = [];
let data = [];

const ProductDetails =({ route }) => {
    const navigation = useNavigation();
    const item = route.params;

    const { ProductData } = useSelector(state => state.cartreducer); 
    const dispatch = useDispatch();

useEffect(() => {

    dispatch(load_ProductData());
    DATA_array = [];
    Object.keys(ProductData).map((id) => {
        if (data.value.user_mobile === id) {
          Object.keys(ProductData[id]).map((id1) => {
            DATA_array.push({ key: id1, value: (ProductData[id])[id1] })
            
          })
        }
      })

  }, [dispatch]);


//   useEffect(() => {
//  DATA_array = [];
//   Object.keys(ProductData).map((id) => {
//       if (data.value.user_mobile === id) {
//         Object.keys(ProductData[id]).map((id1) => {
//           DATA_array.push({ key: id1, value: (ProductData[id])[id1] })
          
//         })
//       }
//     })

//   }, [ProductData]);
  Object.keys(item).map((id) => {
    data = ({ key: id, value: item[id] })
  })
console.log("hhiiii",DATA_array)
  const RenderItem = ({ item }) => {

    return (
      <>
        <View>
          {/* <TouchableOpacity onPress={() => navigation.navigate("MemberShip",item)} > */}
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  source={{ uri: item.value.img_data }}
                  style={[styles.image, { borderWidth:5 }]}
                />
              </View>

              <View>
                <View style={{ padding:18 }}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="book" size={18} color="black" /> {item.value.course_name}
                  </Text>
                </View>
                <View style={{ marginLeft:18 }}>
                  <Text style={styles.branch}>
                    <FontAwesome5 name="book" size={18} color="black" /> {item.value.course_branch}
                  </Text>
                </View>
                <View style={{ marginLeft: 33 }}>
                  <Text style={styles.rupee}>
                    <FontAwesome name="rupee" size={24} color="black" />  {item.value.course_fee}
                  </Text>
                </View>
                <View style={{ marginLeft: 25 }}>
                  <Text style={styles.about_product}>
                    <MaterialIcons name="room-service" size={24} color="black" /> {item.value.course_detail}
                  </Text>
                </View>
              </View>

            </View>

          {/* </TouchableOpacity> */}
        </View>
      </>
    )
  };
  return (
    <>
          <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#0B0B45', '#ff0000']}
          style={{ width: '100%', flex: 1 }}
        >
          <View style={{ marginTop: 30 }}>
            <Text
              style={styles.buttonText}
            >
              College Details
            </Text>
          </View>
          <View style={{ marginTop: 5, marginBottom: 80 }}>
            <FlatList
              data={DATA_array}
              keyExtractor={(item) => item.id}
              renderItem={RenderItem}
            />
          </View>
        </LinearGradient>
      </View>
    </>
  )
}

export default ProductDetails;

const styles = StyleSheet.create({
  name: {
    // color: "#FFFF00",
    // fontSize: 18,
    marginLeft: 10,
    marginRight: 20,
    color: '#ff0000',
    fontSize: 18,
    fontWeight: '500',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 1,
  },
  branch: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 20,
    marginTop: -5,
    color: '#ff0000',
    fontWeight: '500',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0.9, height: 0.9 },
    textShadowRadius: 1,
  },
  rupee: {
    fontSize: 23,
    marginTop: 5,
    color: '#fff',
    fontWeight: '300',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 1,  },
  about_product: {
    fontSize: 18,
    color: '#ff0000',
    fontWeight: '500',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 1,
    marginRight: 80,
    paddingRight: 60,
  },
  button: {
    height: 30,
    elevation: 1,
    width: "30%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#FFFF33",
    borderWidth: 0.3,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 25,
    marginRight: "10%",
    alignItems: "center",
    justifyContent: "center",
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
  buttonText: {
    color: "#ff0000",
    fontSize: 28,
    fontWeight: 600,
    textShadowColor: "#000000",
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 2,
    alignSelf: "center",

    // color: "#FFFF00"
  },
  image: {
    width: "100%",
    height: 140,
    alignSelf: "center",
    padding: 50,
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 10,
  },
});