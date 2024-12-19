
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './home';  
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen 
//           name="HomeScreen" 
//           component={HomeScreen} 
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './ProductDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetails">
        {/* Product Details Screen */}
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ headerShown: false }} 

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LastScreen from './last'; 

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LastScreen">
//         <Stack.Screen 
//           name="LastScreen" 
//           component={LastScreen} 
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }








