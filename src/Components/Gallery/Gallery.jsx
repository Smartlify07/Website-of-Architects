const Gallery = () => {
  return (
    <section className="py-10 font-Roboto px-6 flex flex-col items-center lg:px-6">
      <div className="lg:w-10/12">
        <h1 className="text-5xl font-bold text-[#bdbdbd] flex flex-col gap-1">
          <span className="font-light">Photo</span>
          <span className="text-[#333]">Gallery</span>
        </h1>
        <div className="grid grid-cols-2 mt-7 gap-4 lg:grid-cols-5">
          <img src="./images/gallery/Rectangle22.svg" alt="" />
          <img src="./images/gallery/Rectangle23.svg" alt="" />
          <img src="./images/gallery/Rectangle24.svg" alt="" />
          <img src="./images/gallery/Rectangle25.svg" alt="" />
          <img src="./images/gallery/Rectangle26.svg" alt="" />
          <img src="./images/gallery/Rectangle27.svg" alt="" />
          <img src="./images/gallery/Rectangle28.svg" alt="" />
          <img src="./images/gallery/Rectangle29.svg" alt="" />
          <img src="./images/gallery/Rectangle30.svg" alt="" />
          <img src="./images/gallery/Rectangle31.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
