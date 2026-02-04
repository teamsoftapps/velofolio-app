import { useState } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform, // optional: for platform-specific tweaks
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
 import Fontisto
 from 'react-native-vector-icons/Fontisto';

const { height } = Dimensions.get('window');

export default function YourComponent({setModal,modal}) {
 

  return (
    <>
 

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >

        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={() => setModal(false)}
        >
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"                     
            blurAmount={3}                        // 8–16 recommended for good perf on Android
            reducedTransparencyFallbackColor="black" // iOS fallback when transparency reduced
          />
        </TouchableOpacity>

      
        <View style={styles.modalContainer}>
         

          <TouchableOpacity style={styles.option}>
            <Fontisto name='plus-a' size={responsiveWidth(4)}/>
            <Text style={styles.optionText}>Add New Job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Fontisto name='plus-a' size={responsiveWidth(4)}/>
            <Text style={styles.optionText}>Add New Client</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Fontisto name='plus-a' size={responsiveWidth(4)}/>
            <Text style={styles.optionText}>Add New Member</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: responsiveHeight(13),
    left: responsiveWidth(18),
    right: responsiveWidth(15),
    backgroundColor: '#fff',
    borderRadius:responsiveWidth(4),
    padding:responsiveWidth(4),
    width:responsiveWidth(60),
    textAlign:"center"
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom:responsiveHeight(2),
  },
  option: {
    paddingVertical: responsiveHeight(2),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:responsiveWidth(2)
  },
  optionText:{
textAlign:"center",
fontSize:responsiveFontSize(2.2)
  },

});