const Ourservice = (props) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="flex justify-center ">
          <h2 className="font-bold text-5xl">
            Kenapa <span className="text-[#1485DB]">Harus </span>Kami ?
          </h2>
        </div>
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl md:gap-x-8">
            <div className="bg-blue-500 rounded-3xl p-8 mx-24 m-5 h-full flex flex-col shadow-2xl">
              <div className="flex justify-center p-20">
                <img src="../../public/img/About/person.svg" alt="" className="border-4 rounded-3xl p-3 -mt-20 border-white mb-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 min-w-20 min-h-20 object-contain" />
              </div>
              <p className="flex justify-center font-bold text-2xl -mt-18 text-white">Pendampingan Penuh</p>
              <p className="text-white mt-4 text-xl">
                Kami tidak hanya membuat website, tetapi mendampingi Anda di setiap tahap proses. Mulai dari membantu merumuskan kebutuhan, menyusun konsep yang sesuai dengan tujuan bisnis, hingga memastikan website siap digunakan. Dengan
                komunikasi yang jelas, Anda tidak perlu khawatir meskipun belum memiliki pengalaman dalam dunia website.
              </p>
            </div>
            <div className="bg-blue-500 rounded-3xl p-8 mx-24 m-5 h-full flex flex-col  shadow-2xl">
              <div className="flex justify-center p-20">
                <img src="../../public/img/About/tulis.svg" alt="" className="border-4 rounded-3xl p-3 -mt-20 border-white mb-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 min-w-20 min-h-20 object-contain" />
              </div>
              <p className="flex justify-center font-bold text-2xl -mt-18 text-white">Copywritting menarik</p>
              <p className="text-white mt-4 text-xl">
                Kami merancang setiap kata dengan tujuan yang jelas untuk membangun kepercayaan dan mendorong tindakan. Copywriting pada website Anda tidak sekadar indah dibaca, tetapi disusun untuk menyampaikan nilai bisnis, menjawab
                kebutuhan calon klien, dan mengarahkan mereka untuk menghubungi Anda.
              </p>
            </div>
            <div className="bg-blue-500 rounded-3xl p-8 mx-24 m-5 h-full flex flex-col  shadow-2xl">
              <div className="flex justify-center p-20">
                <img src="../../public/img/About/foc.svg" alt="" className="border-4 rounded-3xl p-3 -mt-20 border-white mb-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 min-w-20 min-h-20 object-contain" />
              </div>
              <p className="flex justify-center font-bold text-2xl -mt-18 text-white">Fokus Tujuan Bisnis</p>
              <p className="text-white mt-4 text-xl">
                Kami tidak membangun website hanya untuk terlihat bagus, tetapi untuk bekerja bagi bisnis Anda. Setiap struktur halaman, desain, dan konten kami arahkan pada tujuan yang jelas dan dapat meningkatkan kepercayaan, memperkuat
                brand, serta mendorong calon klien untuk mengambil tindakan.
              </p>
            </div>
            <div className="bg-blue-500 rounded-3xl p-8 mx-24 m-5 h-full flex flex-col  shadow-2xl">
              <div className="flex justify-center p-20">
                <img src="../../public/img/About/che.svg" alt="" className="border-4 rounded-3xl p-3 -mt-20 border-white mb-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 min-w-20 min-h-20 object-contain" />
              </div>
              <p className="flex justify-center font-bold text-2xl -mt-18 text-white">Terima Beres, Tanpa stress</p>
              <p className="text-white mt-4 text-xl">
                Anda tidak perlu repot mengurus hal teknis. Kami menangani seluruh proses, mulai dari pembuatan hingga website siap digunakan. Anda cukup menyampaikan kebutuhan, kami wujudkan solusi yang siap pakai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
