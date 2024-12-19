import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#D9D9D9'); 
  

  const product = {
    name: 'Jacket Jeans',
    price: '$45.9',
    image: require('./assets/1.png'),
  };

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['#D9D9D9', '#7B89F4', '#E76A6A', '#D7B377', '#3C594E'];

  const renderBottomTabIcon = (label, iconSource) => (
    <TouchableOpacity style={styles.tabIcon}>
      <Image source={iconSource} style={styles.tabImage} />
      <Text style={styles.tabText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Vector.png')} style={styles.icon} />
        <View style={styles.spacer} />
        <Image source={require('./assets/Ellipse 2.png')} style={styles.icon} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Image source={product.image} style={styles.productImage} />

        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>

          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.optionsContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[
                  styles.optionButton,
                  selectedSize === size && styles.selectedOption,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedSize === size && styles.selectedOptionText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.colorContainer}>
            {colors.map((color) => (
              <TouchableOpacity
                key={color}
                onPress={() => setSelectedColor(color)}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColorBorder,
                ]}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomTab}>
              {renderBottomTabIcon('Home', require('./assets/home.png'))}
              {renderBottomTabIcon('Reorder', require('./assets/reorder.png'))}
              {renderBottomTabIcon('Cart', require('./assets/shopping_cart.png'))}
              {renderBottomTabIcon('Profile', require('./assets/person.png'))}
            </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF2F2',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  spacer: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#606060',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#FF616D',
    borderColor: '#FF616D',
  },
  optionText: {
    color: '#606060',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  colorContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedColorBorder: {
    borderWidth: 2,
    borderColor: '#FF616D',
  },
  addToCartButton: {
    backgroundColor: '#FF616D',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabIcon: {
    alignItems: 'center',
  },
  tabImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  tabText: {
    marginTop: 5,
    fontSize: 12,
    color: '#606060',
  },
});
