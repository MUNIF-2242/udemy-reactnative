import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
  ];
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
