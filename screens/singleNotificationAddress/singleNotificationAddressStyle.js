import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const singleNotificationAddressStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0,marginBottom:16 },
    header: {
        backgroundColor: COLORS.white,
        marginLeft:16,marginRight:16,
        zIndex: 99
    },
    slider: {
        height: 300,
        width: '100%',
    },
    lowerBox:{flexDirection:'row',justifyContent:'space-between'},
    lowerBoxText: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.black,marginLeft:16,marginBottom:16,marginTop:16
    },
    lowerText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.black,marginTop:16,marginRight:16
    },
    text:{fontSize:12,fontWeight:'500',color:COLORS.black,lineHeight:20},
    textbox:{paddingHorizontal:16},
    map:{width:'100%'},
    mainContainer:{paddingBottom:46}
})
export default singleNotificationAddressStyle;