// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home';
// import JobsScreen from '../screens/Jobs';
// import ClientsScreen from '../screens/Clients';
// import CalendarScreen from '../screens/Calendar';
// import Teams from '../screens/Teams';
// import CustomTabBar from '../components/CustomTabBar';
// import ActonModal from '../components/ActionModal';
// import VelofolioSidebar from '../components/Sidebar';

// const Tab = createBottomTabNavigator();

// const AppTabsNavigator = () => {
//   const [modal, setModal] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <>
//       <ActonModal setModal={setModal} modal={modal} />
//       <VelofolioSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
//       <Tab.Navigator
//         tabBar={props => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
//         screenOptions={{ headerShown: false }}
//       >
//         <Tab.Screen name="Home">
//           {props => <HomeScreen {...props} setSidebarVisible={setSidebarVisible} />}
//         </Tab.Screen>
//         <Tab.Screen name="Jobs" component={JobsScreen} />
//         <Tab.Screen name="Teams" component={Teams} />
//         <Tab.Screen name="Clients" component={ClientsScreen} />
//         <Tab.Screen name="Calendar" component={CalendarScreen} />
//       </Tab.Navigator>
//     </>
//   );
// };

// export default AppTabsNavigator;
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ClientsScreen from '../screens/Clients';
import CalendarScreen from '../screens/Calendar';
import Teams from '../screens/Teams';
import CustomTabBar from '../components/CustomTabBar';
import ActonModal from '../components/ActionModal';
import VelofolioSidebar from '../components/Sidebar';

const Tab = createBottomTabNavigator();

const AppTabsNavigator = () => {
  const [modal, setModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <ActonModal modal={modal} setModal={setModal} />
      <VelofolioSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} setModal={setModal} modal={modal} />}
      >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} setSidebarVisible={setSidebarVisible} />}
        </Tab.Screen>
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Teams" component={Teams} />
        <Tab.Screen name="Clients" component={ClientsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </>
  );
};

export default AppTabsNavigator;