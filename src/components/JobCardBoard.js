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
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../utils/colors';
import bannerImage from '../assets/cpl.png';
import avatar2 from '../assets/Ellipse63.png';
import avatar3 from '../assets/Ellipse63.png';

const JobCard = ({ job }) => {
  const mainTag = job?.tags?.[0] || {
    title: 'Sarah Johnson',
    bgColor: colors.blueSecondary,
    color: colors.blueAccent,
  };

  const dateTag = job?.dateTag || { title: '12 Feb 2026', bgColor: colors.yellowSecondary, color: colors.yellowAccent };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => console.log("Open job:", job?.title)}
    >
      {/* Top Overlay: Title + Tags */}
      <View style={styles.topOverlay}>
        <Text style={styles.title} numberOfLines={2}>
          {job?.title || 'Wedding Film – Mark & Jess'}
        </Text>

        <View style={styles.tagsRow}>
          <View style={[styles.tagPill, { backgroundColor: mainTag.bgColor }]}>
            <Text style={[styles.tagText, { color: mainTag.color }]}>{mainTag.title}</Text>
          </View>
          <View style={[styles.tagPill, { backgroundColor: dateTag.bgColor }]}>
            <Text style={[styles.tagText, { color: dateTag.color }]}>{dateTag.title}</Text>
          </View>
        </View>
      </View>

      {/* Banner Image + Description */}
      <View style={styles.middleOverlay}>
        <Text style={styles.bannerText}>
          Footage received from the videographer. Editor
        </Text>
        <Image
          source={bannerImage}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Row: Avatars + Stats */}
      <View style={styles.bottomOverlay}>
        <View style={styles.bottomRow}>
          <View style={styles.avatarsContainer}>
            <Image source={avatar2} style={styles.avatar} />
            <Image source={avatar3} style={[styles.avatar, { marginLeft: -12 }]} />
          </View>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Entypo name="attachment" size={responsiveWidth(6)} color={colors.grayDark} />
              <Text style={styles.statText}>4</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="chatbubble-ellipses-outline" size={responsiveWidth(6)} color={colors.grayDark} />
              <Text style={styles.statText}>2</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(94),
    height: responsiveHeight(40),
    marginBottom: responsiveHeight(2.2),
    borderRadius: responsiveWidth(5),
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  topOverlay: {
    padding: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
  middleOverlay: {
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(1),
  },
  bottomOverlay: {
    paddingHorizontal: responsiveWidth(4),
    paddingBottom: responsiveHeight(1),
    paddingTop: responsiveHeight(1),
  },
  title: {
    color: colors.black,
    fontSize: responsiveWidth(5.1),
    fontWeight: '700',
    marginBottom: responsiveHeight(1.2),
    lineHeight: responsiveHeight(3.2),
  },
  tagsRow: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  tagPill: {
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.6),
    borderRadius: responsiveWidth(6),
  },
  tagText: {
    fontSize: responsiveWidth(3.4),
    fontWeight: '600',
  },
  bannerText: {
    color: colors.grayDark,
    marginBottom: responsiveHeight(1),
  },
  banner: {
    borderRadius: responsiveWidth(4),
    width: '100%',
    height: responsiveHeight(16),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarsContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    borderWidth: 2,
    borderColor: colors.grayDark,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(1.2),
  },
  statText: {
    color: colors.grayDark,
    fontSize: responsiveWidth(4),
    fontWeight: '500',
  },
});
