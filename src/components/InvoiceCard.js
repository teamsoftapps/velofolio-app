// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import colors from '../utils/colors';
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';

// const InvoiceCard = ({
//   customerName = 'Sarah Johnson',
//   projectType = 'Wedding Film',
//   dueDate = 'Oct 12, 2025',
//   invoiceId = '20251126-01',
//   amount = '$4999.00',
//   paid = '$2000.00',
//   status = 'PENDING',
//   onPress,
// }) => {
//   // Determine status color
//   const getStatusColor = (statusText) => {
//     const upperStatus = statusText.toUpperCase();
//     switch (upperStatus) {
//       case 'PAID':
//         return colors.greenPrimary;
//       case 'PENDING':
//         return colors.yellowPrimary;
//       case 'OVERDUE':
//         return colors.red;
//       default:
//         return colors.yellowPrimary;
//     }
//   };

//   const statusColor = getStatusColor(status);

//   return (
//     <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <View style={styles.iconContainer}>
//           <Icon name="account-group-outline" size={24} color={colors.textMuted} />
//         </View>
//         <View style={styles.headerContent}>
//           <Text style={styles.customerName}>{customerName}</Text>
//           <View style={styles.projectRow}>
//             <Text style={styles.projectType}>{projectType}</Text>
//             <Text style={styles.dot}>•</Text>
//             <Text style={styles.dueLabel}>Due Date: </Text>
//             <Text style={styles.dueDate}>{dueDate}</Text>
//           </View>
//         </View>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Details Section */}
//       <View style={styles.detailsContainer}>
//         {/* Invoice ID */}
//         <View style={styles.detailRow}>
//           <View style={styles.labelContainer}>
//             <Icon name="file-document-outline" size={16} color={colors.textMuted} />
//             <Text style={styles.label}>Invoice ID</Text>
//           </View>
//           <Text style={styles.value}>{invoiceId}</Text>
//         </View>

//         {/* Amount */}
//         <View style={styles.detailRow}>
//           <View style={styles.labelContainer}>
//             <Icon name="currency-usd" size={16} color={colors.textMuted} />
//             <Text style={styles.label}>Amount</Text>
//           </View>
//           <Text style={[styles.value, styles.amount]}>{amount}</Text>
//         </View>

//         {/* Paid */}
//         <View style={styles.detailRow}>
//           <View style={styles.labelContainer}>
//             <Icon name="arrow-down-circle-outline" size={16} color={colors.textMuted} />
//             <Text style={styles.label}>Paid</Text>
//           </View>
//           <Text style={styles.value}>{paid}</Text>
//         </View>

//         {/* Status */}
//         <View style={styles.detailRow}>
//           <View style={styles.labelContainer}>
//             <Icon name="information-outline" size={16} color={colors.textMuted} />
//             <Text style={styles.label}>Status</Text>
//           </View>
//           <Text style={[styles.status, { color: statusColor }]}>
//             {status.toUpperCase()}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default InvoiceCard;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     padding: responsiveWidth(4),
//     // marginHorizontal: responsiveWidth(4),
//     marginVertical: responsiveHeight(1),
 
