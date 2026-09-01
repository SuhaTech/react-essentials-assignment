import React, { useState } from 'react';
import UserRegistration from './components/UserRegistration';
import PizzaOrder from './components/PizzaOrder';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('registration');

  return (
    <div className="App">
      <nav className="navbar">
        <button 
          className={activeTab === 'registration' ? 'active' : ''} 
          onClick={() => setActiveTab('registration')}
        >
          User Registration
        </button>
        <button 
          className={activeTab === 'pizza' ? 'active' : ''} 
          onClick={() => setActiveTab('pizza')}
        >
          Mario's Pizza
        </button>
      </nav>

      <main className="content">
        {activeTab === 'registration' ? <UserRegistration /> : <PizzaOrder />}
      </main>
    </div>
  );
}

export default App;