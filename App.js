import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for food"
      />
      <View style={styles.profileIcon} />
    </View>
    <View style={styles.dailyMealsSection}>
      <Text style={styles.sectionTitle}>Daily Meals</Text>
      {/* Add your daily meals content here */}
    </View>
    <View style={styles.foodCategoriesSection}>
      <Text style={styles.sectionTitle}>Food Categories</Text>
      {/* Add your food categories content here */}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
    marginRight: 12,
    paddingTop:10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  dailyMealsSection: {
    flex:3,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  foodCategoriesSection: {
    flex:8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
