import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

type Category = {
  id: string;
  name: string;
  description: string;
};

const categories: Category[] = [
  { id: '1', name: 'Electronics', description: 'Latest gadgets and devices' },
  { id: '2', name: 'Clothing', description: 'Fashionable apparel for all ages' },
  { id: '3', name: 'Home Appliances', description: 'Tools and appliances for your home' },
  { id: '4', name: 'Beauty & Health', description: 'Skincare, makeup, and wellness products' },
  // Add more categories here
];

export default function ProductCategories() {
  // Render each category item in a Card
  const renderItem = ({ item }: { item: Category }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log(`Go to ${item.name} category`)}>
          Explore
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});
