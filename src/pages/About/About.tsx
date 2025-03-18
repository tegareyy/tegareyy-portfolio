export default function About() {
  return (
    <div id="about" className="relative min-h-screen w-full bg-[#0c0524] bg-cover bg-center bg-no-repeat py-10 border-y-2">
      {/* Content Container */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-widest bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl md:text-5xl lg:text-6xl">
            ABOUT ME
          </h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-fuchsia-600 via-white to-fuchsia-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* KIRI - profil & skills */}
          <div className="flex flex-col gap-y-6">
            <div className="relative rounded-3xl bg-[#070504] p-6 shadow-lg overflow-hidden">
              {/* border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
                <div className="absolute inset-0 rounded-3xl bg-[#070504] border-2"></div>
              </div>
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl">
                  Profil
                </h2>
                <p className="text-base text-justify text-white leading-loose">
                  Saya seorang Full-Stack Developer yang bersemangat menciptakan aplikasi web yang indah, fungsional,
                  dan intuitif. Dengan latar belakang teknik industri, saya menggabungkan efisiensi, desain, dan
                  pengalaman pengguna untuk membangun solusi yang optimal dan berdampak.
                </p>
                <p className="mt-4 text-base text-justify text-white leading-loose">
                  Keahlian saya meliputi React, Next.js, Node.js, dan berbagai teknologi modern lainnya yang
                  memungkinkan saya mengembangkan aplikasi web yang responsif, cepat, dan mudah digunakan.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl bg-[#070504] p-6 shadow-lg overflow-hidden border-2">
              {/* border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
                <div className="absolute inset-0 rounded-3xl bg-[#070504]"></div>
              </div>
              {/* Skills */}
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold bg-gradient-to-br from-fuchsia-600 via-white to-fuchsia-600 text-transparent bg-clip-text drop-shadow-xl">
                  Keahlian
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Rest API"].map((skill) => (
                    <div key={skill} className="rounded-lg bg-gradient-to-br from-fuchsia-600 via-white to-fuchsia-600 p-3 text-center text-[#070504] font-bold tracking-wide">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KANAN - pendidikan & pengalaman */}
          <div className="flex flex-col gap-y-6">
            <div className="relative rounded-3xl bg-[#070504] p-6 shadow-lg overflow-hidden border-2">
              {/* border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-fuchsia-600 via-white to-fuchsia-600">
                <div className="absolute inset-0 rounded-3xl bg-[#070504]"></div>
              </div>
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold bg-gradient-to-br from-fuchsia-600 via-white to-fuchsia-600 text-transparent bg-clip-text drop-shadow-xl">
                  Pendidikan
                </h2>
                <div className="space-y-4">
                  <div
                    className="border-l-4 border-l-gradient pl-4"
                    style={{ borderImage: "linear-gradient(to bottom, #db67eb, #db2777) 1" }}
                  >
                    <h3 className="text-xl font-semibold text-white">Teknik Informatika</h3>
                    <p className="text-gray-300">Politeknik Negeri Batam</p>
                    <p className="text-sm text-gray-400">2021 - Now</p>
                  </div>
                  <div
                    className="border-l-4 border-l-gradient pl-4"
                    style={{ borderImage: "linear-gradient(to bottom, #db67eb, #db2777) 1" }}
                  >
                    <h3 className="text-xl font-semibold text-white">Full-Stack Web Development</h3>
                    <p className="text-gray-300">Purwadhika</p>
                    <p className="text-sm text-gray-400">2024 - Now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl bg-[#070504] p-6 shadow-lg overflow-hidden border-2">
              {/* border grandiet */}
              <div className="absolute inset-0 rounded-3xl p-[4px] bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600">
                <div className="absolute inset-0 rounded-3xl bg-[#070504]"></div>
              </div>
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl">
                  Pengalaman
                </h2>
                <div className="space-y-4">
                  <div
                    className="border-l-4 border-l-gradient pl-4"
                    style={{ borderImage: "linear-gradient(to bottom, #db67eb, #db2777) 1" }}
                  >
                    <h3 className="text-xl font-semibold text-white">Student Full Stack Web Development</h3>
                    <p className="text-gray-300">Purwadhika</p>
                    <p className="text-sm text-gray-400">2024 - Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
