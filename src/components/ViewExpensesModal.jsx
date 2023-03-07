import React from "react";
import { Form, Modal, Stack, Button } from "react-bootstrap";

import { UNCATOGORIZED_BUDGET_ID, useBudgets } from "../context/budgetsContext";
import { currencyFormatter } from "../utils";

function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATOGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATOGORIZED_BUDGET_ID }
      : budgets.find((budget) => budget.id === budgetId);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  return (
    <Modal show={budgetId !== null} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Stack direction="horizontal" gap="2">
              <div>Expenses - {budget?.name} </div>
              {budgetId !== UNCATOGORIZED_BUDGET_ID && (
                <Button
                  onClick={() => {
                    deleteBudget(budget);
                    handleClose();
                  }}
                  variant="outline-red"
                >
                  Delete
                </Button>
              )}
            </Stack>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            {expenses.map((expense) => (
              <Stack key={expense.id} direction="horizontal" gap="2">
                <div className="me-auto fs-5">{expense.description}</div>
                <div className="fs-6">
                  {currencyFormatter.format(expense.amount)}
                </div>

                <Button
                  onClick={() => deleteExpense({ id: expense.id })}
                  size="sm"
                  variant="outline-danger"
                >
                  &times;
                </Button>
              </Stack>
            ))}
          </Stack>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default ViewExpensesModal;
