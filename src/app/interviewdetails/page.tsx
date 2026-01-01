import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Interview() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Inspiring Interview: Dr. Marissa Clarke – The Biologist Who Listens to Light"
      >
        {/* Hero Section with elegant background */}
        <div className="bg-white min-h-screen">
          <div className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto text-gray-800">
            
            {/* Hero Section with glowing elements */}
            <div className="relative mb-16 sm:mb-24">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-fixnix-lightpurple blur-3xl opacity-20"></div>
                <div className="absolute w-48 sm:w-64 h-48 sm:h-64 -translate-x-20 translate-y-20 rounded-full bg-fixnix-darkpurple blur-3xl opacity-20"></div>
                <svg className="w-72 sm:w-96 h-72 sm:h-96" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M30 50 L70 50 M50 30 L50 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Main title with elegant typography */}
              <div className="relative z-10">
                <div className="text-center">
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-fixnix-darkpurple">Sufi Science Center Presents</span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 mb-6 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple leading-tight">
                    Inspiring Interview:<br />Dr. Marissa Clarke
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple mx-auto mb-6"></div>
                  
                  <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-fixnix-lightpurple font-light italic">
                    The Biologist Who Listens to Light
                  </h2>
                </div>
              </div>
              
              {/* Profile card with subtle shadow */}
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-fixnix-lightpurple-light mb-16 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 text-base sm:text-lg">
                  <div className="flex-1 md:border-r border-fixnix-lightpurple-light md:pr-8">
                    <h3 className="text-base sm:text-lg font-semibold text-fixnix-lightpurple mb-4 uppercase tracking-wide">Professional Profile</h3>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Profession:</span> Quantum Biologist, Neuroecology Researcher, Consciousness Theorist</p>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Country:</span> United States</p>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Institutional Affiliation:</span> ACRL</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-fixnix-lightpurple mb-4 uppercase tracking-wide">Areas of Focus</h3>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Spiritual Orientation:</span> Sufi-Tilted</p>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Areas of Impact:</span> Mind-Body Consciousness, Cellular Intelligence, Eco-Spirituality</p>
                    <p className="mb-3"><span className="font-bold text-fixnix-darkpurple mr-2">Interview Conducted by:</span> Dr. Yasir Feroze (SSC), Layla Noor (SSC Fellow)</p>
                  </div>
                </div>
              </div>
              
              {/* Featured quote with decorative elements */}
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl text-fixnix-lightpurple opacity-50">"</div>
                <blockquote className="text-center italic text-xl sm:text-2xl font-serif text-fixnix-lightpurple px-4 sm:px-12 relative z-10">
                  The universe does not hide its secrets, it whispers them. But only the still-hearted can hear.
                  <div className="w-16 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple mx-auto mt-6"></div>
                </blockquote>
                <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 text-5xl sm:text-6xl text-fixnix-lightpurple opacity-50">"</div>
              </div>
            </div>

            {/* Introduction Paragraphs */}
            <div className="max-w-3xl mx-auto mb-16 sm:mb-24">
              <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple p-6 sm:p-8 rounded-3xl shadow-sm">
                <p className="mb-8 leading-relaxed text-lg sm:text-xl font-serif italic text-center text-fixnix-white">
                  "When all your data fades, what do you hope remains? I hope someone walks into a room I shaped, 
                  physically or intellectually, and feels unburdened. I hope they remember that mystery is not 
                  failure, it is fidelity to wonder."
                </p>
              </div>

              <div className="relative mt-12 sm:mt-16 mb-16 sm:mb-20">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-fixnix-lightpurple to-transparent"></div>
                <p className="font-semibold text-center text-xl sm:text-2xl py-6 sm:py-8 text-fixnix-darkpurple">
                  A journey from scientific rigor to spiritual reverence
                </p>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fixnix-lightpurple to-transparent"></div>
              </div>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {/* Mystic Biography Section */}
              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-darkpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                      Mystic Biography: Where Cells Became Verses
                    </h2>
                  </div>
                
                  <div className="pl-4 sm:pl-16">
                    <p className="mt-4 leading-relaxed text-base sm:text-lg text-gray-700">
                      <span className="font-bold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Before I studied light, I lived in darkness, not literal, but conceptual. I knew how to map brainwaves and translate chemical signatures, but I had forgotten what it meant to listen without measuring.
                    </p>
                    <p className="mt-4 leading-relaxed text-base sm:text-lg text-gray-700">
                      I was raised in Massachusetts. My father was an astrophysicist; my mother a piano teacher who whispered mystic poetry before bed. It was she who gave me a copy of Rumi's Masnavi the day I got my PhD. She said, <span className="italic font-bold text-fixnix-darkpurple">"Now learn what won't show up on your instruments."</span>
                    </p>
                    <p className="mt-4 leading-relaxed text-base sm:text-lg text-gray-700">
                      It was in a quiet library corner that I found an article on Kashmiri Sufism. The names, Lal Ded, Nund Rishi, felt strangely familiar, like ancestors I'd dreamed of but never met. But it was Dr. Kumar's teachings that became my personal catalyst. His silence roared louder than all my lectures. His reflections on annihilation through the biology of surrender gave me a vocabulary I never learned in my labs.
                    </p>
                    <p className="mt-4 leading-relaxed text-base sm:text-lg text-gray-700">
                      I encountered the Sufi Science Center after a friend forwarded me a podcast episode. It was Dr. Khan speaking about cellular stillness and quantum awe. I couldn't explain it, but I cried. I reached out. Three months later, I found myself in a remote SSC retreat outside Seattle, journaling about mitochondria as mystics.
                    </p>
                    
                    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl">
                      <p className="text-base sm:text-lg text-gray-50 italic">
                        Dr. Kumar, whom I've never seen in person, now feels like my teacher. Sometimes I wake from dreams where I'm standing on a snow-covered slope in Kashmir, holding nothing but light.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                      The Calling – When Light Turned Into Listening
                    </h2>
                  </div>
                
                  <div className="pl-4 sm:pl-16">
                    <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span> When did your scientific path transform into a spiritual calling?
                      </p>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <p className="leading-relaxed text-base sm:text-lg text-gray-700">
                        <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Oddly enough, it was during a neurological experiment. I was observing the brain's reaction to soft light exposure in coma patients. Most readings were predictable — until one patient, completely unresponsive for weeks, showed sudden coherence in their EEG signal right as a nurse whispered a verse of Hafiz beside them.
                      </p>
                      
                      <p className="leading-relaxed text-lg sm:text-xl font-serif italic text-fixnix-lightpurple pl-4 sm:pl-6 border-l-2 border-fixnix-lightpurple">
                        Science didn't explain that. Reverence did.
                      </p>
                      
                      <p className="leading-relaxed text-base sm:text-lg text-gray-700">
                        That moment was my rupture. I walked out of the lab that day and sat under an old cedar tree outside. I remember asking the sky, <span className="italic text-fixnix-lightpurple">What else have we been calling coincidence that is really communion?</span>
                      </p>
                      
                      <p className="leading-relaxed text-base sm:text-lg text-gray-700">
                        Later, during a course with SSC, Dr. Khan used the phrase "intelligence without noise" to describe sacred awareness. That was it. That was what I had been seeking in my post-doctorate labs. That was the light my instruments could measure but never name.
                      </p>
                    </div>
                    
                    <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">Key Insight</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                        The moment when science transcends measurement and becomes reverence for the mystery of existence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    Depth and Awakening
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC: </span> What did you have to unlearn to truly listen through your science?

                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> That evidence must always be visible. That phenomena outside the measurable are irrelevant. I had to unlearn skepticism masquerading as rigor. I had to remember that intuition is also a form of research, one conducted through the soul.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  The first time I felt this unlearning happen was in the middle of a forest. I was attending a biophysics conference in Oregon and had snuck away for a walk between sessions. Sitting against a tree, I noticed how each branch curved toward light not just efficiently, but gracefully. I began weeping. Not because I understood anything new, but because I felt something ancient. That moment taught me: not all truths are taught, some are touched.
                </p>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span> When did silence first become a teacher in your lab?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> I had a habit of leaving one experiment running overnight in silence with dim light. One day, I returned to find the control group, expected to be inert, had increased ATP production. No interference. Just stillness.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  Instead of reporting it as an anomaly, I made a note to myself: Perhaps cells need reverence more than stimulation. That single line changed the way I approached biology. I now teach my students: "Your silence may activate more than your software."
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">Revelation:</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "Not all truths are taught, some are touched."<br/> The journey from measuring to listening.
                      </p>
                    </div>
                    </div>
              </section>

              
              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    Spiritual Responsibility
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> What does spiritual responsibility look like in the context of modern science?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> It means never reducing life to utility. It means remembering that every data point comes from a living being, even if microscopic. Spiritual responsibility means my research must serve something sacred, not just something publishable.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  I now begin every project by writing a short personal prayer in the lab journal: May this work remember its Source. That's not for validation. It's for alignment. And I share this with my students not as doctrine, but as a choice — to remember that cells, too, were breathed into being.
                </p>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span> How do you balance discovery and humility?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> By knowing that every answer I uncover opens a thousand new questions. Humility comes when I admit: I am not mapping reality, I am being shown.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  There was a time when I was offered a prestigious post at a biotech firm to develop a consciousness-measuring device. I declined. Not because I wasn't curious, but because the proposal framed consciousness as a commodity. I realized then: some things are sacred precisely because they refuse to be sold.
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">Core Principle:</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "May this work remember its Source."<br/> Science as service to the sacred, not just the publishable.
                      </p>
                    </div>
                    </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    Ancestral and Mystical Influence
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> What ancestral or mystical currents shape your work today?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> My grandmother was a healer in rural Vermont. She didn't call herself anything spiritual, but she used to say, "Every leaf has a memory. You just need to touch it gently enough to listen." She passed before I understood what she meant. But when I stepped into sacred science, I realized: she was a mystic in disguise.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  I also discovered, through Kashmiri Sufi texts introduced by SSC, that the metaphors I had used for years in consciousness theory, light transmission, subtle fields, were already there in their poetry. It was not new science I had been creating. It was ancient insight returning home.
                </p>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span> Is there a verse or mystic phrase that guides your path?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Yes. A line by Lal Ded: "I searched outside but found the orchard blooming inside me." I keep it on my lab wall. It reminds me that the deeper I look into biology, the closer I come to metaphysics. My data has started to feel like prayer, structured, silent, sincere.
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">Lal Ded</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "I searched outside but found the orchard blooming inside me."
                      </p>
                    </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    Embodied Presence
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> How do you align your body with your intention before you begin work?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> I begin with grounding rituals. No coffee, no screen, just breath and presence. I touch the edges of my notes as if they're petals. Sometimes I hum a tone into the lab space. My colleagues call it eccentric, I call it calibration.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  The body cannot be left behind in sacred inquiry. I've noticed that when my spine is curved in tension, my results tend to follow that curve into confusion. When I realign my posture, not just physically, but energetically, clarity returns.
                </p>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span> Have you witnessed moments of healing in your space that defied explanation?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Yes. One that stays with me: a young research assistant came into the lab shaking from anxiety. I had just completed a session of dhikr in the corner of the room, a private practice, unspoken. She sat near the area and slowly, without knowing what had occurred, said, "I feel like this room is breathing for me."
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  That's when I knew: even walls can hold presence.
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">Practice:</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "My colleagues call it eccentric, I call it calibration."<br/> Embodiment as an essential instrument in sacred science.
                      </p>
                    </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    The Inner World – My Own Stillness
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> How did your connection to SSC deepen your inner world?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span>Dr. Khan once said in a private SSC session: "Not all sanctuaries have doors, some are found in posture." That line sank into me. Through SSC, I learned that scientific rigor and spiritual receptivity are not opposites, they're twin disciplines of attention. And through Dr. Kumar's invisible presence, I learned the power of doing nothing, well.
                </p>
                
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span>What sustains your own equilibrium amidst intellectual pressure?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Silence. Nature. And repetition of sacred Names. There's one tree behind my house, I visit it like a friend. Some evenings, I say nothing to it. I just place my back against it and let its rhythm reset mine.

