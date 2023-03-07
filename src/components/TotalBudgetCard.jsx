import React from "react";
import BudjetCard from "./BudjetCard";

import { UNCATOGORIZED_BUDGET_ID, useBudgets } from "../context/budgetsContext";

function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max == 0) return null;
  return <BudjetCard amount={amount} name="Total" gray max={max} />;
}

export default TotalBudgetCard;
