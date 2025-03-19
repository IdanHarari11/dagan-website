import Projects from '@/components/Projects';

export default function ProjectsPage() {

  const images = [
  ];

  return (      
    <section className="py-20 pt-14 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <Projects />
        {/* <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mt-12 mb-8">Gallery</h3> */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
          {/* {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery image ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-lg" />
          ))} */}
        {/* </div> */}
      </div>
    </section>
  );
} 