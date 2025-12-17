import  { useState } from 'react'
import { Home, BookOpen, Calendar, Menu, X } from 'lucide-react'

function Side({
  onSelect,
  active,
}: {
  onSelect: (section: string) => void
  active: string
}) {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: <Home size={20} /> },
    { id: 'replies', label: 'مكتبة الردود', icon: <BookOpen size={20} /> },
    { id: 'date', label: 'حساب تاريخ التجديد', icon: <Calendar size={20} /> },
  ]

  const handleSelect = (id: string) => {
    onSelect(id)
    setOpen(false) // يقفل القائمة على الموبايل
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-cyan-800 text-white p-2 rounded-xl shadow"
        aria-label="فتح القائمة"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 right-0
          min-h-screen w-64
          bg-gradient-to-b from-cyan-800 to-cyan-900
          text-white flex flex-col
          border-l border-cyan-700
          z-50
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-cyan-700 flex items-center justify-between">
          <h1 className="text-3xl font-bold">ساهل</h1>

          {/* Close (Mobile) */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 hover:bg-cyan-700 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleSelect(item.id)}
                  className={`
                    w-full flex items-center gap-3 p-3 rounded-xl
                    transition-all
                    ${
                      active === item.id
                        ? 'bg-white text-cyan-800 shadow'
                        : 'hover:bg-cyan-700'
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Side
