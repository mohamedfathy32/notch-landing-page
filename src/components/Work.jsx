const Work = () => {
  return (
    <section id="work" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-xl text-gray-600">Project {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 