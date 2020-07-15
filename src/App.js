import React from 'react';
import ContactList from './components/ContactList';

const contacts = [
  {name: 'Peter Palmer', avatar: 'https://randomuser.me/api/portraits/men/85.jpg', online: false, key: 1},
  {name: 'Bessie Long', avatar: 'https://randomuser.me/api/portraits/women/27.jpg', online: true, key: 2},
  {name: 'Mae Alvarez', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', online: false, key: 3},
  {name: 'Noah Johnston', avatar: 'https://randomuser.me/api/portraits/men/95.jpg', online: false, key: 4},
  {name: 'Celina Larson', avatar: 'https://randomuser.me/api/portraits/women/42.jpg', online: true, key: 5}
]

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
