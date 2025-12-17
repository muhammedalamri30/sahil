import { useState } from 'react'
import Side from '../components/Side'
import AutoReply from '../components/AutoReply'
import DateCalc from '../components/DateCalc'

function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      
        case 'date':
          return <DateCalc />
          default:
            return (
             <AutoReply />
          
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
        <div className=" rounded-2xl shadow-md p-6 max-w-6xl mx-auto bg-gray-50">
          {renderContent()}
        </div>

      </section>
    </main>
  )
}

export default Home