I also journal not just to think, but to feel. I write letters to God, to Dr. Kumar, to unborn versions of myself. This intimacy has become my lab one no peer review can touch.
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white"> Dr. Khan, SSC:</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "Not all sanctuaries have doors, some are found in posture."
                      </p>
                    </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    The Integration – Sacred Biology as Devotion
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> If your research became a form of worship, how would it look?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> It would look like slowness. Like reverence for the unseen. Every pipette a prayer. Every observation a form of listening. I once told my lab: "Today we're not gathering data, we're honoring mystery." They laughed, but they also paused. And that pause made the data clearer than any software filter.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                  True devotion in biology means treating every cell as a verse, not of randomness, but of remembrance.
                </p>
                <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-fixnix-white"> Devotional Science:</h4>
                      </div>
                      <p className="text-base sm:text-lg text-gray-50">
                      "Every pipette a prayer. Every observation a form of listening."<br/> When research becomes reverence.
                      </p>
                    </div>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    The World Around Me – Reweaving Science and Soul
                    </h2>
                  </div>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span> How long has Sufism shaped your approach?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> Since I was sixteen. A friend gave me a book of Sufi parables. I didn't understand it then. But now, I live inside it.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                Through SSC, I realized what I'd been intuiting for decades was already mapped, not in equations, but in devotion. And Dr. Kumar? I haven't met him. But I've heard him, in silence. I hope to meet him one day in Kashmir, not for answers, but to offer thanks.
                </p>
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Dr. Yasir Feroze, SSC:</span>How do you bring this sacred approach to your field at large?
                      </p>
                    </div>
                <p className="mt-4 leading-relaxed text-lg ml-6">
                  <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span>  Through gentle defiance. I teach a course called "Living Matter: Sacred Threads of Intelligence." It's half science, half contemplation. Students read peer-reviewed journals, and also Hafiz. They study the brain, and also breathwork.
                </p>
                <p className="mt-2 leading-relaxed text-lg ml-6">
                It started small. Now it's a waitlisted course. Young scientists are hungry for permission to believe, not blindly, but beautifully. They don't want to abandon evidence; they want to enrich it.
                </p>
                </div>
              </section>

              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-darkpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    Legacy and Reflection – The Prayer Inside the Code
                    </h2>
                  </div>
                
                
                  
                  <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                      <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        <span className="font-semibold text-fixnix-white">Layla Noor, SSC:</span>When all your data fades, what do you hope remains?
                      </p>
                    </div>
                    
                    <div className="space-y-6 bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-md">
                      <p className="leading-relaxed text-xl text-gray-800">
                        <span className="font-semibold text-fixnix-darkpurple">Dr. Marissa Clarke:</span> I hope someone walks into a room I shaped, physically or intellectually, and feels unburdened. I hope they remember that mystery is not failure, it is fidelity to wonder.
                      </p>
                      
                      <p className="leading-relaxed text-xl text-gray-800">
                        I once watched a student cry in the lab. Not from stress, but because she realized, while studying stem cells, that she too was once just a whisper of light becoming form. That's what I want to leave behind. Not a formula, but a frequency.
                      </p>
                      
                      <p className="leading-relaxed text-2xl font-serif italic text-fixnix-darkpurple text-center mt-8 px-4">
                        Let my legacy be this: that science, when rooted in stillness, becomes a form of worship.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-16 p-12 bg-gradient-to-r from-fixnix-lightpurple-light to-fixnix-darkpurple rounded-2xl shadow-lg border border-white transform hover:scale-105 transition-transform duration-300">
                    <p className="text-center text-white">
                      <span className="block mb-6 text-lg uppercase tracking-widest font-semibold">Closing Reflection</span>
                      <span className="text-2xl md:text-3xl font-serif italic">"The universe does not hide its secrets, it whispers them. But only the still-hearted can hear."</span>
                    </p>
                  </div>
                
              </section>
            </div>
            
            {/* Footer decoration */}
            <div className="mt-24 mb-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}