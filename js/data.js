const users = [
{
    id: 1,
    username: "owner",
    password: "123",
    role: "owner",
    name: "John Smith",
    email: "john@email.com",
    phone: "555-1234"
},
{
    id: 2,
    username: "coworker",
    password: "123",
    role: "coworker",
    name: "Sarah Jones",
    email: "sarah@email.com",
    phone: "555-5678"
}
];

const properties = [
{
    id: 1,
    ownerId: 1,
    name: "Downtown Office",
    address: "123 Main Street"
},
{
    id: 2,
    ownerId: 1,
    name: "Tech Hub",
    address: "456 King Street"
}
];

const workspaces = [
{
    id: 1,
    propertyId: 1,
    type: "Meeting Room",
    seats: 10,
    smoking: "No",
    availability: "2025-06-01",
    term: "Month",
    price: 250
},
{
    id: 2,
    propertyId: 1,
    type: "Private Office",
    seats: 4,
    smoking: "No",
    availability: "2025-06-15",
    term: "Month",
    price: 600
},
{
    id: 3,
    propertyId: 2,
    type: "Open Desk",
    seats: 1,
    smoking: "No",
    availability: "2025-07-01",
    term: "Week",
    price: 100
}
];
