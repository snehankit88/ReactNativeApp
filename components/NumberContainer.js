import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import colors from "../constants/colors";

const NumberContainer = props =>{
    return(
        <View style={styles.containerForNumber}>
            <Text style={styles.numberDesign}>{props.children}</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    containerForNumber:{
        borderWidth:2,
        borderColor:colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'

    },
    numberDesign:{
        color:colors.accent,
        fontSize:22
    }

});


export default NumberContainer;