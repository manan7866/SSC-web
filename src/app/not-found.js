import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Error404() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/* Error Page Start */}
        <section className="min-h-screen bg-gradient-to-br from-fixnix-lightpurple via-fixnix-darkpurple to-purple-900 flex items-center justify-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full opacity-50"></div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 50,50" fill="white" />
              <polygon points="100,100 0,100 50,50" fill="white" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                {/* 404 Number */}
                <div className="mb-8">
                  <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      404
                    </span>
                  </h1>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Oops! Page Not Found
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    The page you are looking for does not exist. It might have been moved, deleted, or you entered the wrong URL.
                  </p>

                  {/* Decorative Element */}
                  <div className="flex justify-center my-8">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                      href="/" 
                      className="group relative px-8 py-4 bg-white text-fixnix-darkpurple font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="relative z-10">Back To Home</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                    </Link>

                    
                  </div>

                  
                  
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-16 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-white/25 rounded-full animate-pulse delay-1500"></div>
        </section>
        {/* Error Page End */}
      </Layout>
    </>
  );
}
