// components/ClientMetaRow.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const ClientMetaRow = ({ phone, itemsCount = 0, totalAmount = 0 }) => {
  return (
    <View style={styles.metaRow}>
     
        <View style={styles.Phone}>
          <Ionicons
            name="call"
            size={responsiveWidth(4)}
            color={colors.black}
          />
          <Text style={styles.metaText}>{phone}</Text>
        </View>
   

      <View style={styles.Phone}>
        <Ionicons
          name="bag-handle-outline"
          size={responsiveWidth(4)}
          color={colors.textSecondary}
        />
        <Text style={styles.metaText}>{itemsCount}</Text>
      </View>

              <View style={styles.Phone}>
          <MaterialIcons

            name="currency-exchange"
            size={responsiveWidth(4)}
            color={colors.black}
          />
          <Text style={styles.metaText}>${totalAmount}</Text>
        </View>
    </View>
  );
};

export default ClientMetaRow;

const styles = StyleSheet.create({
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1.1),
 
   
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },
  Phone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between", 
    borderColor:colors.gray,
    borderWidth:responsiveHeight(0.1),
    padding:responsiveWidth(2),
    borderRadius:responsiveWidth(3),
    paddingHorizontal:responsiveWidth(2.5),
    gap:responsiveWidth(2.3)
    
  },
  metaText: {
    fontSize: responsiveFontSize(1.82),
    color: colors.textPrimary ,
    fontWeight: '400',
  },

});