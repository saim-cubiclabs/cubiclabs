"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

const plans = [
  {
    name: "E-commerce Starts (Basic Plan)",
    price: "150 KWD/ yearly",
    features: [
      "Simple ready-made layout",
      "Online Store Setup",
      "Basic Pages (About, Contact, etc.)",
      "Domain Connection",
      "Basic Shipping Setup",
      "Default Order Emails",
      "Cash on Delivery (COD)",
      "Social Media Links",
      "Basic Stock Tracking",
      "Basic SEO Setup",
      "WhatsApp Chat",
      "Training & Support",
    ],
    notIncluded: ["Blog", "POS (In-store Selling)"],
    highlighted: false,
  },
  {
    name: "E-commerce Starts (Pro Plan)",
    price: "200 KWD/ yearly",
    features: [
      "More polished layout",
      "Free domain included",
      "Up to 500 products",
      "Up to 3 payment methods",
      "Local shipping setup",
      "With better content layout",
      "Product sizes, colors, etc.",
      "Better homepage SEO",
      "Chat with timing options",
      "Branded emails",
      "Better placement",
      "Google & Facebook tracking",
      "Simple blog",
      "Up to 5 users",
      "Basic POS",
      "30-min call daily support",
    ],
    notIncluded: [],
    highlighted: false,
  },
  {
    name: "Custom Web Solution Starts (Premium Plan)",
    price: "300 KWD/ yearly",
    features: [
      "Custom layout with edits",
      "Free domain + setup help",
      "Unlimited products",
      "All available payment methods",
      "Full shipping setup by region",
      "With map and full contact info",
      "Advanced SEO for all pages",
      "Custom chat experience",
      "Full branded email system",
      "With extra settings",
      "With advanced tracking tools",
      "Blog with tags & highlights",
      "Bulk uploads & advanced control",
      "Up to 10 users",
      "Full POS setup",
      "1-hour call + priority support",
    ],
    notIncluded: [],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="mt-15 mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pricing Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose the best plan for your business
        </p>

        <div className="mt-15 mb-15 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg p-8 flex flex-col justify-between ${
                plan.highlighted
                  ? "bg-green-700 text-white scale-105"
                  : "bg-white text-gray-900"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.highlighted ? "text-white" : "text-green-700"
                        }`}
                      />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-red-500">
                      <XCircleIcon className="h-5 w-5 flex-shrink-0" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/contactus">
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold ${
                    plan.highlighted
                      ? "bg-white text-green-700 hover:bg-gray-100"
                      : "bg-green-700 text-white hover:bg-emerald-900"
                  }`}
                >
                  Get Started Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
