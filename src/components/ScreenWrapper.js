// // src/components/ScreenWrapper.js
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import colors from '../utils/colors';

// const ScreenWrapper = ({ children, backgroundColor = colors.white, style }) => {
//   return (
//     <SafeAreaView style={[styles.container, { backgroundColor }]}>
//       <View style={[styles.innerContainer, style]}>{children}</View>
//     </SafeAreaView>
//   );
// };

// export default ScreenWrapper;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   innerContainer: { flex: 1 },
// });

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../utils/colors';

const ScreenWrapper = ({ children, backgroundColor = colors.white, style, edges }) => {
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, { backgroundColor }, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
