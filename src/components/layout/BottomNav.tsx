type TabType = 'home' | 'history' | 'stats' //타입 정의 : typescript에게 알려줌 "TabType은 세가지 문자열 중 하나만 올 수 있다 - 오타방지 및 재사용 용이"

//Props 타입 정의 : 해당 컴포넌트가 부모인 App.tsx한테 받아야 하는 값들
//interface : 부모가 보내줄 값의 설명서 즉, 실제 값을 채워서 보내줌
interface BottomNavProps {
  activeTab: TabType //"TabType 형태의 값이 올 거야"
  onTabChange: (tab: TabType) => void //"이런 형태의 함수가 올 거야"
}

//탭 목록 데이터
const tabs = [
  { id: 'home' as TabType, label: '홈', icon: '🏠' },
  { id: 'history' as TabType, label: '내역', icon: '📋' },
  { id: 'stats' as TabType, label: '통계', icon: '📊' },
]
//as TabType : typescript에게 이 문자열이 TabType이라는 걸 확신한다고 알려줌

function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="bottom-nav-icon">{tab.icon}</span>
          <span className="bottom-nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
export type { TabType }