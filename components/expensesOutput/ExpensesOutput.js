import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e2",
      description: "A pair of ball",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e3",
      description: "A pair of shirts",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e4",
      description: "A pair of Banana",
      amount: 10.0,
      date: new Date("2022-12-19"),
    },
    {
      id: "e5",
      description: "A pair of shirts",
      amount: 10.0,
      date: new Date("2022-12-19"),
    },
    {
      id: "e6",
      description: "A pair of shoes",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e7",
      description: "A pair of ball",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e8",
      description: "A pair of shirts",
      amount: 10.0,
      date: new Date("2024-12-19"),
    },
    {
      id: "e9",
      description: "A pair of Banana",
      amount: 10.0,
      date: new Date("2022-12-19"),
    },
    {
      id: "e10",
      description: "A pair of shirts",
      amount: 10.0,
      date: new Date("2022-12-19"),
    },
  ];
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
