const ProductPage = () => {
  return (
    <div className="relative">
      <p className="flex justify-center align-center text-4xl my-6 font-bold">
        Our&nbsp;<span className="text-sky-500"> Products</span>
      </p>
      <div className="relative flex justify-center align-center items-center ">
        <div className="w-xs px-4 bg-sky-500 border border-slate-700 rounded-lg shadow-xl/55 ">
          <p className="flex justify-center my-5 font-bold">Black Shirt</p>
          <a href="#">
            <img src="../../public/img/1.jpg" alt="Kemeja" className="rounded-t-full border-black border-r-4 border-b-4" />
          </a>
          <div className="px-5 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur recusandae, quas nemo debitis excepturi blanditiis doloremque inventore numquam temporibus deserunt error. Labore, quidem accusamus.
          </div>
          <div className="flex justify-center mb-3">
            <button className="px-4 py-2 font-bold text-white rounded-2xl bg-sky-800">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
