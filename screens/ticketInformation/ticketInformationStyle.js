import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const ticketInformationStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop:0,marginBottom:0 },
    header: {
        backgroundColor: COLORS.white,
        // position: 'absolute',
        // top: 40,
        zIndex: 99,
        width: '100%',
        color: COLORS.black,
        borderWidth:0,
        shadowOpacity: 0,
        borderColor:'#000'
    },
    ticketnobox:{
        flexDirection:'row',marginTop:27,marginBottom:16,marginLeft:16,alignItems:'center'
    },
    firstcol:{fontSize:13,color:COLORS.darkGray,fontWeight:'700'},
    secondcol:{fontSize:10,color:COLORS.darkGray,fontWeight:'600',marginLeft:15},
    headerTitle:{color:COLORS.darkGray,textAlign:'center'},
    
    bg:{width:'100%',marginTop:0,zIndex:999},
    savecard:{
        borderRadius:8,
        width:'100%',
        // position:'absolute',
        resizeMode:'contain'
      
    },
    savecardbox:{
        borderRadius:8,
        width:'100%',
        position:'absolute',
        bottom:-30,
        zIndex:999,
        left:0,
        right:0,
        marginLeft:0,
        marginRight:0,
      
    },
    formbox:{
        marginRight:24,marginLeft:24,marginTop:66
    },
    input:{backgroundColor:'transparent',marginBottom:29},
    box:{marginLeft:24,marginRight:24},
    paymentoption:{width:'100%',resizeMode:'contain',marginRight:8,flex:1.6},
    rdFooter: {
        height: 122,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        width: '102%',
        position: 'absolute',
        bottom: 80,
        left: -5,
        right: -5
    },
  
    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      marginRight:24,
      marginLeft:24
    },
  

})
export default ticketInformationStyle;