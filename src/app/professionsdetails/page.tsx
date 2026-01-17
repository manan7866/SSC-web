import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="The Sacred Administrator - A Sufi Guide to Governance with Grace"
      >
        <div className="bg-gradient-to-b from-white to-gray-100">
          <div className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with improved decorative elements */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-80 h-80" viewBox="0 0 100 100">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              <h1 className="text-6xl font-bold text-center mb-10 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-darkpurple to-fixnix-lightpurple">
                The Sacred Administrator
              </h1>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-12">
                <p className="italic text-center text-2xl text-gray-700">
                  "You Do Not Rule the People, You Serve the Sacred in Them"
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-xl bg-white p-6 rounded-lg shadow-sm border-l-4 border-fixnix-lightpurple">
                "Indeed, We offered the trust (al-amānah) to the heavens and the earth and the mountains, but they declined to bear it, being afraid of it. But man undertook it…"<br />
                <span className="block mt-3 text-gray-600 font-medium">— Qur'an 33:72</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="mb-8 leading-relaxed text-xl">
                For the heart seeking to govern with wisdom, the administrative path is not merely about policy execution,
                but a sacred trust bestowed upon you. This guide is designed to reframe your understanding
                of power and leadership through the lens of Sufi wisdom.
              </p>

              <p className="mb-12 font-semibold text-center text-2xl py-5 px-4 rounded-lg bg-gradient-to-r from-white to-purple-50 text-fixnix-darkpurple border border-gray-200">
                Let us offer a definition of sacred governance without complication, an unveiling rather than an explanation.
              </p>
            </div>

            
            <div className="space-y-24">
              <section id="section-1" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                  <span>POWER AS A SACRED TRUST: The True Nature of Authority</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  Worldly administration and sacred governance operate from fundamentally different paradigms:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2 text-gray-700">Worldly View</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Authority over people</li>
                      <li>Prestige or entitlement</li>
                      <li>Personal achievement</li>
                      <li>Influence to control narratives</li>
                      <li>Executive immunity</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2 text-fixnix-darkpurple">Sacred Paradigm</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Custodianship of Divine equity</li>
                      <li>Heavy responsibility with accountability</li>
                      <li>A station of testing, not glory</li>
                      <li>Platform to serve truth</li>
                      <li>Radical inner transparency before God</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Insight:</span> The Prophet ﷺ said: <strong>"Every one of you is a shepherd, and every one of you is responsible for their flock."</strong> — Bukhari & Muslim
                </p>
              </section>

              <section id="section-2" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                  <span>ADMINISTRATIVE OBJECTIVES: The Sacred Purpose</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  The Sacred Administrator's role transcends conventional objectives and embraces spiritual purpose.
                </p>
                <ul className="list-disc list-inside mt-6 space-y-3 pl-4 text-lg">
                  <li>
                    <strong className="text-fixnix-darkpurple">Reframe your role</strong> as a custodian of Divine trust, not merely an executor of public policy.
                  </li>
                  <li>
                    <strong className="text-fixnix-darkpurple">Understand</strong> that every order, signature, allocation, or enforcement action is a weight recorded in the unseen realm.
                  </li>
                  <li>
                    <strong className="text-fixnix-darkpurple">Reconnect your office</strong> with its original sacred purpose: to deliver justice, mercy, dignity, and access.
                  </li>
                  <li>
                    <strong className="text-fixnix-darkpurple">Begin cultivating</strong> daily rituals that remind you your desk is a Divine amānah (entrusted post), not a personal domain.
                  </li>
                </ul>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Reflection:</span> This is not a metaphor. This is a warning. That chair you sit in, that pen you sign with, that corridor of meetings and decisions, is the place where angels pause and whisper: <strong>"Will he fulfill the trust today?"</strong>
                </p>
              </section>

              <section id="section-3" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                  <span>SIGNS OF SACRED GOVERNANCE: Self-Evaluation</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  How do you know if you're moving toward authentic sacred governance? These signs reveal your inner state:
                </p>
                <ul className="list-disc list-inside mt-6 space-y-3 pl-4 text-lg">
                  <li>You feel a weight when signing documents, not just duty.</li>
                  <li>You pause before reacting to public pressure not out of fear, but out of reverence.</li>
                  <li>You seek advisors who speak truth, not flatterers.</li>
                  <li>You use silence to protect justice, not avoid responsibility.</li>
                  <li>You ask your soul: "Will I be able to answer for this decision on the Day of Accountability?"</li>
                </ul>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Essence:</span> <strong>The best administrators are invisible in the media, but unforgettable in their mercy.</strong>
                </p>
              </section>

              <section id="section-4" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                  <span>THE SACRED DESK RITUAL: Daily Practice</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  Transform your administrative environment with this daily ritual:
                </p>
                <div className="mt-8 p-8 bg-white rounded-xl shadow-md border-l-4 border-fixnix-lightpurple">
                  <p className="text-left font-bold text-xl mb-4 text-fixnix-darkpurple">Each Morning:</p>
                  <ol className="list-decimal list-inside space-y-4 text-lg">
                    <li>Touch your desk lightly with your hand.</li>
                    <li>
                      Whisper:<br />
                      <span className="mt-2 block text-center italic text-fixnix-lightpurple">"Ya Wakeel, today I act only as Your appointed trustee. Shield me from ego."</span>
                    </li>
                    <li>
                      Before signing any major decision:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Breathe.</li>
                        <li>Recite silently: "Allah is witness over all things."</li>
                        <li>Then ask: "Am I writing with justice, mercy, and service or with fear, anger, or self?"</li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Practice:</span> <strong>Your office is temporary. But the effect of your decisions is written in the Book.</strong>
                </p>
              </section>

              <section id="section-5" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
                  <span>CASE STUDY: The Commissioner Who Refused the Spotlight</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  A living example of sacred administration:
                </p>
                <div className="mt-6 p-6 bg-gray-50 rounded-lg italic border-l-4 border-fixnix-lightpurple">
                  <p className="mb-4">He was offered national media coverage for a policy reform.</p>
                  <p className="mb-4">He declined.</p>
                  <p className="mb-4">Instead, he visited the community his reform affected.</p>
                  <p className="mb-4">Listened. Prayed. Removed three clauses.</p>
                  <p className="mb-4">The cameras missed it.</p>
                  <p className="mb-4">But the people felt it.</p>
                  <p className="mt-6">He later said:</p>
                  <p className="mt-2">"I didn't take office to be seen.<br />I took office because I feared how I'd answer if I refused the call to serve."</p>
                </div>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Lesson:</span> <strong>Power that is feared fades. Power that trembles with awe becomes light in the grave.</strong>
                </p>
              </section>

              <section id="section-6" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">6</span>
                  <span>REFLECTION PROMPTS: Self-Examination</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  Consider these questions deeply as you walk the path of sacred administration:
                </p>
                <ol className="list-decimal list-inside mt-6 space-y-4 pl-4 text-lg">
                  <li>Do I treat my public role as a position of sacred trust, or personal platform?</li>
                  <li>Would the people feel less watched, more honored under my leadership?</li>
                  <li>What would change if I treated my desk like a mihrab (prayer niche)?</li>
                </ol>
                <p className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                  <span className="font-bold text-fixnix-darkpurple">Guidance:</span> <strong>Your desk is a Divine amānah (entrusted post) not a personal domain.</strong>
                </p>
              </section>

              <section id="section-7" className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-10 shadow-lg">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">7</span>
                  <span>FINAL WHISPER: The Sacred Administrator's Path</span>
                </h2>
                <div className="mt-8 p-8 bg-white rounded-xl shadow-md border-l-4 border-fixnix-lightpurple">
                  <p className="text-center text-gray-700 italic">
                    <span className="block mb-6 text-xl">Do not ask for power.<br />It may be granted as a test.</span>
                    <span className="block mb-6 text-xl">If you've been given office,<br />step lightly.<br />Speak less.<br />Serve deeply.</span>
                    <span className="block mb-6 text-xl">Let the policy you write<br />echo mercy.</span>
                    <span className="block text-xl">Let the decisions you sign<br />reflect Divine justice.</span>
                    <span className="block mt-6 text-xl">And let every citizen feel <br />even if they never say it aloud <br />that you governed with awe.</span>
                  </p>
                </div>
                
                <div className="mt-10 p-8 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl shadow-md">
                  <p className="font-semibold text-center text-white text-xl">
                    <span className="block mb-4 text-lg">Sacred Administration Is:</span>
                    <span className="italic">"Not power over the people, but service to the sacred in them. A trust that even mountains feared to bear, yet you have taken it upon your shoulders."</span>
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