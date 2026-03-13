import { useState } from "react"
import type { TabType } from "../src/types/index";
import BottomNav from "./components/layout/BottomNav";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  return (
    <div>
      <main>{activeTab}입니다.</main>
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
    
  )
}

export default App