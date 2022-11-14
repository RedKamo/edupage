const Categories = () => {
  return (
    <main className="pt-32" id="categories">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-5xl pb-20 text-center">
        Top Categories
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="text-center py-4 bg-green-custom border-2 border-black border-b-4 border-b-black rounded-md">
          <p>Machine Learning</p>
        </article>
        <article className="text-center py-4 bg-yellow-custom border-2 border-black border-b-4 border-b-black rounded-md">
          <p>Design</p>
        </article>
        <article className="text-center py-4 bg-marine-custom border-2 border-black border-b-4 border-b-black rounded-md">
          <p>Web Development</p>
        </article>
        <article className="text-center py-4 bg-red-custom border-2 border-black border-b-4 border-b-black rounded-md ">
          <p>Photography</p>
        </article>
        <article className="text-center py-4 bg-blue-custom border-2 border-black border-b-4 border-b-black rounded-md ">
          <p>Marketing</p>
        </article>
        <article className="text-center py-4 bg-purple-400 border-2 border-black border-b-4 border-b-black rounded-md ">
          <p>Business</p>
        </article>
      </section>
    </main>
  );
};

export default Categories;
