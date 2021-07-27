import React, { Component, Fragment } from "react";
import {
    ScrollView,
    ImageBackground,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
    Image,
    NativeModules,
    KeyboardAvoidingView
} from "react-native";
import TransparentStatusBar from "../components/StatusBar/StatusBar";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";
import MediumText from "../components/MediumText";
import RegularText from "../components/RegularText";
import DocumentPicker from 'react-native-document-picker';
import styles from "../Theme/BaseTheme";
import RNFB from 'rn-fetch-blob';
import TopBar from '../components/TopBar';
import Modal from 'react-native-modal';






class ReportIssue extends Component {

    componentDidMount() {
        TransparentStatusBar("#F4F5F7");
    }

    state = {
        loading: false,
        amount: [],
        filebase64: "",
        avatar: null,
        avatar2: null,
        DateOfLoss: "",
        IncidentDate: "",
        // DateIncidentreported: moment().format("YYYY-MM-DD"),
        ClaimDetails: "",
        fileType: "",
        files: [],
        showModal: false
    };
    navigateTo = (screen, data) => {
        const { files, DateOfLoss, IncidentDate, ClaimDetails } = this.state;
        if (files.length < 1 || !DateOfLoss || !IncidentDate || !ClaimDetails) return Alert.alert('Notice', 'All fields are required', [{ text: "Dismiss", style: "cancel" }])
        const { navigation } = this.props;
        navigation.navigate(screen, data);
    };
    setActive = day => {
        this.setState({ day });
    };

    _setState = (file) => this.setState(prevState => {
        if (prevState.files.filter(fil => fil.fileimage == file.fileimage).length > 0) {
            alert("File exists");
            return;
        } else {
            return { files: [...prevState.files, file] }
        }
    });

    _removeFile = (fileimage) => this.setState(prevState => {
        let newList = prevState.files.filter(fil => fil.fileimage != fileimage);
        return { files: newList }
    })


