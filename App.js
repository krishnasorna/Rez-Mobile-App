import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, FlatList, SafeAreaView, Text, View, ScrollView } from 'react-native';
import React, { useState } from "react";

//expo install react-native-paper 
import { DataTable, Title } from 'react-native-paper';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const DATA = [
  {
    id: "first",
    name: "Alice",
    status: "Dorm"
  },
  {
    id: "second",
    name: "Bob",
    status: "Dorm"
  },
  {
    id: "third",
    name: "Frank",
    status: "Dorm"
  },
  {
    id: "fourth",
    name: "Greg",
    status: "Dorm"
  }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
    <Text style={[styles.name, textColor]}>{item.status}</Text>
  </TouchableOpacity>
);

export default function App() {

  
  const [selectedIds, setSelectedIds] = useState([]);

  const renderItem = ({ item }) => {
    const backgroundColor = selectedIds.includes(item.id) ? "#6e3b6e" : "#f9c2ff";
    const color = selectedIds.includes(item.id) ? 'white' : 'black';



    return (
      <Item
        item={item}
        onPress={() =>{
          if (selectedIds.includes(item.id)) {
            console.log("includes");
            const index = selectedIds.indexOf(item.id);
            var new_arr = selectedIds;
            new_arr.splice(index,1)
            setSelectedIds(new_arr);
          }else { 
            var new_arr = selectedIds;
            new_arr.push(item.id);
            setSelectedIds(new_arr);
          }
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <View style={styles.container}>
      
      <Title style = {styles.heading}>Rez Dashboard</Title> 
    
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedIds}
      />
    </SafeAreaView>
    
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(158,5,235)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  baseText: {
    marginLeft: 20,
    fontSize:28,
    color: 'white',
    fontWeight: 'bold',
    fontWeight: 'bold',
    marginBottom: 400
  },
  whiteText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'right',
    marginBottom: 10
  },
  heading:{
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    fontSize: 29,

    marginTop: 10,
    marginBottom: 20
  }
});


{/* <DataTable>
          <DataTable.Header>
            <DataTable.Title><Text style={styles.whiteText}>Name</Text></DataTable.Title>
            <DataTable.Title><Text style={styles.whiteText}>Status</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={styles.whiteText}>Group</Text></DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.whiteText}>John Sanch</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.whiteText}>Picked Up</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.whiteText}>1</Text></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={styles.whiteText}>Ase Lin</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.whiteText}>Picked Up</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={styles.whiteText}>1</Text></DataTable.Cell>
          </DataTable.Row>

</DataTable> */}