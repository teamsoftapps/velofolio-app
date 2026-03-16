import React from 'react';
import { ScrollView, StyleSheet ,View} from 'react-native';
import ProjectCardsCarousel from './ProjectCards';
import colors from '../utils/colors';

import ReportsHeader from  "../components/ReportsHeader"
import { responsiveWidth } from 'react-native-responsive-dimensions';
const projects = [ 
    { id: '1', title: 'Wedding Film', progress: 100, budget: '$5,000', status: 'Completed', statusColor: colors.greenPrimary, cardColor: '#E8F5E9', },
{ id: '2', title: 'Corporate Video', progress: 75, budget: '$8,500', status: 'In Progress', statusColor: colors.bluePrimary, cardColor: colors.blueSecondary, }, { id: '3', title: 'Music Video', progress: 30, budget: '$3,200', status: 'Pending', statusColor: colors.yellowPrimary, cardColor: colors.yellowSecondary, }, { id: '4', title: 'Documentary', progress: 0, budget: '$12,000', status: 'Not Started', statusColor: colors.textMuted, cardColor: colors.lightGray, },

]
const TopPerfomingProjects = () => {
  return (<View style={styles.mainContainer}>
    <ReportsHeader  title={"Top Perfoming Projects"}/>
    <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
         {projects.map((project) => (
    <ProjectCardsCarousel
      key={project.id}
      project={project}

    />
  ))}

    </ScrollView></View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    // backgroundColor: colors.screenBackground,
    flexDirection:"row",
    gap:responsiveWidth(5)
    // paddingTop: 50,
  },
});

export default TopPerfomingProjects;