const Pak = (props) => {
  return (
    <div className="relative bg-white min-h-screen md:-mb-48 -mb-44">
      <h1 className="flex justify-center font-bold text-5xl pt-28">About Us</h1>
      <div className="grid justify-center mt-7  md:grid-cols-2 md:flex md:flex-col text-xl">
        <div
          className="p-6 mx-20 bg-white rounded-2xl
                      drop-shadow-2xl
                       border-transparent
                    hover:border-[#1485DB]
                     hover:border-l-4
                    hover:border-t-2
                     hover:scale-[1.02]
                    transition-all duration-500"
        >
          <p>
            ARGONAUT adalah studio pengembangan website yang berfokus membantu UMKM dan startup membangun kehadiran digital yang profesional dan modern. Kami menyediakan berbagai layanan website seperti landing page, company profile,
            e-commerce, dan solusi website lainnya yang dirancang untuk mendukung tujuan bisnis secara nyata, bukan sekadar tampilan visual.
          </p>
        </div>
        <div
          className="p-6 mt-8 mx-20 bg-white rounded-2xl
                      drop-shadow-2xl
                       border-transparent
                    hover:border-[#1485DB]
                     hover:border-l-4
                    hover:border-t-2
                     hover:scale-[1.02]
                    transition-all duration-500 my-64"
        >
          <p>
            Kami mengedepankan pendampingan dari nol dengan komunikasi yang jelas dan transparan di setiap tahap pengerjaan. Dengan pendekatan yang humanis dan berorientasi pada kebutuhan bisnis, kami membantu mengubah ide yang masih
            membingungkan menjadi website yang terarah, terpercaya, dan siap digunakan untuk menarik serta meyakinkan calon pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pak;
