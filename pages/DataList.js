import React from "react";

export default function DataList({ onSelect }) {
  // Example data plans
  const dataPlans = [
    { id: 1, name: "1GB Data", price: 1000 },
    { id: 2, name: "2GB Data", price: 2000 },
    { id: 3, name: "5GB Data", price: 5000 },
    { id: 4, name: "10GB Data", price: 10000 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>📱 Available Data Plans</h2>
      <ul>
        {dataPlans.map((plan) => (
          <li
            key={plan.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => onSelect(plan)}
          >
            {plan.name} - ₦{plan.price}
          </li>
        ))}
      </ul>
    </div>
  );
  }
