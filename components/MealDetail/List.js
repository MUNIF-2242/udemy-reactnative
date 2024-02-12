import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f7f7",
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemText: { color: "white", textAlign: "center" },
});
