import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import ProductsOverviewScreen, {
  screenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, {
  screenOptionsDetail,
} from "../screens/shop/ProductDetailScreen";
import CartScreen, { screenOptionsCart } from "../screens/shop/CartScreen";
import OrdersScreen, {
  screenOptionsOrders,
} from "../screens/shop/OrdersScreen";
import UserProductsScreen, {
  screenOptionsUser,
} from "../screens/user/UserProductsScreen";
import EditProductScreen, {
  screenOptionsEdit,
} from "../screens/user/EditProductScreen";
import AuthScreen from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={screenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={screenOptionsDetail}
      />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={screenOptionsCart}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={screenOptionsOrders}
      />
    </OrdersStackNavigator.Navigator>
  );
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator>
      <AdminStackNavigator.screen
        name="UserProducts"
        component={UserProductsScreen}
        options={screenOptionsUser}
      />
      <AdminStackNavigator.screen
        name="EditProducts"
        component={EditProductScreen}
        options={screenOptionsEdit}
      />
    </AdminStackNavigator.Navigator>
  );
};

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

const ShopDrawerNavigator = createDrawerNavigator();

const ShopNavigator = () => {
  const dispatch = useDispatch();

  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                  // props.navigation.navigate('Auth');
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary
//     },
//     contentComponent: props => {
//       const dispatch = useDispatch();
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
//             <DrawerItems {...props} />
//             <Button
//               title="Logout"
//               color={Colors.primary}
//               onPress={() => {
//                 dispatch(authActions.logout());
//                 // props.navigation.navigate('Auth');
//               }}
//             />
//           </SafeAreaView>
//         </View>
//       );
//     }
//   }
// );

// const AuthNavigator = createStackNavigator(
//   {
//     Auth: AuthScreen
//   },
//   {
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator
// });

// export default createAppContainer(MainNavigator);
