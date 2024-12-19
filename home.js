import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Trending Now');

  const products = [
    { id: '1', name: 'Jacket Jeans', price: '$45.9', image: require('./assets/1.png') },
    { id: '2', name: 'Acrylic Sweater', price: '$37.9', image: require('./assets/2.png') },
    { id: '3', name: 'Leather Jacket', price: '$59.9', image: require('./assets/3.png') },
    { id: '4', name: 'Office Blazer', price: '$39.9', image: require('./assets/4.png') },
    { id: '5', name: 'Western Dress', price: '$39.9', image: require('./assets/5.jpg') },
    { id: '6', name: 'Aurelia', price: '$39.9', image: require('./assets/6.jpg') },
    { id: '7', name: 'W', price: '$39.9', image: require('./assets/7.jpg') },
  ];

  const categories = ['Trending Now', 'All', 'New', 'Men', 'Women', 'Kids'];

  const renderBottomTabIcon = (label, iconSource) => (
    <TouchableOpacity style={styles.tabIcon}>
      <Image source={iconSource} style={styles.tabImage} />
      <Text style={styles.tabText}>{label}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('./assets/Vector.png')} style={styles.icon} />
          <View style={styles.spacer} />
          <Image source={require('./assets/Ellipse 2.png')} style={styles.icon} />
        </View>

        <Text style={styles.title}>Match Your Style</Text>

        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>

        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleCategoryPress(item)}
              style={[
                styles.categoryItem,
                selectedCategory === item && styles.selectedCategory,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.productList}>
          {products.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart-o" size={18} color="gray" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF2F2',
  },
  container: {
    flex: 1,
    backgroundColor: '#FDF2F2',
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
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E96E6E',
    marginVertical: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
  },
  categoryList: {
    paddingHorizontal: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  selectedCategory: {
    backgroundColor: '#FF616D',
  },
  categoryText: {
    fontSize: 14,
    color: '#606060',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    width: '45%',
    margin: 5,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
    height: 320,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#9c9c9c',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    elevation: 2,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabIcon: {
    alignItems: 'center',
  },
  tabImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 12,
    color: '#606060',
  },
});

export default HomeScreen;
