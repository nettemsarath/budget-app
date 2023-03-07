import React from "react";
import BudjetCard from "./BudjetCard";
import { UNCATOGORIZED_BUDGET_ID, useBudgets } from "../context/budgetsContext";

function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATOGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;
  return <BudjetCard amount={amount} name="Uncategorized" gray {...props} />;
}

export default UncategorizedBudgetCard;
