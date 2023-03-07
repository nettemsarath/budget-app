import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";

import { useBudgets } from "../context/budgetsContext";

function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, maxRef.current.value);
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label> Name </Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label> Maximim Spending </Form.Label>
            <Form.Control
              ref={maxRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primay" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default AddBudgetModal;
