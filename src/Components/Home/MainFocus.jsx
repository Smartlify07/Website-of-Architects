const MainFocus = () => {
  return (
    <section className="py-16 w-full flex flex-col items-center px-3 lg:px-6">
      <div className="w-10/12">
        <h1 className="text-3xl text-center font-light text-[#bdbdbd] lg:text-left lg:text-4xl">
          Main Focus/Mission Statement
        </h1>

        <div className="flex flex-col mt-8 gap-5 justify-between lg:items-center lg:flex-row">
          <div className="flex flex-col items-center  gap-5 lg:flex-row">
            <h1 className="text-9xl font-extrabold text-[#f2f2f2]">1</h1>
            <p className="text-center lg:text-left lg:w-6/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5  justify-center lg:flex-row">
            <h1 className="text-9xl font-extrabold text-[#f2f2f2]">2</h1>
            <p className="text-center lg:text-left lg:w-7/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFocus;