//     borderWidth: 1,
//     borderColor: colors.borderExtraLight,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: responsiveHeight(1.5),
//   },
//   iconContainer: {
//     marginRight: responsiveWidth(3),
//     marginTop: responsiveHeight(0.5),
//   },
//   headerContent: {
//     flex: 1,
//   },
//   customerName: {
//     fontSize: responsiveFontSize(2.2),
//     fontWeight: '700',
//     color: colors.textPrimary,
//     marginBottom: responsiveHeight(0.5),
//   },
//   projectRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   projectType: {
//     fontSize: responsiveFontSize(1.6),
//     color: colors.graySecondary,
//   },
//   dot: {
//     fontSize: responsiveFontSize(1.6),
//     color: colors.textMuted,
//     marginHorizontal: responsiveWidth(1.5),
//   },
//   dueLabel: {
//     fontSize: responsiveFontSize(1.6),
//     color: colors.graySecondary,
//   },
//   dueDate: {
//     fontSize: responsiveFontSize(1.6),
//     color: colors.red,
//     fontWeight: '500',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: colors.borderLight,
//     marginVertical: responsiveHeight(1.5),
//   },
//   detailsContainer: {
//     gap: responsiveHeight(1.2),
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: responsiveWidth(2),
//   },
//   label: {
//     fontSize: responsiveFontSize(1.7),
//     color: colors.graySecondary,
//   },
//   value: {
//     fontSize: responsiveFontSize(1.7),
//     color: colors.textPrimary,
//     fontWeight: '500',
//   },
//   amount: {
//     fontWeight: '700',
//   },
//   status: {
//     fontSize: responsiveFontSize(1.7),
//     fontWeight: '700',
//     letterSpacing: 0.5,
//   },
// });
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const InvoiceCard = ({
  customerName = 'Sarah Johnson',
  projectType = 'Wedding Film',
  dueDate = 'Oct 12, 2025',
  invoiceId = '20251126-01',
  amount = '$4999.00',
  paid = '$2000.00',
  status = 'PENDING',
  onPress,
}) => {

  // Determine status color
  const getStatusColor = (statusText) => {
    const upperStatus = statusText.toUpperCase();

    switch (upperStatus) {
      case 'PAID':
        return colors.greenPrimary;
      case 'PENDING':
        return colors.yellowPrimary;
      case 'OVERDUE':
        return colors.red;
      default:
        return colors.yellowPrimary;
    }
  };

  const statusColor = getStatusColor(status);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon
            name="account-group-outline"
            size={24}
            color={colors.textMuted}
          />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.customerName}>{customerName}</Text>

          <View style={styles.projectRow}>
            <Text style={styles.projectType}>{projectType}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dueLabel}>Due Date: </Text>
            <Text style={styles.dueDate}>{dueDate}</Text>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.detailsContainer}>

        {/* Invoice ID */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <Icon name="file-document-outline" size={16} color={colors.textMuted} />
            <Text style={styles.label}>Invoice ID</Text>
          </View>
          <Text style={styles.value}>{invoiceId}</Text>
        </View>

        {/* Amount */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <Icon name="currency-usd" size={16} color={colors.textMuted} />
            <Text style={styles.label}>Amount</Text>
          </View>
          <Text style={[styles.value, styles.amount]}>{amount}</Text>
        </View>

        {/* Paid */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <Icon name="arrow-down-circle-outline" size={16} color={colors.textMuted} />
            <Text style={styles.label}>Paid</Text>
          </View>
          <Text style={styles.value}>{paid}</Text>
        </View>

        {/* Status */}
        <View style={styles.detailRow}>
          <View style={styles.labelContainer}>
            <Icon name="information-outline" size={16} color={colors.textMuted} />
            <Text style={styles.label}>Status</Text>
          </View>

          {/* 🔥 Status Badge */}
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusColor + '20' }, // light background
            ]}
          >
            <Text
              style={[
                styles.statusText,
                { color: statusColor },
              ]}
            >
              {status.toUpperCase()}
            </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default InvoiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(4),
    marginVertical: responsiveHeight(1),
    borderWidth: 1,
    borderColor: colors.borderExtraLight,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(1.5),
  },

  iconContainer: {
    marginRight: responsiveWidth(3),
    marginTop: responsiveHeight(0.5),
  },

  headerContent: {
    flex: 1,
  },

  customerName: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: responsiveHeight(0.5),
  },

  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  projectType: {
    fontSize: responsiveFontSize(1.6),
    color: colors.graySecondary,
  },

  dot: {
    fontSize: responsiveFontSize(1.6),
    color: colors.textMuted,
    marginHorizontal: responsiveWidth(1.5),
  },

  dueLabel: {
    fontSize: responsiveFontSize(1.6),
    color: colors.graySecondary,
  },

  dueDate: {
    fontSize: responsiveFontSize(1.6),
    color: colors.red,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: responsiveHeight(1.5),
  },

  detailsContainer: {
    gap: responsiveHeight(1.2),
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(2),
  },

  label: {
    fontSize: responsiveFontSize(1.7),
    color: colors.graySecondary,
  },

  value: {
    fontSize: responsiveFontSize(1.7),
    color: colors.textPrimary,
    fontWeight: '500',
  },

  amount: {
    fontWeight: '700',
  },

  /* 🔥 NEW STATUS BADGE STYLES */
  statusBadge: {
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: responsiveWidth(5),
  },

  statusText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});