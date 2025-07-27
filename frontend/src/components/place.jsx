import { useEffect, useState } from 'react';
import { getContacts } from './api/contacts';
import ContactCard from './components/ContactCard';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts()
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" min-h-screen bg-rose-50 p-8 flex gap-10 items-center">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} />
      ))}
    </div>
  );
}

export default App;
\