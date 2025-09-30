"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Send, Phone, Mail, MapPin } from "lucide-react";


export default function ContactUs() {
  return (
    <section className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            Our dedicated support team is available 24/7 to assist you and answer all your questions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message to our team"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
             <div className="flex justify-center">
               <Button
                size="lg"
                className="bg-green-700 hover:bg-emerald-900 text-white"
              >
                Contact us
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-700 hover:bg-emerald-900 text-white p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Connect - Call - WhatsApp us on</p>
                <p className="text-gray-600">+965 41147331</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-red-700 hover:bg-emerald-900 text-white p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Drop us an email at</p>
                <p className="text-gray-600">info@cubiclabs.net</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 hover:bg-emerald-900 text-white p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Visit us at</p>
                <p className="text-gray-600">
                  Kuwait City, Qibla, Salhiya Street, Luhaib (3), Office No: 213
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
