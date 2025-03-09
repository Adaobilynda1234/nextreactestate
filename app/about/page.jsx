import Link from "next/link";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('/Lekki.jpg')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-amber-400">Sahand Estate</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner in finding the perfect property since 2010.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <div className="h-64 bg-slate-300 bg-[url('/Teamimage.jpg')] bg-cover bg-center"></div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-slate-800 mb-6 relative">
              <span className="relative z-10">Our Mission</span>
              <span className="absolute -bottom-2 left-0 w-20 h-2 bg-amber-400 z-0"></span>
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Sahand Estate is a leading real estate agency that specializes in
              helping clients buy, sell, and rent properties in the most
              desirable neighborhoods. Our team of experienced agents is
              dedicated to providing exceptional service and making the buying
              and selling process as smooth as possible.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mission is to help our clients achieve their real estate goals
              by providing expert advice, personalized service, and a deep
              understanding of the local market. Whether you are looking to buy,
              sell, or rent a property, we are here to help you every step of
              the way.
            </p>
          </div>
        </div>

        {/* Key Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-10 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                Expertise
              </h3>
              <p className="text-slate-600 text-center">
                Our agents have unparalleled knowledge of local markets and
                property values.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                Personalized Service
              </h3>
              <p className="text-slate-600 text-center">
                We tailor our approach to each client's unique needs and
                preferences.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                Trust & Integrity
              </h3>
              <p className="text-slate-600 text-center">
                We build lasting relationships based on transparency and honest
                guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Team Info */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6 relative inline-block">
            <span className="relative z-10">Our Team</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-400 opacity-50 z-0"></span>
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Our team of agents has a wealth of experience and knowledge in the
            real estate industry, and we are committed to providing the highest
            level of service to our clients. We believe that buying or selling a
            property should be an exciting and rewarding experience, and we are
            dedicated to making that a reality for each and every one of our
            clients.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href ="/create-listing" className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 inline-flex items-center">
              create house listings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-amber-400">250+</p>
              <p className="text-gray-300 mt-2">Properties Sold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-400">15+</p>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-400">95%</p>
              <p className="text-gray-300 mt-2">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-400">10+</p>
              <p className="text-gray-300 mt-2">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
