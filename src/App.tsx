import { useState } from "react"
import type { TabType } from "./types/index";
import BottomNav from "./components/layout/BottomNav";
import "./App.css";
import TransactionForm from "./components/transaction/TransactionForm";
function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  return (
    <div className="app-wrapper">
      <main className="app-main">
        {activeTab === 'home' && <p>홈화면</p>}
        {activeTab === 'history' && <TransactionForm />}
        {activeTab === 'stats' && <p>통계화면</p>}
      </main>
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
    
  )
}

export default App