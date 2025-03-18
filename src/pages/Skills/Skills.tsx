import React from "react";
import Waves from "@/components/ui/Waves";

export default function Skills() {
  return (
    <div id="skills" className="relative w-full overflow-hidden bg-gradient-to-b from-[#090420] to-[#0c0524]">
      {/* Waves Background */}
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(7, 5, 4)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={30}
          yGap={16}
          className=""
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-widest bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl md:text-5xl lg:text-6xl">
            MY SKILLS
          </h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-fuchsia-600 to-white mx-auto rounded-full"></div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {/* Front-End Card */}
          <div className="relative rounded-3xl backdrop-blur-sm bg-[#070504]/70 overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02] border-2">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
              <div className="absolute inset-0 rounded-3xl bg-[#070504]/70 backdrop-blur-sm"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-fuchsia-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#070504]">FE</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center bg-gradient-to-br from-white via-fuchsia-600 text-transparent bg-clip-text drop-shadow-xl mb-4">
                Front-End
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "HTML", "JavaScript", "Redux"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="rounded-lg bg-blue-900/40 backdrop-blur-sm p-2 text-center text-white text-sm"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Back-End Card */}
          <div className="relative border-2 rounded-3xl backdrop-blur-sm bg-[#070504]/70 overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
              <div className="absolute inset-0 rounded-3xl bg-[#070504]/70 backdrop-blur-sm"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-fuchsia-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#070504]">BE</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center bg-gradient-to-br from-white via-fuchsia-600 text-transparent bg-clip-text drop-shadow-xl mb-4">
                Back-End
              </h3>
              <div className="grid grid-cols-2 justify-center items-center gap-x-4 gap-y-8">
                {["Node.js", "Express.js", "PostgreSQL", "REST API"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg bg-blue-900/40 backdrop-blur-sm p-2 text-center text-white text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="relative rounded-3xl backdrop-blur-sm bg-[#070504]/70 overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1 border-2">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
              <div className="absolute inset-0 rounded-3xl bg-[#070504]/70 backdrop-blur-sm"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-fuchsia-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#070504]">TL</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center bg-gradient-to-br from-white via-fuchsia-600 text-transparent bg-clip-text drop-shadow-xl mb-4">Tools</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
                {["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel", "Netlify"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg bg-blue-900/40 backdrop-blur-sm p-2 text-center text-white text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
