"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrackingTech() {
  return (
    <section className="bg-frexia-orange w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: screen mockup (Rent Co. Inspired Dashboard) */}
        <div className="w-full md:w-[50%] max-w-[580px] relative min-h-[380px] bg-slate-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/50 [transform:perspective(1000px)_rotateY(-12deg)_rotateX(6deg)_rotateZ(-2deg)] hover:[transform:none] transition-all duration-500 ease-out origin-center shrink-0">
          {/* Header / Top Navbar */}
          <div className="h-14 bg-white border-b border-gray-150 flex items-center justify-between px-6 z-10 shrink-0">
            <div className="flex items-center gap-6">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-frexia-orange flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-sm text-gray-800 tracking-tight">Frexia Log.</span>
              </div>
              {/* Search Bar */}
              <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-3.5 py-1.5 w-60">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-[11px] text-gray-400 font-medium">Search active shipments...</span>
              </div>
            </div>
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-frexia-orange-light text-frexia-orange flex items-center justify-center font-bold text-xs">
                JD
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[11px] font-bold text-gray-800 leading-none">John Doe</span>
                <span className="text-[9px] text-gray-400 font-medium">Logistics Admin</span>
              </div>
            </div>
          </div>

          {/* Inner Dashboard Body */}
          <div className="flex flex-1 overflow-hidden min-h-0">
            {/* Mini Sidebar */}
            <div className="w-16 border-r border-gray-150 bg-white flex flex-col items-center py-4 gap-5 shrink-0">
              {[
                { icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />, active: false },
                { icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, active: false },
                { icon: <><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>, active: true },
                { icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />, active: false },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${
                    item.active ? "bg-frexia-orange text-white" : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
              ))}
            </div>

            {/* Main Content Workspace (Split layout: map + sidebar) */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0 bg-white">
              {/* Map Area */}
              <div className="flex-1 relative h-full bg-gray-50 flex items-center justify-center overflow-hidden">
                {/* Grid lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />
                <div className="absolute inset-0 w-full h-full opacity-90 p-4 scale-[5.0] origin-center">
                  <Image src="/map/OJO4YQ1.svg" alt="World Map" fill sizes="80vw" className="object-contain filter contrast-125" />
                </div>

                {/* Ship route vector line (adjusted viewBox to match 5x map zoom) */}
                <svg viewBox="200 80 300 150" className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                  {/* NY -> Rotterdam route */}
                  <path d="M 240 145 Q 335 125 430 110" fill="none" stroke="#D96C2C" strokeWidth="3.5" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="60;0" dur="4s" repeatCount="indefinite" />
                  </path>
                  {/* Rotterdam marker */}
                  <circle cx="430" cy="110" r="7" fill="#D96C2C" />
                  <circle cx="430" cy="110" r="28" fill="#D96C2C" opacity="0">
                    <animate attributeName="r" values="7;28" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  {/* New York marker */}
                  <circle cx="240" cy="145" r="5" fill="#D96C2C" />
                </svg>

                {/* Floating map controls */}
                <div className="absolute top-4 left-4 bg-white border border-gray-100 rounded-lg shadow-md p-1.5 flex flex-col gap-1 z-30">
                  <button className="w-7 h-7 rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-600">+</button>
                  <button className="w-7 h-7 rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-600">-</button>
                </div>
              </div>

              {/* Dashboard Side Widget (Fleet detail & Live status list) */}
              <div className="w-full md:w-[280px] bg-white flex flex-col overflow-y-auto shrink-0 border-t md:border-t-0 border-gray-100 text-left">
                {/* Fleet status card */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Active Vessel</span>
                    <span className="text-[9px] font-bold text-frexia-orange bg-orange-50 px-2 py-0.5 rounded-full">FX-9023</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-gray-800 leading-tight">POLESTAR 520 DDS</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Current Speed</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">22.4 KN/H</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Distance Traveled</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">486 KM</p>
                    </div>
                  </div>
                </div>

                {/* Live status feed list */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Live Tracking</span>
                    <span className="text-[9px] font-bold text-frexia-orange hover:underline cursor-pointer">See All</span>
                  </div>
                  {/* Log items */}
                  {[
                    { code: "FX-9023", from: "Rotterdam", to: "New York", status: "Transit", pct: 65, color: "text-frexia-orange" },
                    { code: "FX-4512", from: "Singapore", to: "Dubai", status: "Docked", pct: 100, color: "text-gray-400" },
                  ].map((ship) => (
                    <div key={ship.code} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-800 font-mono">{ship.code}</span>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase ${ship.pct === 100 ? "bg-gray-200 text-gray-600" : "bg-orange-100 text-frexia-orange"}`}>
                          {ship.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-800 font-semibold flex items-center justify-between">
                        <span>{ship.from}</span>
                        <span className="text-gray-400 font-normal">→</span>
                        <span>{ship.to}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-frexia-orange" style={{ width: `${ship.pct}%` }} />
                      </div>
                      <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                        <span>{ship.pct}% Done</span>
                        <span>{ship.pct === 100 ? "Delivered" : "ETA: 1.5d"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 text-white text-left justify-center">
          <span className="text-white text-xs font-bold tracking-widest uppercase">Technology</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight">
            Technology Powering <span className="text-white italic">Efficiency</span>
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            We ensure every shipment reaches its destination safely, on time, and with complete transparency. Access real-time shipment tracking and customer support to maintain full control over your supply chain.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-white font-bold text-sm border-b border-white/30 pb-1 w-fit hover:border-white transition-colors"
          >
            Track Your Cargo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
