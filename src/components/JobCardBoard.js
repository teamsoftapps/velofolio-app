// import React from 'react';
// import {
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';

// import colors from '../utils/colors'; // adjust path if needed/
// import bannerImage from '../assets/cpl.png';
// import avatar2 from '../assets/Ellipse63.png';
// import avatar3 from '../assets/Ellipse63.png';
// const JobCard = ({ job }) => {
//   // For demo – in real app you'd pass or fetch the real image uri
//   const placeholderImage = 'https://images.unsplash.com/photo-1519741497674-281482c3a157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  
//   const mainTag = job?.tags?.[0] || { title: 'Sarah Johnson', bgColor: colors.blueSecondary, color: colors.blueAccent };

//   return (
//     <TouchableOpacity 
//       activeOpacity={0.9}
//       style={styles?.card}
//       onPress={() => {
//         console.log("Open job:", job?.title);
//       }}
//     >
//         <View style={styles.bottomOverlay}>
//           <Text style={styles.title} numberOfLines={2}>
//             {job?.title || 'Wedding Film – Mark & Jess'}
//           </Text>
//           {/* Client name + date */}

//           {/* Main title */}

//             <View style={[styles.tagPill, { backgroundColor: mainTag.bgColor }]}>
//           <Text style={[styles.tagText, { color: mainTag.color }]}>
//             {mainTag?.title}
//           </Text>
//         </View>
//           </View>

//         <View style={styles.bottomOverlay2}>
//             <View>
//                 <Text style={styles.bannerText}>Footage received from the videographer. Editor</Text>
// <Image
//   source={bannerImage}
//   style={styles.banner}
//   resizeMode="cover"
// />
// </View>
     


//           <View style={styles.bottomRow}>
//             <View style={styles.avatarsContainer}>
//               {/* You can map real assignee avatars here */}
//               <Image
//                 source={avatar2}
//                 style={styles.avatar}
//               />
//               <Image
//                source={avatar3}
//                 style={[styles.avatar, { marginLeft: -12 }]}
//               />
//             </View>

//             <View style={styles.stats}>
//               <View style={styles.statItem}>
//                 <Entypo name="attachment" size={responsiveWidth(6)} color={colors.grayDark} />
//                 <Text style={styles.statText}>4</Text>
//               </View>
//               <View style={styles.statItem}>
//                 <Ionicons name="chatbubble-ellipses-outline" size={responsiveWidth(6)} color={colors.grayDark} />
//                 <Text style={styles.statText}>2</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//     </TouchableOpacity>
//   );
// };

// export default JobCard;

// const styles = StyleSheet.create({
//   card: {
//     width: responsiveWidth(94),
//     height: responsiveHeight(40),
//     marginBottom: responsiveHeight(2.2),
//     borderRadius: responsiveWidth(5),
//     overflow: 'hidden',
//     backgroundColor:colors.white,
    

//   },
//   bannerText:{
// color:colors.grayDark
//   },
// banner:{
// borderRadius:responsiveWidth(4),
// width:"100%",
// height:responsiveHeight(16),
// marginVertical:responsiveHeight(2)
// },
//   tagPill: {
   
//     width:responsiveWidth(30),
//     paddingHorizontal: responsiveWidth(3),
//     paddingVertical: responsiveHeight(0.6),
//     borderRadius: responsiveWidth(6),
//   },
//   tagText: {
//     fontSize: responsiveWidth(3.4),
//     fontWeight: '600',
//   },
//   bottomOverlay: {
//     padding: responsiveWidth(4),
//     paddingTop: responsiveHeight(2), 
   
//   },
//   bottomOverlay2: {
//     padding: responsiveWidth(4),
//     paddingTop: responsiveHeight(0.2), 
   
//   },
//   clientRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: responsiveHeight(0.6),
//   },
//   clientName: {
//     color: colors.grayDark,
//     fontSize: responsiveWidth(3.2),
//     fontWeight: '600',
//     letterSpacing: 0.4,
//   },
//   date: {
//     color: colors.black,
//     fontSize: responsiveWidth(3),
//   },
//   title: {
//     color: colors.black,
//     fontSize: responsiveWidth(5.1),
//     fontWeight: '700',
//     marginBottom: responsiveHeight(1.4),
//     lineHeight: responsiveHeight(3.2),
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   avatarsContainer: {
//     flexDirection: 'row',
//   },
//   avatar: {
//     width: responsiveWidth(8),
//     height: responsiveWidth(8),
//     borderRadius: responsiveWidth(4),
//     borderWidth: 2,
//     borderColor: colors.grayDark,
//   },
//   stats: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: responsiveWidth(4),
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: responsiveWidth(1.2),
//   },
//   statText: {
//     color: colors.grayDark,
//     fontSize: responsiveWidth(4),
//     fontWeight: '500',
//   },
// });
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../utils/colors';
import bannerImage from '../assets/cpl.png';
import avatar2 from '../assets/Ellipse63.png';
import avatar3 from '../assets/Ellipse63.png';

const JobCard = ({ job, onPress }) => {
  const mainTag = job?.tags?.[0] || {
    title: 'SARAH JOHNSON',
    bgColor: colors.blueSecondary,
    color: colors.blueAccent,
  };

  const dateTag = job?.dateTag || { title: 'OCT 7, 2025', bgColor: colors.yellowSecondary, color: colors.yellowAccent };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={onPress}
    >
      {/* Title Section */}
      <View style={styles.contentPadding}>
        <Text style={styles.title} numberOfLines={2}>
          {job?.title || 'Wedding Film – Mark & Jess'}
        </Text>

        {/* Tags Section */}
        <View style={styles.tagsRow}>
          <View style={[styles.tagPill, { backgroundColor: mainTag.bgColor || '#E2F5FF' }]}>
            <Text style={[styles.tagText, { color: mainTag.color || colors.blueAccent }]}>{mainTag.title}</Text>
          </View>
          <View style={[styles.tagPill, { backgroundColor: dateTag.bgColor || '#FFF2F2' }]}>
            <Text style={[styles.tagText, { color: dateTag.color || colors.red }]}>{dateTag.title}</Text>
          </View>
        </View>

        {/* Description Snippet */}
        <Text style={styles.description} numberOfLines={2}>
          Footage received from the videographer. Editor to create a 3-minute highlight...
        </Text>
      </View>

      {/* Image Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={bannerImage}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

      {/* Footer: Avatars + Stats */}
      <View style={[styles.contentPadding, styles.bottomRow]}>
        <View style={styles.avatarsContainer}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=a' }} 
            style={styles.avatar} 
          />
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=b' }} 
            style={[styles.avatar, { marginLeft: -12 }]} 
          />
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Entypo name="attachment" size={16} color={colors.grayDark} />
            <Text style={styles.statText}>2</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="chatbubble-ellipses-outline" size={16} color={colors.grayDark} />
            <Text style={styles.statText}>4</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(82),
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: responsiveHeight(2),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: responsiveWidth(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contentPadding: {
    paddingHorizontal: responsiveWidth(4),
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  tagPill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: colors.grayDark,
    lineHeight: 18,
    marginBottom: 12,
  },
  bannerContainer: {
    width: '100%',
    paddingHorizontal: responsiveWidth(4),
    marginBottom: 12,
  },
  banner: {
    width: '100%',
    height: responsiveHeight(16),
    borderRadius: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.white,
  },
  stats: {
    flexDirection: 'row',
    gap: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: colors.grayDark,
    fontWeight: '500',
  },
});
