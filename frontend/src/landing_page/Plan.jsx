import React, { useState } from "react";

const plans = [
  {
    name: "Basic Care",
    monthlyPrice: "₹4,999",
    yearlyPrice: "₹54,989",
    features: [
      { name: "Home Medical Visits", value: "Once a month", included: true },
      {
        name: "24/7 Emergency Support",
        value: "Standard response time",
        included: true,
      },
      {
        name: "Health Monitoring",
        value: "Basic vitals check",
        included: true,
      },
      {
        name: "Medication Management",
        value: "Reminders only",
        included: true,
      },
      {
        name: "Personalized Care Plan",
        value: "Not included",
        included: false,
      },
      { name: "Family Updates", value: "Monthly email", included: true },
      {
        name: "Telehealth Consultations",
        value: "2 per month",
        included: true,
      },
      { name: "Nutritional Guidance", value: "General advice", included: true },
      { name: "Physical Therapy", value: "Not included", included: false },
      {
        name: "Social Activities Coordination",
        value: "Not included",
        included: false,
      },
    ],
    recommended: false,
  },
  {
    name: "Standard Care",
    monthlyPrice: "₹9,999",
    yearlyPrice: "₹109,989",
    features: [
      { name: "Home Medical Visits", value: "Twice a month", included: true },
      {
        name: "24/7 Emergency Support",
        value: "Priority response",
        included: true,
      },
      {
        name: "Health Monitoring",
        value: "Comprehensive check",
        included: true,
      },
      {
        name: "Medication Management",
        value: "Full management",
        included: true,
      },
      { name: "Personalized Care Plan", value: "Included", included: true },
      { name: "Family Updates", value: "Weekly calls", included: true },
      { name: "Telehealth Consultations", value: "Unlimited", included: true },
      {
        name: "Nutritional Guidance",
        value: "Personalized plan",
        included: true,
      },
      {
        name: "Physical Therapy",
        value: "2 sessions per month",
        included: true,
      },
      {
        name: "Social Activities Coordination",
        value: "Basic",
        included: true,
      },
    ],
    recommended: true,
  },
  {
    name: "Premium Care",
    monthlyPrice: "₹19,999",
    yearlyPrice: "₹219,989",
    features: [
      { name: "Home Medical Visits", value: "Weekly", included: true },
      {
        name: "24/7 Emergency Support",
        value: "Immediate response",
        included: true,
      },
      {
        name: "Health Monitoring",
        value: "Advanced with wearables",
        included: true,
      },
      {
        name: "Medication Management",
        value: "Full management + delivery",
        included: true,
      },
      {
        name: "Personalized Care Plan",
        value: "Included with specialist input",
        included: true,
      },
      { name: "Family Updates", value: "Daily reports", included: true },
      {
        name: "Telehealth Consultations",
        value: "Unlimited with specialists",
        included: true,
      },
      {
        name: "Nutritional Guidance",
        value: "Personalized plan with chef",
        included: true,
      },
      { name: "Physical Therapy", value: "Unlimited sessions", included: true },
      {
        name: "Social Activities Coordination",
        value: "Full service",
        included: true,
      },
    ],
    recommended: false,
  },
];

export default function Plan() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section className="bg-gradient-to-b from-teal-800 to-teal-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Care Plan
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
            Select the plan that best fits your loved one's needs
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-teal-100">Monthly</span>
            <button
              className={`w-12 h-6 rounded-full p-1 ${
                billingCycle === "yearly" ? "bg-teal-500" : "bg-gray-300"
              }`}
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span className="text-teal-100">Yearly (Save 10%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={plan.name} className="flex flex-col h-full">
              <div
                className={`flex flex-col h-full rounded-lg overflow-hidden ${
                  plan.recommended
                    ? "bg-teal-50 border-[#F5A623] border-2 shadow-lg"
                    : "bg-white"
                }`}
              >
                <div className="p-6">
                  <div className="text-center">
                    {plan.recommended && (
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-[#F5A623] rounded-full">
                        Recommended
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-teal-800">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="text-center text-3xl font-semibold text-teal-600 mt-4">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                    <span className="text-sm font-normal block text-teal-500">
                      per {billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                </div>
                <div className="flex-grow p-6">
                  <ul className="space-y-4">
                    {plan.features.slice(0, 5).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-between"
                      >
                        <span className="text-teal-700 flex items-center">
                          {feature.name}
                          <span
                            className="ml-1 text-teal-400 cursor-help"
                            title={feature.value}
                          >
                            ?
                          </span>
                        </span>
                        {feature.included ? (
                          <svg
                            className="h-5 w-5 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 mt-auto">
                  <button
                    className={`w-full py-2 px-4 rounded ${
                      plan.recommended
                        ? "bg-[#F5A623] hover:bg-[#E09612]"
                        : "bg-teal-600 hover:bg-teal-700"
                    } text-white font-semibold`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex">
              <button
                className={`flex-1 py-2 px-4 ${
                  activeTab === "features"
                    ? "bg-teal-600 text-white"
                    : "bg-teal-100 text-teal-800"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Detailed Comparison
              </button>
              <button
                className={`flex-1 py-2 px-4 ${
                  activeTab === "faq"
                    ? "bg-teal-600 text-white"
                    : "bg-teal-100 text-teal-800"
                }`}
                onClick={() => setActiveTab("faq")}
              >
                FAQ
              </button>
            </div>
            <div className="p-6">
              {activeTab === "features" ? (
                <>
                  <h3 className="text-2xl font-bold text-teal-800 mb-4">
                    Detailed Features Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="bg-teal-100">
                          <th className="text-left py-3 px-4">Feature</th>
                          {plans.map((plan) => (
                            <th
                              key={plan.name}
                              className="text-center py-3 px-4"
                            >
                              {plan.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {plans[0].features.map((feature, index) => (
                          <tr
                            key={feature.name}
                            className={index % 2 === 0 ? "bg-teal-50" : ""}
                          >
                            <td className="py-3 px-4 font-medium">
                              {feature.name}
                            </td>
                            {plans.map((plan) => (
                              <td
                                key={`${plan.name}-${feature.name}`}
                                className="text-center py-3 px-4"
                              >
                                <span
                                  className="flex items-center justify-center"
                                  title={plan.features[index].value}
                                >
                                  {plan.features[index].included ? (
                                    <svg
                                      className="h-5 w-5 text-green-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="h-5 w-5 text-red-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  )}
                                  <svg
                                    className="h-4 w-4 text-teal-400 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-teal-800 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-teal-700">
                        Can I change my plan later?
                      </h4>
                      <p>
                        Yes, you can upgrade or downgrade your plan at any time.
                        Changes will be reflected in your next billing cycle.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700">
                        What's included in the health monitoring?
                      </h4>
                      <p>
                        Health monitoring includes regular vital checks,
                        medication adherence tracking, and early detection of
                        health issues. The extent of monitoring varies by plan.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700">
                        How do I schedule a home visit?
                      </h4>
                      <p>
                        Home visits can be scheduled through our app or by
                        calling our customer service. We'll match you with the
                        best available healthcare professional based on your
                        plan.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700">
                        What if I need more services than my plan offers?
                      </h4>
                      <p>
                        You can always add additional services à la carte or
                        consider upgrading to a higher-tier plan for more
                        comprehensive care.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
