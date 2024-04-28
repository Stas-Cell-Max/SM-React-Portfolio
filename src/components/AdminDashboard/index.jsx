// src/components/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h1>Contact Messages</h1>
      <div>
        {contacts.map(contact => (
          <div key={contact._id}>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>Email: {contact.email}</p>
            <p>Occupation & Location: {contact.occupationLocation}</p>
            <p>Message: {contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
