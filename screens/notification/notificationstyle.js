import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const notificationstyle= StyleSheet.create({
    mainContainer: { margin: 0, padding: 0,marginVertical:16 },
    header: {
        backgroundColor:COLORS.white,marginRight:16,borderBottomWidth:0,
        zIndex: 99
    },
    headerTitle:{fontSize:13,fontWeight:'700',color:COLORS.darkGray},
    searchbox:{paddingRight:16,paddingLeft:16},
    searchinput:{borderWidth:1,borderColor:'#DAE3E7',height:56,borderRadius:8,paddingLeft:8},

    searchItem:{borderWidth:1,borderColor:'#DAE3E7',backgroundColor:'#fff'},
    searchicon:{position:'absolute',right:16,top:5},
    lowerBoxText: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.black,marginLeft:16,marginBottom:16
    },
    lowerText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.black,
    },
    textrow:{flexDirection:'row',flexWrap:'wrap',width:'100%',flex:1,justifyContent:'flex-start'},
    textcol:{width:'90%',textAlign:'left'},
    nametext:{fontSize:13,fontWeight:'400',marginLeft:10,color:COLORS.black,marginRight:10},
    Banndtext:{fontSize:13,fontWeight:'700',marginLeft:10,color:COLORS.red},
    tickettext:{fontSize:12,fontWeight:'500',marginLeft:10,color:COLORS.black,marginTop:6},
    list:{marginLeft:16,marginRight:16,borderRadius:8,borderBottomWidth:1,marginBottom:0,marginTop:0,shadowOpacity:0,paddingLeft:0,paddingRight:0},
    listitem:{borderRadius:0},
    check:{color:COLORS.primary},
})
export default notificationstyle;