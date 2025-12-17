
import { useState, useMemo } from 'react'

interface Reply {
  id: string
  category: string
  text: string
  emoji: string
}

const replies: Reply[] = [
  // 🔹 الترحيب
  { id: '1', category: 'ترحيب', text: 'أهلًا بحضرتك، معاك محمد من خدمة عملاء E& Etisalat، إزاي أقدر أساعدك؟', emoji: '👋' },
  { id: '2', category: 'ترحيب', text: 'مساء / صباح الخير، يشرفني أكون مع حضرتك، معاك محمد من خدمة عملاء E&.', emoji: '👋' },
  { id: '13', category: 'ترحيب', text: 'أهلًا بك، نتمنى لك تجربة ممتازة مع خدماتنا اليوم.', emoji: '👋' },

  // 🔹 الانتظار
  { id: '3', category: 'انتظار', text: 'أشكرك جدًا على انتظارك، آسف على التأخير وخلينا نكمل مع بعض.', emoji: '⏳' },
  { id: '4', category: 'انتظار', text: 'متشكر لحضرتك على صبرك، كنت بتأكد من المعلومة عشان أقدّمها لحضرتك بدقة.', emoji: '⏳' },
  { id: '14', category: 'انتظار', text: 'شكرًا على الانتظار، هتحتاج دقيقة صغيرة بس عشان نكمل.', emoji: '⏳' },

  // 🔹 المتابعة
  { id: '5', category: 'متابعة', text: 'بتواصل مع حضرتك لمتابعة الطلب السابق والتأكد من آخر التحديثات.', emoji: '📞' },
  { id: '6', category: 'متابعة', text: 'أنا بكلم حضرتك استكمالًا للمكالمة السابقة زي ما اتفقنا.', emoji: '📞' },
  { id: '15', category: 'متابعة', text: 'أحب أطمن حضرتك على حالة طلبك الحالي، كل شيء تمام.', emoji: '📞' },

  // 🔹 عدم الرد
  { id: '7', category: 'عدم الرد', text: 'حاولنا نتواصل مع حضرتك للمتابعة، وفي حال عدم الرد هنحاول مرة تانية في وقت لاحق.', emoji: '📱' },
  { id: '16', category: 'عدم الرد', text: 'لم نتمكن من الوصول إليك، هنحاول معاودتك لاحقًا.', emoji: '📱' },

  // 🔹 الاعتذار
  { id: '8', category: 'اعتذار', text: 'بنعتذر لحضرتك عن أي إزعاج حصل، وده مش المستوى اللي بنحب نقدمه في E&.', emoji: '🙏' },
  { id: '17', category: 'اعتذار', text: 'نأسف لأي مشكلة واجهتها ونسعى لتحسين تجربتك.', emoji: '🙏' },

  // 🔹 تصعيد
  { id: '9', category: 'تصعيد', text: 'الإجراء ده محتاج تصعيد للجهة المختصة، وهنرجع لحضرتك في أقرب وقت ممكن.', emoji: '📤' },
  { id: '18', category: 'تصعيد', text: 'تم رفع الموضوع للمدير المسؤول، وهنوافيك بالرد قريبًا.', emoji: '📤' },

  // 🔹 تهدئة العميل
  { id: '10', category: 'تهدئة', text: 'متفهم تمامًا انزعاج حضرتك، وأنا معاك خطوة بخطوة لحد ما نحل المشكلة.', emoji: '🤝' },
  { id: '19', category: 'تهدئة', text: 'أقدر شعور حضرتك، ونحاول نلاقي أفضل حل سريع.', emoji: '🤝' },

  // 🔹 الإغلاق
  { id: '11', category: 'إغلاق', text: 'هل في أي استفسار تاني أقدر أساعد حضرتك فيه؟', emoji: '✅' },
  { id: '12', category: 'إغلاق', text: 'شكرًا لتواصلك مع E& Etisalat، نتمنى لحضرتك يوم سعيد.', emoji: '✅' },
  { id: '20', category: 'إغلاق', text: 'إذا احتجت أي مساعدة مستقبلية، لا تتردد في التواصل معنا.', emoji: '✅' },
    {
    id: '27',
    category: 'تحويل',
    text: 'شكراً لتواصلك، الموضوع ده محتاج يتم التعامل معه من القسم المختص، سأقوم بتحويل طلبك لهم .',
    emoji: '📤'
    }
    ,
  // 🔹 دعم فني
  { id: '23', category: 'دعم فني', text: 'لو حضرتك تواجه أي مشكلة في الشبكة، أقدر أساعدك في خطوات الحل.', emoji: '🛠️' },
  { id: '24', category: 'دعم فني', text: 'جرب إعادة تشغيل الجهاز، غالبًا ده يحل المشكلة البسيطة.', emoji: '🛠️' },

  // 🔹 شكر العميل
  { id: '25', category: 'شكر', text: 'شكرًا لتعاونك وصبرك معنا.', emoji: '🙏' },
  { id: '26', category: 'شكر', text: 'نقدّر تواصلك ونأمل أن تكون تجربتك ممتازة.', emoji: '🙏' },
      


]

function AutoReply() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categories = useMemo(() => Array.from(new Set(replies.map(r => r.category))), [])

  const filteredReplies = useMemo(() => {
    if (!selectedCategory) return replies
    return replies.filter(r => r.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="space-y-8 font-sans max-w-6xl mx-auto">
      
      {/* Filter Dropdown */}
      <div className="mb-6 w-full md:w-60 relative">
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="
            w-full p-3 pr-10 rounded-xl border border-gray-300 bg-white shadow-sm
            hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
            transition cursor-pointer text-right
          "
        >
          <option value="">كل الفئات</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Replies */}
      {filteredReplies.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm text-gray-500">
          لا توجد ردود متاحة لهذه الفئة
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReplies.map(reply => (
            <div
              key={reply.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{reply.emoji}</span>
                <span className="font-semibold text-cyan-800 text-sm px-3 py-1 bg-cyan-100 rounded-full">
                  {reply.category}
                </span>
              </div>
              <p className="text-gray-800 text-right leading-relaxed">{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AutoReply
