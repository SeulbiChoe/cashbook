import type { TabType } from "../../types/index";
interface BottomNavProps {
 activeTab: TabType,
 onChangeTab: (tab: TabType)=>void;
}
const tabs = [
 {id: 'home' as TabType, label: '홈', icon: '🏠'},
 {id: 'history' as TabType, label: '내역', icon: '📋'},
 {id: 'stats' as TabType, label: '통계', icon: '📊'}
]
function BottomNav ({activeTab, onChangeTab}:BottomNavProps) {
 return (
  <div className="bottom-nav">
   {tabs.map((tab)=>(
    <button onClick={()=>onChangeTab(tab.id)} className={`bottom-nav-item ${activeTab === tab.id ? "active" : ""}`} key={tab.id}>{tab.icon}<span>{tab.label}</span></button>
   ))}
  </div>
 )
}
export default BottomNav;