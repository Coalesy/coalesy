// pages/tabs.js
"use client"
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div>Content for Tab 1</div>;
      case 'tab2':
        return <div>Content for Tab 2</div>;
      case 'tab3':
        return <div>Content for Tab 3</div>;
      default:
        return <div>Content for Tab 1</div>;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
        <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
        <button onClick={() => setActiveTab('tab3')}>Tab 3</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>

      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
        }
        .tabs button {
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
        .content {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
