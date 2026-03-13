import { useState } from 'react'
import BottomNav from './components/layout/BottomNav'
import type { TabType } from './components/layout/BottomNav'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  return (
    // 1. 모바일 고정 너비 wrapper (가운데 정렬)
    <div className="app-wrapper">

      {/* 2. 상단 헤더 */}
      <header className="app-header">
        <h1>title</h1>
      </header>

      {/* 3. 본문 스크롤 영역 */}
      <main className="app-main">
        {activeTab === 'home' && <p>홈 화면</p>}
        {activeTab === 'history' && <p>내역 화면</p>}
        {activeTab === 'stats' && <p>통계 화면</p>}
      </main>

      {/* 4. 하단 탭바 자리 (다음 이슈에서 만들 예정) */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

    </div>
  )
}

export default App