export function DeviceMockup() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center" style={{ perspective: '1500px' }}>
      {/* Main Laptop - Base element */}
      <div className="relative z-10 w-[300px] sm:w-[380px]" style={{ transform: 'rotateX(10deg) rotateY(-15deg) translateY(30px)' }}>
        <div className="bg-gray-800 rounded-t-lg p-2 sm:p-2.5 shadow-2xl">
          <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded aspect-video overflow-hidden">
            <div className="h-full p-3 sm:p-4">
              <div className="h-2 sm:h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="space-y-1.5">
                <div className="h-1.5 sm:h-2 bg-gray-200 rounded"></div>
                <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-gray-700"></div>
        <div className="h-2 sm:h-3 bg-gray-400 mx-auto w-16 sm:w-20 rounded-b"></div>
      </div>

      {/* Floating Screen 1 - Left back */}
      <div
        className="absolute w-[220px] sm:w-[280px] h-[140px] sm:h-[180px] bg-white rounded shadow-2xl z-15 overflow-hidden border border-gray-200"
        style={{
          transform: 'rotateX(15deg) rotateY(-30deg) rotateZ(-10deg) translate3d(-120px, -110px, 20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="p-3 sm:p-5">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded"></div>
            <div className="flex-1">
              <div className="h-2 bg-gray-300 rounded w-2/3 mb-1"></div>
              <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded"></div>
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>

      {/* Floating Screen 2 - Teal center */}
      <div
        className="absolute w-[240px] sm:w-[300px] h-[150px] sm:h-[190px] bg-gradient-to-br from-[rgb(39,89,83)] to-[rgb(49,109,103)] rounded shadow-2xl z-25 overflow-hidden"
        style={{
          transform: 'rotateX(12deg) rotateY(-18deg) rotateZ(-5deg) translate3d(-40px, -140px, 60px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="p-4 sm:p-6">
          <div className="text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3">MOCKUP DESIGNS</div>
          <div className="space-y-2">
            <div className="h-2 sm:h-3 bg-white/30 rounded w-3/4"></div>
            <div className="h-2 sm:h-3 bg-white/20 rounded w-1/2"></div>
            <div className="h-2 sm:h-3 bg-white/20 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Floating Screen 3 - White right */}
      <div
        className="absolute w-[230px] sm:w-[290px] h-[145px] sm:h-[185px] bg-white rounded shadow-2xl z-30 overflow-hidden border border-gray-200"
        style={{
          transform: 'rotateX(12deg) rotateY(-8deg) rotateZ(3deg) translate3d(40px, -130px, 80px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="p-4 sm:p-5">
          <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 sm:mb-3">MOCKUP</div>
          <div className="space-y-2">
            <div className="h-2 sm:h-3 bg-gray-300 rounded w-4/5"></div>
            <div className="h-2 sm:h-3 bg-gray-200 rounded w-3/5"></div>
            <div className="h-2 sm:h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Phone Mockup - Beside laptop */}
      <div
        className="absolute w-[85px] sm:w-[105px] h-[170px] sm:h-[210px] bg-gray-900 rounded-[16px] sm:rounded-[20px] shadow-2xl z-35 p-1.5 sm:p-2"
        style={{
          transform: 'rotateX(10deg) rotateY(-15deg) translate3d(180px, 50px, 40px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[16px] overflow-hidden">
          <div className="h-full bg-gradient-to-b from-white to-gray-50 p-2 sm:p-3">
            <div className="w-8 h-0.5 bg-gray-300 rounded-full mx-auto mb-2 sm:mb-3"></div>
            <div className="space-y-2">
              <div className="h-10 sm:h-14 bg-[rgb(39,89,83)]/20 rounded"></div>
              <div className="h-1.5 bg-gray-200 rounded"></div>
              <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
              <div className="h-1.5 bg-gray-200 rounded w-3/5"></div>
              <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