    _pickFile = async () => {
        let data = "";
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images, "public.item", "public.png", "public.jpeg"]
            });
            if (res.size > 100000) {
                alert("Please, select an image less than 100kb.")
                // this.props.errorHandler(true, "Please, select an image less than 100kb.");
                console.log('res  ==', res)
                return
            }
            RNFB.fs.readStream(res.uri, 'base64', 4095)
                .then((ifStream) => {
                    ifStream.open();
                    ifStream.onData((chunk) => {
                        data += chunk
                    })
                    ifStream.onError((err) => {
                        console.log('oops', err)
                        alert("file loading error");
                    })
                    ifStream.onEnd(() => {
                        let fileimage = { uri: `data:${res.type};base64,` + data };
                        let filebase64 = data;
                        let fileName = `${res.name}`;
                        let fileType = `${res.type}`;
                        let fileBody = {
                            fileimage,
                            filebase64,
                            fileName,
                            fileType,

                        }

                        this._setState(fileBody);
                    })
                })

        } catch (err) {
            console.log("this is the error ", err)

            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }

        }
    }
    _showHideNoticeModal = () => this.setState(prevState => ({ showModal: !prevState.showModal }))
    renderModal = (showModal) => (
        // <View>
        <Modal
            isVisible={showModal}
            onBackButtonPress={() => this._showHideNoticeModal()}
            onBackdropPress={() => this._showHideNoticeModal()}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            hasBackdrop={true}
            animationIn="slideInUp"
            animationInTiming={750}
            coverScreen={true}
            useNativeDriver={true}
            animationOut="slideOutDown"
        >
            <View style={styles.Modalcontainer
            }>
                <MediumText customstyle={{
                    color: '#2F2F2F', fontSize: RFValue(16), marginVertical: 15, textAlign: 'center'
                }}>What issue would you like to resolve </MediumText>
                <View style={styles.Modalitem}>
                    <View style={styles.ModalitemLeft}>
                        <View style={styles.Modalsquare}>
                            <Image source={require('../assets/image/Activity.png')} resizeMode="contain" style={{ width: RFValue(18), height: RFValue(18), }}  >

                            </Image>
                        </View>
                        <RegularText style={styles.ModalitemText}>{"Report suspicious activity"}</RegularText>
                    </View>

                </View>
                <View style={styles.Modalitem}>
                    <View style={styles.ModalitemLeft}>
                        <View style={styles.Modalsquare}>
                            <Image source={require('../assets/image/warning.png')} resizeMode="contain" style={{ width: RFValue(18), height: RFValue(18), }}  >

                            </Image>
                        </View>
                        <RegularText style={styles.ModalitemText}>{"Report a problem"}</RegularText>
                    </View>
                </View>
                <View style={styles.Modalitem}>
                    <View style={styles.ModalitemLeft}>
                        <View style={styles.Modalsquare}>
                            <Image source={require('../assets/image/error.png')} resizeMode="contain" style={{ width: RFValue(18), height: RFValue(18), }}  >

                            </Image>
                        </View>
                        <RegularText style={styles.ModalitemText}>{"Other"}</RegularText>
                    </View>
                </View>
            </View>
        </Modal>
        // </View>
    )

    render() {
        const { files, DateOfLoss, showModal } = this.state;

        return (
            <Fragment>
                <SafeAreaView style={[styles.Reportcontainer]}>
                    <View
                        style={styles.container}
                    >

                        <View
                            style={{
                                paddingVertical: RFValue(20),
                                marginVertical: RFValue(20),
                                paddingHorizontal: RFValue(16),
                            }}>
                            <TopBar text="Report an Issue" navigation={this.props.navigation} />
                        </View>
                        {this.renderModal(showModal)}
                        <KeyboardAvoidingView contentContainerStyle={{ backgroundColor: 'white', flex: 1, }}>
                            <View style={[styles.middlecontent, { marginTop: RFValue(10), paddingHorizontal: 20, flex: 0 }]}>


                                <View style={{ marginTop: RFValue(30) }}>
                                    <RegularText customstyle={{
                                        color: "#2F2F2F", fontSize: 15, marginBottom: 10,
                                    }}>{"What issue are you reporting"}</RegularText>
                                    <View style={{
                                        width: "100%",
                                        backgroundColor: "#F7F7FD",
                                        borderColor: "#DEE2E6",
                                        height: RFValue(63),
                                        marginBottom: 15,
                                        // fontFamily: Fonts.regular,
                                        borderWidth: 1,
                                        fontSize: 13,
                                        paddingHorizontal: 15,
                                        borderRadius: 8,
                                        justifyContent: 'center'
                                    }}>
                                        <TextInput
                                            editable={true}
                                            style={{
                                                alignSelf: 'flex-start',
                                                fontSize: 13,
                                                // fontFamily: Fonts.regular,
                                                color: "#B150C5"
                                            }}
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor={"grey"}
                                            placeholder="Tell us what happend"
                                            value={DateOfLoss}
                                        />
                                    </View>
                                    <View>
                                        <RegularText customstyle={{
                                            color: "#2F2F2F", fontSize: 15, marginBottom: 10,
                                            fontFamily: "BRFirma-ExtraLight",
                                        }}>{"Anything else you would like us to know"}</RegularText>
                                        <TextInput
                                            style={[styles.formControl2, { height: RFValue(150), textAlignVertical: "top", paddingTop: 20, color: "#B150C5" }]}
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor={"grey"}
                                            placeholder="Any Extra information to describe the issue"
                                            multiline={true}
                                            numberOfLines={5}

                                        />
                                    </View>


                                </View>
                            </View>
                            <View style={{ marginBottom: 20 }}></View>


                            <TouchableWithoutFeedback
                                onPress={() => this._pickFile()}
                            >
                                <View style={{ backgroundColor: "#fff", height: 50, flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', }}>
                                    <Image source={require("../assets/image/Group.png")} style={{ width: 12, height: 12 }}></Image>
                                    <MediumText customstyle={{ fontSize: 14, color: '#372AA4', marginLeft: 10, fontFamily: 'BR Firma Regular' }}>Attach Screenshot</MediumText>
                                </View>
                            </TouchableWithoutFeedback>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ marginBottom: 20, flexDirection: 'row', paddingHorizontal: 20, }}
                                style={{
                                    // marginHorizontal: 20,
                                }}>

                                {files.length > 0 ? files.map((fil, ind) => {
                                    return <View key={ind} style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        // borderRadius: 4,
                                        // backgroundColor: "#fff"
                                    }}>
                                        <Image key={ind} style={{ width: RFValue(60), height: RFValue(60), resizeMode: 'contain' }} source={fil.fileimage} />
                                        <TouchableOpacity onPress={() => this._removeFile(fil.fileimage)} style={{
                                            padding: 8
                                        }} >
                                            <Feather name="x" size={20} color={"#372AA4"} />
                                        </TouchableOpacity>
                                    </View>
                                }) : <MediumText customstyle={{ color: "#B150C5", fontSize: 12, padding: 20, textAlign: 'center' }}></MediumText>}
                            </ScrollView>




                            <TouchableOpacity onPress={() => this._showHideNoticeModal()}
                                style={[styles.buttonstyle]}>
                                <MediumText customstyle={[styles.buttonText]}>Submit</MediumText>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>

                    </View>
                </SafeAreaView>

            </Fragment >
        );
    }
}

export default ReportIssue;
