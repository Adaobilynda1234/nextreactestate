import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <Link href={`/listing/${listing._id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Badge for offer */}
          {listing.offer && (
            <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Special Offer
            </div>
          )}
          
          {/* Property type badge */}
          <div className="absolute top-3 right-3 z-10 bg-slate-900/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {listing.type === "rent" ? "For Rent" : "For Sale"}
          </div>
          
          <img
            src={
              listing.imageUrls[0] ||
              "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
            }
            alt="listing cover"
            className="h-[240px] w-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-lg text-slate-800 truncate">
              {listing.name}
            </h3>
            <span className="text-blue-600 font-bold">
              ${listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && <span className="text-slate-600 font-normal text-sm">/mo</span>}
            </span>
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">
            {listing.description}
          </p>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-xs">
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Beds `
                    : `${listing.bedrooms} Bed `}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-xs">
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Baths `
                    : `${listing.bathrooms} Bath `}
                </span>
              </div>
            </div>
            <div className="text-sm text-blue-600 font-medium">View details</div>
          </div>
        </div>
      </Link>
    </div>
  );
}