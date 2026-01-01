import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="How To Fix Broken Back Glass On Your Phone"
      >
        <div className="bg-gradient-to-b from-white to-gray-50">
          <div className="px-6 py-16 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with decorative elements */}
            <div className="relative mb-16">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg className="w-64 h-64" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              <h1 className="text-5xl font-bold text-center mb-8 relative">
                Sufism is just a spiritual entertainment.
              </h1>
              
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-10">
                <p className="italic text-center text-xl text-gray-700">
                  "You say Sufism is entertainment. I say it is annihilation of the self in the truth of God."
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-lg">
                "They see the dance and not the dying."<br />
                <span className="block mt-3 text-gray-600 font-medium">— Imam al-Ghazali</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="mb-6 leading-relaxed">
                To the heart that judges by the outer rhythm and forgets the inner stillness, I say: you have mistaken the veil for the Face.
                You see the whirling, the poetry, the incense, the chants and you label it entertainment. Yet you have not entered the fire
                from which those movements rise. You have not heard the silent scream of the ego being extinguished, or tasted the bitterness
                of self-discipline that precedes the sweetness of divine presence.
              </p>

              <p className="mb-12 font-semibold text-center text-xl">Let me offer you the truth, not as argument, but as unveiling.</p>
            </div>

            {/* Content Sections with Enhanced Styling */}
            <div className="space-y-16">
              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  <span className="text-fixnix-lightpurple"></span> 
                  <span>1. Sufism Is the Soul of Islam, Not Its Distraction</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Sufism is not a side dish to Islam, nor a diluted form of religion for the romantic-minded. It is the deep interior of the
                  Shari'ah, the breath of the Sunnah, and the echo of the Qur'an in the chambers of the heart.
                </p>
                <ul className="list-disc list-inside mt-6 space-y-3 pl-4">
                  <li>
                    <strong>The Qur'an says:</strong> "Indeed, in the remembrance of Allah do hearts find rest." (13:28)
                  </li>
                  <li>
                    <strong>The Prophet ﷺ said:</strong> "There is a polish for everything, and the polish for the heart is the remembrance of Allah."
                  </li>
                </ul>
                <p className="mt-6">
                  The Sufi does not bypass the Shari'ah, he breathes it until it disappears into his being. He does not perform dhikr to impress, he does it to disappear.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>2. Reason: Entertainment Seeks the Self, Sufism Destroys It</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Entertainment seeks to please the nafs (ego). It offers momentary distraction, emotional stimulation, and often, self-indulgence.
                  Sufism, by contrast, begins by crucifying the nafs. The Sufi disciplines the tongue, the limbs, the appetite.
                </p>
                <p className="mt-4">
                  How can something that burns the ego, confronts the heart, and silences the soul be confused with entertainment?
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>3. The Whirl Is Not for You. It Is for God.</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  You say: "They dance." Yes, they whirl. But why?
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                  <li>The Prophet ﷺ stood in prayer till his feet swelled  and he did it in silence.</li>
                  <li>The Sufi turns as the planets do, not to attract, but to surrender to the axis of Divine Will.</li>
                </ul>
                <p className="mt-6">
                  Just as the Kaaba is circled in Tawaf, so the Sufi circles the inner Kaaba of his Lord. And if your eyes were polished, you would see not a dancer, but a flame yearning to rise.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>4. Wisdom of the Ancients: The Saints Were Not Performers</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Was Rabiʿa al-ʿAdawiyya, who walked barefoot on scorching sand and refused paradise if it distracted her from God, an entertainer?
                </p>
                <p className="mt-4">
                  Was Jalaluddin Rumi, whose son was abducted, whose teacher was buried, and who poured oceans of grief into divine verses, seeking applause?
                </p>
                <p className="mt-4">
                  These saints suffered, starved, wept, vanished not for crowds, but for Truth.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                 
                  <span>5. Islamic Lineage: Sufism Is Orthodoxy with Depth</span>
                </h2>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                  <li><strong>Imam al-Ghazali:</strong> "Whoever has no share of spiritual experience, he has no real knowledge."</li>
                  <li><strong>Ibn Taymiyyah:</strong> "Among the people of Sufism are those closest to Allah and most truthful."</li>
                  <li>The Prophet ﷺ engaged in contemplative dhikr in the Cave of Hira before the Qur'an descended.</li>
                </ul>
                <p className="mt-6">
                  Wherever Islam was practiced with beauty — Andalusia, Istanbul, Kashmir, Senegal — Sufism was its heartbeat.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>6. The Mystic Does Not Entertain, He Reflects Divine Light</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  The Qur'an says: "Allah is the Light of the heavens and the earth…" (24:35)
                </p>
                <p className="mt-4">
                  The Sufi is the mirror, polished by repentance, dhikr, fasting, and service until he reflects that Light without distortion.
                </p>
              </section>

              <section className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-8 shadow-inner">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                
                  <span>Conclusion: O Accuser, Step Into the Circle</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  You have looked at the Sufi garden and said, "This is a carnival." But have you seen the thorns that tore his heart before he bloomed?
                </p>
                <p className="mt-4">
                  You say Sufism is entertainment. I say it is divine war against the ego. It is ascension masked in rhythm. It is the Path.
                </p>
                <div className="mt-8 p-6 bg-fixnix-lightpurple rounded-lg shadow-sm border border-gray-100">
                  <p className="font-semibold text-center text-fixnix-white text-xl">
                    And when the world burns with noise, the Sufi whispers: <br />
                    <span className="mt-2 block text-2xl text-white">"La ilaha illa Allah."</span>
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