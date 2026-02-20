const Page = () => {
  return (
    <section className="lg:mt-4 lg:px-4">
      <div className="container bg-[url('/hero-image.jpg')] bg-center bg-cover bg-no-repeat min-h-[75svh] flex items-center justify-center flex-col text-white text-center">
        <p className="text-amber-400 font-bold tracking-wide uppercase">Minimal interior design</p>

        <h1 className="text-4xl md:text-5xl lg:text-6x text-black">
          We minimize your waste
          <br />
          in every stop of the process.
        </h1>
      </div>
    </section>
  );
};
export default Page;
