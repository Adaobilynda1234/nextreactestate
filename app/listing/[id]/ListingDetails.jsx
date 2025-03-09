"use client";

import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaPhone,
  FaCalendarAlt,
  FaEnvelope,
  FaUser,
  FaTimes,
  FaVideo
} from "react-icons/fa";
import { useState } from "react";

export default function ListingDetails({ listing }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in this ${listing.type === "rent" ? "rental" : "property"}. Please contact me with more information.`
  });
  
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: `I'd like to schedule a viewing for ${listing.name} at ${listing.address}.`
  });
  
  const adminPhone = "(080) 456-7890"; // You can replace this with your actual admin phone
  const availableTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  
  // Generate dates for the next 14 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // Skip weekends (0 is Sunday, 6 is Saturday)
      const day = nextDate.getDay();
      if (day !== 0 && day !== 6) {
        const formattedDate = nextDate.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    
    return dates;
  };
  
  const availableDates = generateAvailableDates();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleMeetingChange = (e) => {
    setMeetingData({
      ...meetingData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For example, sending the data to your backend API
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our agent will contact you shortly.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in this ${listing.type === "rent" ? "rental" : "property"}. Please contact me with more information.`
    });
  };

  const handleMeetingSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the meeting request
    console.log("Meeting requested:", meetingData);
    
    // Create Google Meet link (this would typically be done server-side)
    const googleMeetLink = "https://meet.google.com/new";
    
    // Format the meeting details for email
    const subject = encodeURIComponent(`Property Viewing: ${listing.name}`);
    const body = encodeURIComponent(
      `Name: ${meetingData.name}\n` +
      `Email: ${meetingData.email}\n` +
      `Date: ${meetingData.date}\n` +
      `Time: ${meetingData.time}\n` +
      `Property: ${listing.name} at ${listing.address}\n\n` +
      `Notes: ${meetingData.notes}\n\n` +
      `Google Meet Link: ${googleMeetLink}`
    );
    
    // Open email client with pre-filled details
    window.open(`mailto:agent@realestate.com?subject=${subject}&body=${body}`);
    
    alert("Meeting request sent! The agent will confirm your Google Meet appointment shortly.");
    setShowMeetingModal(false);
    
    // Reset form
    setMeetingData({
      name: "",
      email: "",
      date: "",
      time: "",
      notes: `I'd like to schedule a viewing for ${listing.name} at ${listing.address}.`
    });
  };

  const openMeetingModal = () => {
    setShowMeetingModal(true);
  };

  const closeMeetingModal = () => {
    setShowMeetingModal(false);
  };

  return (
    <main className="bg-gray-50">
      {/* Image Gallery Section */}
      <div className="relative">
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-32">
          <div className="max-w-6xl mx-auto px-4 pt-16">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </span>
              {listing.offer && (
                <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Property Header */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    {listing.name}
                  </h1>
                  <p className="flex items-center gap-2 text-slate-600 mb-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                    {listing.address}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <p className="text-3xl font-bold text-slate-800">
                    ${listing.offer
                      ? listing.discountPrice.toLocaleString("en-US")
                      : listing.regularPrice.toLocaleString("en-US")}
                    {listing.type === "rent" && <span className="text-slate-600 text-lg font-normal">/month</span>}
                  </p>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-gray-100">
                <div className="flex flex-col items-center text-center p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaBed className="text-2xl text-blue-600 mb-2" />
                  <span className="font-semibold text-slate-700">
                    {listing.bedrooms} {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaBath className="text-2xl text-blue-600 mb-2" />
                  <span className="font-semibold text-slate-700">
                    {listing.bathrooms} {listing.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaParking className="text-2xl text-blue-600 mb-2" />
                  <span className="font-semibold text-slate-700">
                    {listing.parking ? "Parking Available" : "No Parking"}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaChair className="text-2xl text-blue-600 mb-2" />
                  <span className="font-semibold text-slate-700">
                    {listing.furnished ? "Furnished" : "Unfurnished"}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">About this property</h2>
              <p className="text-slate-600 leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Location</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                  <p>{listing.address}</p>
                  <p className="text-sm mt-2">Map view coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Information */}
          <div className="lg:w-96">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Interested in this property?</h2>
              
              {/* Direct Contact */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-slate-800 mb-2">Contact an agent</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <FaUser className="text-lg" />
                  </div>
                  <div>
                    <p className="font-medium">Richard Johnson</p>
                    <p className="text-sm text-slate-600">Property Consultant</p>
                  </div>
                </div>
                <a 
                  href={`tel:${adminPhone}`} 
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium w-full mb-3 transition-colors"
                >
                  <FaPhone /> Call: {adminPhone}
                </a>
                <button 
                  onClick={openMeetingModal}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium w-full transition-colors"
                >
                  <FaVideo /> Schedule Virtual Viewing
                </button>
              </div>
              
              {/* Inquiry Form */}
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Send an inquiry</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={`I'm interested in this ${listing.type === "rent" ? "rental" : "property"}. Please contact me with more information.`}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-lg font-medium w-full transition-colors"
                  >
                    <FaEnvelope /> Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Meet Scheduling Modal */}
      {showMeetingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-slate-800">Schedule a Virtual Viewing</h3>
              <button onClick={closeMeetingModal} className="text-slate-500 hover:text-slate-800">
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleMeetingSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={meetingData.name}
                    onChange={handleMeetingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={meetingData.email}
                    onChange={handleMeetingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <select
                    id="date"
                    value={meetingData.date}
                    onChange={handleMeetingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select a date</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <select
                    id="time"
                    value={meetingData.time}
                    onChange={handleMeetingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea
                    id="notes"
                    rows="3"
                    value={meetingData.notes}
                    onChange={handleMeetingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Any specific questions or requirements for the viewing?"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium w-full transition-colors"
                  >
                    <FaVideo /> Request Google Meet Viewing
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}