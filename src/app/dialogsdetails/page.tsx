import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="What Exactly Is Sufism? - The Curious Seeker's Guide"
      >
        <div className="bg-gradient-to-b from-white to-gray-100">
          <div className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with decorative elements */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg className="w-72 h-72" viewBox="0 0 100 100">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              <h1 className="text-6xl font-bold text-center mb-10 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple">
                What exactly <em>is</em> Sufism?
              </h1>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-12">
                <p className="italic text-center text-2xl text-gray-700">
                  "Sufism is not something you join. It is something you remember, a voice inside you that once knew how to say 'Ya Allah' with love, not just with lips."
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-xl">
                "It is not robes or rosaries, It is burning and becoming."<br />
                <span className="block mt-3 text-gray-600 font-medium">— Rumi</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="mb-8 leading-relaxed text-xl">
                For the curious heart seeking to understand, Sufism is not a new sect or a separate religion. 
                It is the inner dimension of Islam, a gentle unveiling of Tasawwuf as the heart of the faith, 
                not something apart from it. It is the practice of purifying the heart, cultivating love for Allah, 
                and reaching presence in every breath.
              </p>

              <p className="mb-12 font-semibold text-center text-2xl py-4 border-y text-fixnix-lightpurple border-gray-200">
                Let us offer a definition without complication, an unveiling rather than an explanation.
              </p>
            </div>

            
            <div className="space-y-20">
              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                   
                  <span>1. QUR'ANIC WISDOM: The Spiritual Heart of the Faith</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  The very essence of Sufism can be found within the Qur'an itself, pointing us toward the purification of the soul and the cultivation of divine love.
                </p>
                <ul className="list-disc list-inside mt-6 space-y-3 pl-4 text-lg">
                  <li>
                    <strong>The Qur'an says:</strong> "Indeed, he succeeds who purifies his soul (nafs)." — Surah Ash-Shams (91:9)
                  </li>
                  <li>
                    <strong>The Qur'an says:</strong> "Say: I do not ask you for any reward, only that you love those near to me." — Surah Ash-Shura (42:23)
                  </li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Insight:</span> Sufism is not a new sect. It is the <strong>inner dimension of Islam</strong>, the practice of purifying the heart, cultivating love for Allah, and reaching presence in every breath.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                 
                  <span>2. HADITH INSIGHT: The Path of Ihsan</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  The Prophet Muhammad ﷺ described a dimension of faith beyond practice and belief the dimension of spiritual excellence and beauty.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4 text-lg">
                  <li>"Ihsan is to worship Allah as though you see Him, and if you cannot see Him, know that He sees you." — Hadith Jibril, Sahih Muslim</li>
                  <li>"Verily, Allah does not look at your forms or wealth, but at your hearts and your deeds." — Sahih Muslim</li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Reflection:</span> Sufism = <strong>living ihsan</strong>. It is the <strong>third layer of Islam</strong>: after Islam (practice) and Iman (belief), comes <strong>Ihsan the taste of nearness</strong>.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  
                  <span>3. MYSTIC WISDOM: A Simple Definition</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  The great masters of Sufism have offered simple yet profound explanations that reveal its essential nature.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4 text-lg">
                  <li>"Sufism is adab — with Allah, with people, with the soul." — Imam al-Junayd</li>
                  <li>"It is not robes or rosaries — It is burning and becoming." — Rumi</li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Essence:</span> Sufism is the <strong>art of polishing the heart</strong> until it reflects the One who made it. It is a return to <strong>spiritual intimacy</strong> with Allah through sincerity, silence, and remembrance.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                 
                  <span>4. ISLAMIC TRADITION: A Path, Not a Sect</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  Sufism emerges directly from Islamic tradition, embraced by the most respected scholars throughout history.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4 text-lg">
                  <li><strong>Tazkiyah</strong>, <strong>Ihsan</strong>, and <strong>muraqabah</strong> are all terms found in Qur'an and Hadith — later grouped under the umbrella of <strong>Tasawwuf</strong>.</li>
                  <li><strong>Scholars like al-Ghazali, Nawawi, Ibn Qudama, Qushayri</strong> embraced it — not as innovation, but <strong>as inner scholarship</strong>.</li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Conclusion:</span> Sufism is <strong>Islam's heart-language</strong>, it doesn't replace Islam. It <strong>brings it fully alive</strong>.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  
                  <span>5. KASHMIRI SUFI POETRY: Sufism in One Line</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  In the valley of Kashmir, Sufism was expressed through profound poetry that captures its essence.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4 text-lg">
                  <li>"Panun gov wuchhum gov su andar, na chu wanwan gov sabith." <em>"I saw the Friend inside myself, this was not told to me, it was lived."</em> — Lal Ded</li>
                  <li>"Sufism chu gov panun dil andar saf karnav." <em>"Sufism is washing your heart, not wearing its name."</em> — Folk Saying</li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Interpretation:</span> In Kashmir, Sufism was lived <strong>before it was named</strong>. It was in <strong>how people prayed, loved, forgave, and remembered</strong>.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                 
                  <span>6. MODERN ANALOGY: Understanding Through Comparison</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  For the contemporary seeker, Sufism can be understood through these comparisons:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4 text-lg">
                  <li><strong>Mindfulness, but rooted in tawhid.</strong></li>
                  <li><strong>Healing, but sourced from the Qur'an.</strong></li>
                  <li><strong>Love, but disciplined by the Shariah.</strong></li>
                </ul>
                <p className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <span className="font-bold"> Reframe:</span> Sufism is not a spiritual luxury, It is the <strong>soul's original thirst</strong> made into a <strong>daily path</strong>.
                </p>
              </section>

              <section className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-10 shadow-lg">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  
                  <span>7. INNER PRACTICE PROMPT: Begin Your Journey</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  If you wish to taste what words cannot fully convey, try this simple practice:
                </p>
                <div className="mt-8 p-8 bg-white rounded-xl shadow-md border border-gray-200">
                  <p className="text-center text-gray-700">
                    <span className="font-bold text-xl"> Whisper gently:</span><br />
                    <span className="mt-4 block text-3xl text-fixnix-lightpurple font-serif">"Ya Wadud — O Most Loving."</span>
                  </p>
                  <p className="mt-6 text-center text-lg">
                    Then ask yourself:<br />
                    <span className="italic">"What would it mean to live my Islam not just through action... but through presence, warmth, and awareness?"</span>
                  </p>
                  <p className="mt-6 text-center font-bold">
                    That question <strong>is where Sufism begins</strong>.
                  </p>
                </div>
                
                <div className="mt-10 p-8 bg-fixnix-lightpurple rounded-xl shadow-md border border-gray-100">
                  <p className="font-semibold text-center text-fixnix-white text-xl">
                    <span className="block mb-4 text-lg"> Final Whisper for the Soul:</span>
                    <span className="italic">"Sufism is not something you join. It is something you remember, a voice inside you that once knew how to say 'Ya Allah' with love, not just with lips."</span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}