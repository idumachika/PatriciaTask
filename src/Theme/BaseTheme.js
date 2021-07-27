import { StyleSheet, Platform } from "react-native";
// import { Colors } from "../Theme/Colors";
import RF from "../utilities/RF";


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "flex-start"
    },
    Modalcontainer: {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: RF(20),
        borderTopRightRadius: RF(20),
        backgroundColor: '#FFF',
        paddingTop: RF(20)
    },

    background2: {
        flex: 1,
        // backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "ios" ? RF(50) : RF(20)
    },
    Reportcontainer: {
        flex: 1,
        color: "#fff",
        backgroundColor: '#F4F5F7'
    },
    middlecontent: {
        flex: 1,
        marginTop: RF(20),
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
    },
    buttonstyle: {
        marginTop: RF(30),
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#372AA4",
        width: "60%",
        alignSelf: 'center',
        height: RF(50),
        borderRadius: 10

    },
    buttonText: {
        fontSize: RF(15),
        fontFamily: 'BR Firma Regular',
        color: "#FFFFFF",
        textAlign: "center"
    },
    formControl2: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F7FD",
        textAlign: "left",
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#F7F7FD",
        height: RF(63),
        marginBottom: 15,
        // fontFamily: Fonts.regular,
        borderColor: '#DEE2E6',
        fontSize: 13,
        color: "#000"
    },
    uploadtext: {
        color: "#000",
        textAlign: "center",
        fontSize: RF(13),
        lineHeight: 17,
        marginTop: RF(30),
        marginBottom: RF(10)
    },
    generalHeader: {
        height: RF(58),
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#372AA4",
        paddingHorizontal: RF(25)
    },

    safetyHeader: {
        height: RF(58),
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#28AFB0',
        paddingHorizontal: RF(25)
    },
    productHeader: {
        height: RF(58),
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: RF(25),
        backgroundColor: '#8E83F1'
    },
    feesChargesHeader: {
        height: RF(58),
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#EF7970',
        paddingHorizontal: RF(25),
    },

    infoContainer: {
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 5,
        marginVertical: RF(15),
        paddingVertical: RF(16),
        paddingHorizontal: RF(16)

    },
    Modalitem: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomColor: '#DEE2E6',
        borderBottomWidth: 1,
    },
    ModalitemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    ModalitemText: {
        color: '#2F2F2F',
        fontSize: 15,
        marginLeft: 20,
        fontFamily: "BR Firma Regular"
    },

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    Modalsquare: {
        // width: 36,
        // height: 36,
        // marginRight: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    square: {
        width: 36,
        height: 36,
        marginRight: 15,
    },
    itemText: {
        color: '#2F2F2F',
        fontSize: 15,
        fontFamily: "BR Firma Regular"
    },
    infoText: {
        color: '#2F2F2F',
        fontSize: 15,
        lineHeight: 16,
        marginLeft: 10,
        fontFamily: 'BR Firma Bold'
    },
    InfoButton: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        // padding: 10,

    },
    circular: {
        width: 12,
        height: 12,
        marginRight: 8,

    },

});

export default Styles;