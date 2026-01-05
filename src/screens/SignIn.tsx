// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
// } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { AuthStackParamList } from '../navigations/types';

// type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

// type FormData = {
//   email: string;
//   password: string;
// };

// const SignInScreen = ({ navigation }: Props) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     console.log('Sign In Data:', data);
//     // TODO: Call your auth API here
//     // On success:
//     // navigation.reset({ index: 0, routes: [{ name: 'AppTabs' }] });
//     Alert.alert('Success', 'Signed in! (Mock)');
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <View style={styles.inner}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <Text style={styles.subtitle}>Sign in to continue</Text>

//         <Controller
//           control={control}
//           name="email"
//           rules={{
//             required: 'Email is required',
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: 'Invalid email address',
//             },
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#999"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//               {errors.email && (
//                 <Text style={styles.error}>{errors.email.message}</Text>
//               )}
//             </View>
//           )}
//         />

//         <Controller
//           control={control}
//           name="password"
//           rules={{
//             required: 'Password is required',
//             minLength: { value: 6, message: 'Min 6 characters' },
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#999"
//                 secureTextEntry
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//               {errors.password && (
//                 <Text style={styles.error}>{errors.password.message}</Text>
//               )}
//             </View>
//           )}
//         />

//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleSubmit(onSubmit)}
//         >
//           <Text style={styles.buttonText}>Sign In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('SignUp')}
//           style={styles.linkContainer}
//         >
//           <Text style={styles.linkText}>
//             Don't have an account? <Text style={styles.link}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
//           <Text style={[styles.linkText, { marginTop: 20 }]}>
//             Back to Welcome
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   inner: {
//     flex: 1,
//     padding: 30,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 40,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 12,
//     fontSize: 16,
//     color: '#333',
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 15,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   linkContainer: {
//     marginTop: 30,
//     alignItems: 'center',
//   },
//   linkText: {
//     color: '#666',
//     fontSize: 15,
//   },
//   link: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
// });

// export default SignInScreen;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigations/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'> & {
  setIsAuthenticated: (value: boolean) => void;
};

type FormData = {
  email: string;
  password: string;
};

const SignInScreen = ({ navigation, setIsAuthenticated }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Sign In Data:', data);
    // For now, no credentials check, just switch auth state
    setIsAuthenticated(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.email && (
                <Text style={styles.error}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Min 6 characters' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.linkContainer}
        >
          <Text style={styles.linkText}>
            Don't have an account? <Text style={styles.link}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, padding: 30, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40 },
  inputContainer: { marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  error: { color: 'red', fontSize: 12, marginTop: 4 },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  linkContainer: { marginTop: 30, alignItems: 'center' },
  linkText: { color: '#666', fontSize: 15 },
  link: { color: '#007AFF', fontWeight: '600' },
});

export default SignInScreen;
