import React, { useState } from 'react'

function DateCalc() {
  const [startDate, setStartDate] = useState('')
  const [days, setDays] = useState(7)

  const getResult = () => {
    if (!startDate) return null

    const date = new Date(startDate)
    date.setDate(date.getDate() + Number(days))

    const daysNames = [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت'
    ]

    return {
      date: date.toLocaleDateString('ar-EG'),
      day: daysNames[date.getDay()]
    }
  }

  const result = getResult()

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
      
      <h2 className="text-xl font-bold text-center text-gray-800">
        حساب التاريخ
      </h2>

      {/* تاريخ البداية */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">
          تاريخ البداية
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* عدد الأيام */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">
          عدد الأيام
        </label>
        <select
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={7}>7 أيام</option>
          <option value={14}>14 يوم</option>
          <option value={28}>28 يوم</option>
          <option value={30}>30 يوم</option>
        </select>
      </div>

      {/* النتيجة */}
      {result && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">التاريخ الناتج:</span>{' '}
            {result.date}
          </p>
          <p className="text-gray-700 mt-1">
            <span className="font-semibold">اليوم:</span>{' '}
            {result.day}
          </p>
        </div>
      )}
    </div>
  )
}

export default DateCalc
