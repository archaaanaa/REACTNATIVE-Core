import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

const MyCart = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <Image source={require('./assets/Vector.png')} style={styles.icon} />
      </View>

      {/* Cart Item */}
      <View style={styles.cartItem}>
        <Image
          source={{ uri: "https://example.com/jacket-jeans.jpg" }}
          style={styles.productImage}
        />
        <View style={styles.details}>
          <Text style={styles.productName}>Jacket Jeans</Text>
          <Text style={styles.productPrice}>$37.9</Text>
          <View style={styles.sizeSelector}>
            <View style={styles.colorCircle} />
            <Text style={styles.sizeText}>L</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FCE4EC", 
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#757575",
    marginVertical: 4,
  },
  sizeSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#3949AB", 
    marginRight: 8,
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MyCart;
