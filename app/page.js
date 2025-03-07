import ListingItem from "@/components/ListingItem";
import Link from "next/link";

export default async function Home() {
  let rentListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        type: "rent",
        limit: 4,
        order: "asc",
      }),
      cache: "no-store",
    });
    const data = await result.json();
    rentListings = data;
  } catch (error) {
    rentListings = { title: "Failed to load listing" };
  }

  let saleListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        type: "sale",
        limit: 4,
        order: "asc",
      }),
      cache: "no-store",
    });
    const data = await result.json();
    saleListings = data;
  } catch (error) {
    saleListings = { title: "Failed to load listing" };
  }

  let offerListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        limit: 4,
        order: "asc",
        offer: true,
      }),
      cache: "no-store",
    });
    const data = await result.json();
    offerListings = data;
  } catch (error) {
    offerListings = { title: "Failed to load listing" };
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50 z-10" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0"
          className="w-full h-[650px] object-cover"
          alt="Featured property"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-xl">
              <h1 className="text-white font-bold text-4xl lg:text-6xl mb-4 leading-tight">
                Find your next <span className="text-blue-400">perfect</span> place with ease
              </h1>
              <p className="text-gray-200 text-sm md:text-base mb-8">
                Sahand Estate is the premier destination for finding your ideal home.
                We offer a curated selection of properties to match your lifestyle.
              </p>
              <Link
                href="/search"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
              >
                <span>Start your search</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Property Categories */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Discover Our Properties</h2>
            <p className="text-gray-500">Browse our hand-picked selection of premium properties</p>
          </div>

          {/* Listings Sections */}
          <div className="space-y-16">
            {/* Offers Section */}
            {offerListings && offerListings.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Special Offers
                  </h2>
                  <Link
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center"
                    href="/search?offer=true"
                  >
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {offerListings.map((listing) => (
                    <ListingItem listing={listing} key={listing.id} />
                  ))}
                </div>
              </div>
            )}

            {/* Rentals Section */}
            {rentListings && rentListings.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Properties for Rent
                  </h2>
                  <Link
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center"
                    href="/search?type=rent"
                  >
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {rentListings.map((listing) => (
                    <ListingItem listing={listing} key={listing.id} />
                  ))}
                </div>
              </div>
            )}

            {/* Sales Section */}
            {saleListings && saleListings.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Properties for Sale
                  </h2>
                  <Link
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-center"
                    href="/search?type=sale"
                  >
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {saleListings.map((listing) => (
                    <ListingItem listing={listing} key={listing.id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you find the perfect property that matches your needs and budget.
          </p>
          <Link
            href="/search"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
          >
            Start Browsing
          </Link>
        </div>
      </div>
    </div>
  );
}