import { useState } from 'react'
import Side from '../components/Side'
import AutoReply from '../components/AutoReply'
import DateCalc from '../components/DateCalc'

function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'replies':
        return <AutoReply />
      case 'date':
        return <DateCalc />
      default:
        return (
          <div className="text-center text-gray-500">
            اختر أداة من القائمة الجانبية
          </div>
        )
    }
  }

  return (
    <main dir="rtl" className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Side onSelect={setActiveSection} active={activeSection} />

      {/* Main Area */}
      <section className="flex-1 p-6 overflow-y-auto">
        
        

        {/* Single Content Area */}
        <div className=" rounded-2xl shadow-md p-6 min-h-100">
          {renderContent()}
        </div>

      </section>
    </main>
  )
}

export default Home
