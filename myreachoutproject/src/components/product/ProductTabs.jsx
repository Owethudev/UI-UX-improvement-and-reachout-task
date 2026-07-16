import { useState } from "react";

const tabs = [
  { id: "description", label: "Description" },
  { id: "specs", label: "Specifications" },
  { id: "reviews", label: "Reviews" },
];

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id ? "bg-[#111111] text-white shadow-lg shadow-black/10" : "bg-[#f5f5f0] text-[#4b5563]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-[#f7f7f2] p-6 text-sm leading-8 text-[#4b5563]">
        {activeTab === "description" && (
          <p>{product.description}</p>
        )}
        {activeTab === "specs" && (
          <ul className="grid gap-3 md:grid-cols-2">
            {product.specs.map((spec) => (
              <li key={spec} className="rounded-full bg-white px-4 py-2">{spec}</li>
            ))}
          </ul>
        )}
        {activeTab === "reviews" && (
          <p>
            {product.reviews} verified buyers rated this product highly for performance, design, and support.
          </p>
        )}
      </div>
    </div>
  );
}
