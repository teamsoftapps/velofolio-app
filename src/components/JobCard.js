// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { act } from 'react';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import colors from '../utils/colors';
// import Tag from "./Tag"
// import DetailItem from "./DetailItem"
// import ProgressBar from "./ProgressBar"
// import * as Progress from 'react-native-progress';
// import TeamComponent from "./TeamComponent"
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const JobCard = () => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.tagsContainer}>
//         <Tag color={colors.white} text={"Wedding"} bgColor={colors.blueAccent}/>
//         <Tag color={colors.black} text={"In Progress"} bgColor={colors.purpleLight}/>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.heading }>Wedding Film Mark &  Jess  </Text>
//       </View>
//       <View style={styles.detailConatiner}>
//         <DetailItem label={"Event Date"}  text={"12 Nov 2025"}/>
//         <DetailItem label={"Event Date"}  text={"12 Nov 2025"}/>

//       </View>
//       <View style={styles.progressbar}>
//       <ProgressBar/>
//       </View>
// <View style={styles.bottomConatiner}>
  
//       <View style={styles.teamContainer}>
// <TeamComponent/>
//       </View>
//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.actionConatiner}>
//           <MaterialIcons name='delete' size={28} color={colors.red}/> 
//         </TouchableOpacity>
//          <TouchableOpacity style={styles.actionConatiner}>
//           <MaterialIcons name='edit' size={28} color={colors.blueAccent}/> 
//         </TouchableOpacity>
//       </View>
// </View>
      
//     </View>
//   );
// };

// export default JobCard;

// const styles = StyleSheet.create({
//     card: {
//     width: responsiveWidth(90),
//     height: responsiveHeight(31),
//     backgroundColor: colors.yellowSecondary,
//     padding:responsiveWidth(4),
//     borderRadius:responsiveWidth(3)
//   },
//   actionConatiner:{
//     width:responsiveWidth(10),
//     height:responsiveHeight(5),
//     justifyContent:"center",
//     alignItems:"center",
//     borderRadius:responsiveWidth(50),
//     backgroundColor:colors.white
//   },
//   bottomConatiner:{
// flexDirection:"row",
// gap:responsiveWidth(2),
// alignContent:"center",
// marginTop:responsiveHeight(2.4),
// justifyContent:"space-between"
//   },
//   actions:{
// flexDirection:"row",
// gap:responsiveWidth(2)
//   },

//   teamContainer:{
//     // marginVertical:responsiveHeight(2),
//     // width:responsiveWidth(32),
//     backgroundColor:colors.white,
//     // height:responsiveHeight(6),
//     padding:responsiveWidth(1),
//     borderRadius:responsiveWidth(30),
//  borderColor:colors.yellowAccent,
//     borderWidth:1,
//   },
//   progressbar:{
//     // padding:responsiveWidth(0.8),
//     // backgroundColor:colors.white,
//     height:responsiveHeight(2.2),
//     marginTop:8,
//         // borderRadius: responsiveWidth(50),

//   }
//   ,
//   progressContainer:{
//     marginVertical:responsiveWidth(4),
//     // flex:1,
//     width:"100%",
//     padding:responsiveWidth(0.4),
//     paddingHorizontal:responsiveWidth(2),
//     borderRadius:responsiveWidth(10),
//     height:responsiveHeight(2),
//     backgroundColor:colors.white
//   },
// detailConatiner:{
// flexDirection:"row",
// gap:responsiveWidth(13)
// },

//   tagsContainer: {
//     flexDirection: 'row',
//     gap: responsiveWidth(2),
//   },
//   textContainer:{
//     marginVertical:responsiveWidth(3)

//   },
//   heading:{
//     fontSize:responsiveWidth(5),
//   }
// });
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../utils/colors';
import Tag from "./Tag";
import DetailItem from "./DetailItem";
import ProgressBar from "./ProgressBar";
import TeamComponent from "./TeamComponent";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Your JobsData

const JobCard = ({job}) => {
  // For simplicity, take the first job
  // const job = JobsData[0];

  return (
    <View style={styles.card}>
      {/* Tags */}
      <View style={styles.tagsContainer}>
        {job.tags.map((tag, index) => (
          <Tag
            key={index}
            color={tag.color}
            bgColor={tag.bgColor}
            text={tag.title}
          />
        ))}
      </View>

      {/* Title */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{job.title}</Text>
      </View>

      {/* Details */}
      <View style={styles.detailConatiner}>
        {job.details.map((detail, index) => (
          <DetailItem
            key={index}
            label={detail.label}
            text={detail.value}
          />
        ))}
      </View>

      {/* Progress Bar (keep as is) */}
      <View style={styles.progressbar}>
        <ProgressBar />
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomConatiner}>
        <View style={styles.teamContainer}>
          <TeamComponent />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionConatiner}>
            <MaterialIcons name='delete' size={28} color={colors.red} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionConatiner}>
            <MaterialIcons name='edit' size={28} color={colors.blueAccent} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(90),
    height: responsiveHeight(31),
    backgroundColor: colors.yellowSecondary,
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    marginBottom:responsiveHeight(2)
  },
  actionConatiner: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(50),
    backgroundColor: colors.white,
  },
  bottomConatiner: {
    flexDirection: "row",
    gap: responsiveWidth(2),
    alignContent: "center",
    marginTop: responsiveHeight(2.4),
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    gap: responsiveWidth(2),
  },
  teamContainer: {
    backgroundColor: colors.white,
    padding: responsiveWidth(1),
    borderRadius: responsiveWidth(30),
    borderColor: colors.yellowAccent,
    borderWidth: 1,
  },
  progressbar: {
    height: responsiveHeight(2.2),
    marginTop: 8,
  },
  progressContainer: {
    marginVertical: responsiveWidth(4),
    width: "100%",
    padding: responsiveWidth(0.4),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(2),
    backgroundColor: colors.white,
  },
  detailConatiner: {
    flexDirection: "row",
    gap: responsiveWidth(13),
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },
  textContainer: {
    marginVertical: responsiveWidth(3),
  },
  heading: {
    fontSize: responsiveWidth(5),
  },
});
