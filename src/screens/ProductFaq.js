import React, { Component } from 'react'
import { View, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import Styles from '../Theme/BaseTheme';
import { RFValue } from 'react-native-responsive-fontsize';
import RegularText from '../components/RegularText';
// import { Colors } from '../Theme/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import { Faq } from '../utilities/defaultData';
import TopBar from '../components/TopBar';
import MediumText from '../components/MediumText';
import TransparentStatusBar from "../components/StatusBar/StatusBar";
import Tab from '../components/Tabs'



class ProductFaq extends Component {
    componentDidMount() {
        TransparentStatusBar("#F4F5F7");
    }

    state = {
        activeSections: []
    }
    _renderSectionTitle = section => {
        return (
            <View >
                {/* <RegularText customstyle={{ color: '#0A2240' }}>{section.title}</RegularText> */}
            </View>
        );
    }
    _renderHeader = (section, index) => {
        let color = index % 2;
        let backColor = color == 0 ? "#FFFFFF" : '#FFFFFF'
        return (
            <View style={{
                marginVertical: RFValue(4), backgroundColor: backColor, paddingVertical: RFValue(10), paddingHorizontal: RFValue(16),
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <RegularText customstyle={{
                    color: '#372AA4', fontSize: RFValue(15), flex: 1, marginRight: RFValue(8), lineHeight: RFValue(20), fontFamily: "BR Firma Bold",
                }}>{section.title}</RegularText>
                <RegularText customstyle={{ color: '#000000', fontSize: RFValue(26) }}>+</RegularText>
            </View>
        );
    }
    _renderContent = section => {
        return (
            <View style={{ marginVertical: RFValue(4), paddingHorizontal: RFValue(16) }}>
                <RegularText customstyle={{ color: '#0A2240', fontSize: RFValue(14), lineHeight: RFValue(20), marginLeft: RFValue(15) }}>{section.content}</RegularText>
            </View>
        );
    }
    _updateSections = activeSections => {
        this.setState({ activeSections });
    }
    render() {
        return (
            <View style={Styles.background2}>

                <View style={{ marginBottom: RFValue(20), paddingHorizontal: RFValue(18) }}>
                    <TopBar text="FAQ" navigation={this.props.navigation} />
                </View>
                <ImageBackground source={require('../assets/image/backgroundIcons.png')} resizeMode="contain" style={{ ...Styles.productHeader, }}>
                    <Image source={require('../assets/image/dashboard2.png')} resizeMode="contain" style={{ width: RFValue(24), height: RFValue(24), }} />
                    <MediumText customstyle={{ color: '#FFFFFF', fontSize: RFValue(15), lineHeight: RFValue(30), marginLeft: RFValue(15), fontFamily: "BR Firma Bold", }}>Product</MediumText>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#F4F5F7', borderTopStartRadius: RFValue(15), borderTopEndRadius: RFValue(15), width: '100%' }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: RFValue(15), paddingHorizontal: RFValue(10) }}>
                        <Accordion
                            activeSections={this.state.activeSections}
                            sections={Faq}
                            renderSectionTitle={this._renderSectionTitle}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />
                        <View style={Styles.infoContainer}>
                            <View style={Styles.itemLeft}>
                                <RegularText style={Styles.infoText}>{"Was this Information helpful?"}
                                </RegularText>
                                <Image source={require('../assets/image/add.png')} resizeMode="contain" style={{ width: RFValue(25), height: RFValue(25), }}>

                                </Image>
                            </View>
                            <View style={Styles.InfoButton}>
                                <Tab title='Yes' />
                                <Tab title='No' />
                            </View>
                        </View>
                        <View style={{
                            marginVertical: RFValue(4),
                            paddingVertical: RFValue(10),
                            paddingHorizontal: RFValue(16)
                        }}>
                            <MediumText customstyle={{ color: '#2F2F2F', fontSize: RFValue(15), lineHeight: RFValue(16), fontWeight: '700' }}>Other Categories</MediumText>
                        </View>
                        <View style={Styles.item}>
                            <View style={Styles.itemLeft}>
                                <View style={Styles.square}>
                                    <Image source={require('../assets/image/general.png')} resizeMode="contain" style={{ width: RFValue(30), height: RFValue(30), }}  >

                                    </Image>
                                </View>
                                <RegularText style={Styles.itemText}>{"General"}</RegularText>
                            </View>
                            <View style={Styles.circular}>
                                <Image source={require('../assets/image/rightArrow.png')} resizeMode="contain" style={{ width: RFValue(12), height: RFValue(12) }}  >

                                </Image>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SafetySecurityFaq")} style={Styles.item}>
                            <View style={Styles.itemLeft}>
                                <View style={Styles.square}>
                                    <Image source={require('../assets/image/Vector.png')} resizeMode="contain" style={{ width: RFValue(30), height: RFValue(30), }}>

                                    </Image>
                                </View>
                                <RegularText style={Styles.itemText}>{"Safety and Security"}</RegularText>
                            </View>
                            <View style={Styles.circular}>
                                <Image source={require('../assets/image/rightArrow.png')} resizeMode="contain" style={{ width: RFValue(12), height: RFValue(12) }}  >

                                </Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("FeeCharges")} style={Styles.item}>
                            <View style={Styles.itemLeft}>
                                <View style={Styles.square}>
                                    <Image source={require('../assets/image/Currency.png')} resizeMode="contain" style={{ width: RFValue(30), height: RFValue(30), }}  >

                                    </Image>
                                </View>
                                <RegularText style={Styles.itemText}>{"Fees and Charges "}</RegularText>
                            </View>
                            <View style={Styles.circular}>
                                <Image source={require('../assets/image/rightArrow.png')} resizeMode="contain" style={{ width: RFValue(12), height: RFValue(12) }}  >

                                </Image>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
        )
    }
}



export default ProductFaq;
