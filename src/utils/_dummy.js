/* eslint-disable no-unused-vars */
const users = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    balance: 150.25,
    orders: [
      {
        order_id: 101,
        service_id: 2,
        quantity: 5000,
        status: "In Progress",
      },
      {
        order_id: 102,
        service_id: 1,
        quantity: 1000,
        status: "Completed",
      },
    ],
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    balance: 75.6,
    orders: [
      {
        order_id: 103,
        service_id: 3,
        quantity: 200,
        status: "Pending",
      },
    ],
  },
];
