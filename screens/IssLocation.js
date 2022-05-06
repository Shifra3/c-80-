import axios from 'axios';
import MapView,  { Marker } from 'react-native-maps';
import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground,StatusBar,SafeAreaView, Platform } from 'react-native';

export default class IssLocationScreen extends Component {

    constructor(props){
super(props)
this.state={location:{},
}

    }
    getIssLocation=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response=>{this.setState({location:response.data})
})    
.catch(e=>{alert(e.message)})
    }
componentDidMount(){
 this.getIssLocation()   
}
    render() {
        if(Object.keys(this.state.location).length===0){
        return(
        <Text ></Text>    
        )    
        }
        else{
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>  </SafeAreaView>   
                <ImageBackground source={require("../assets/iss_bg.jpg")} style={styles.backgroundImage}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>ISS Location</Text>
                    </View>
                    <View style={styles.mapContainer}>
<MapView
style={styles.map}
region={{
 latitude:this.state.location.latitude,
 longitude:this.state.location.longitude,
 latitudeDelta:100,
 longitudeDelta:100   
}}


>
   <Marker
   coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}
   >
       <Image source={require("../assets/iss_icon.png")} style={{height:50,width:50}}></Image>
       </Marker> 
    </MapView>
                    </View>
                    <View style={{flex:0.2,backgroundColor:"white",padding:30,marginTop:-10,borderTopLeftRadius:30,borderTopRightRadius:30}}>
<Text style={{fontSize:15,color:"black",fontWeight:"bold"}}>latitude:{this.state.location.latitude}</Text>
<Text style={{fontSize:15,color:"black",fontWeight:"bold"}}>longitude:{this.state.location.longitude}</Text>
<Text style={{fontSize:15,color:"black",fontWeight:"bold"}}>altitude:{this.state.location.altitude}</Text>
<Text style={{fontSize:15,color:"black",fontWeight:"bold"}}>velocity:{this.state.location.velocity}</Text>
                    </View>
                    </ImageBackground> 
                
            </View>
        )
}
    }
}
const styles=StyleSheet.create({
container:{
    flex: 1,
}   ,
droidSafeArea:{
marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
 },
 backgroundImage:{
flex:1,
resizeMode:"cover"
 },
titleContainer:{
flex:0.1,
justifyContent:"center",
alignItems:"center"    
},
titleText:{
fontSize:30,
fontWeight:"bold",
color:"white"    
},
mapContainer:{
flex:0.6    
},
map:{
width:"100",
height:"100"    
}
})