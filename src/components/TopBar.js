import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import MediumText from '../components/MediumText';
import RF from "../utilities/RF";

/**
 * @param {String} text
 * @param {Object} navigation
 */

class TopBar extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: RF(35), paddingTop: 10, }}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{ paddingRight: RF(20) }}>
                    <Image source={require('../assets/image/back_final.png')} resizeMode="contain" style={{ width: RF(20), height: RF(20), }} />
                </TouchableOpacity>
                <MediumText customstyle={{ fontSize: RF(16), textAlign: 'center', color: '#2F2F2F', fontFamily: 'BR Firma Bold' }}>{this.props.text}</MediumText>
                {this.props.revert === false ?
                    <View style={{ paddingLeft: RF(20), width: RF(18), height: RF(18) }} /> :
                    <TouchableOpacity style={{ paddingLeft: RF(20) }}>
                    </TouchableOpacity>}
            </View>
        )
    }
}



export default TopBar;