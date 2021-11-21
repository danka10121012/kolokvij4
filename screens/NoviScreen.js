import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function NoviScreen({route, navigation}){
    function handleSettingsPress(){
        navigation.navigate("Settings");
    }
    
    return (
        <View style={styles.screen}>
        <Text>Početni zaslon</Text>
        <ScrollView style ={styles.container}>
           <Image style={styles.header} source={require("../assets/bikovic2.jpg")} />
          <Text style={styles.title}>Montevideo, Bog te video!</Text>
          <Text style={styles.description}>Montevideo, Bog te video! srbijanska je povijesno-humoristična TV serija. 1930. Bliži se prvo Svjetsko prvenstvo u nogometu u urugvajskom Montevideu te je Jugoslavija dobila FIFI-nu pozivnicu za sudjelovanje. Serija prati sastavljanje reprezentacije i privatne živote pojedinih nogometaša.</Text>
          <Text style={styles.grade}>Ocjena: 5</Text>
          <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this movie as Viewed.")} />
    
          <Image style={styles.header} source={require("../assets/bikovic3.jpg")} />
          <Text style={styles.title}>Šešir profesora Koste Vujića</Text>
          <Text style={styles.description}>Ovo je priča o nevjerojatnom profesoru Kosti Vujiću i razredu maturanata Prve muške gimnazije u kome su bili Mihailo Petrović - Mika Alas, Jovan Cvijić, Pavle Popović, Jaša Prodanović...</Text>
          <Text style={styles.grade}>Ocjena: 5</Text>
          <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this movie as Viewed.")} />
    
          <Image style={styles.header} source={require("../assets/bikovic1.jpg")} />
          <Text style={styles.title}>Kad ljubav zakasni</Text>
          <Text style={styles.description}>Radmilo lawyer who spent years in love with Ljiljana. Although the most eligible bachelor in Palanka, his small town. He refused all offers of marriage, and wants to marry Ljiljana, who plans to marry Momchila.</Text>
          <Text style={styles.grade}>Ocjena: 5</Text>
          <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this movie as Viewed.")} />
    
        </ScrollView>
        <Button
            title="Uređivanje postavki"
            onPress={handleSettingsPress}
          />
    
    
    
    </View>
    
    
    
    
    )
    
    }
    
  
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#fff4e7",
    },
    header: {
      width: "50%",
      height: "50%",
      padding: 10,
      align
      : "center"
    },
    title: {
      fontSize: 30,
    },
        title: {
          fontSize: 30,
        },
        description:{
fontFamily: 
"Monospace",
paddingBottom: 20,
paddingTop: 20
        }
      });