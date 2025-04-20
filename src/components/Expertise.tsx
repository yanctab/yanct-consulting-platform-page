
const Expertise = () => {
  return (
    <section id="expertise" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Background & Expertise</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Embedded Linux Product Development
              </h3>
              <p className="text-gray-600">
                Since 2008, I've helped companies implement and optimize embedded Linux systems 
                across various industries, covering everything from bootloaders and kernels to 
                middleware layers. My focus is on making your platform production-ready, whether 
                you're developing a new product or improving an existing one.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Yocto Project Expertise
              </h3>
              <p className="text-gray-600">
                The Yocto Project can be daunting, but I've worked extensively with its BSP 
                and platform layers, gaining deep insights into its quirks across different 
                vendor ecosystems (NXP, Variscite, Qualcomm). My expertise helps you bridge 
                the gap between theoretical solutions and production-grade systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Developer Enablement & CI/CD Integration
              </h3>
              <p className="text-gray-600">
                Yocto shouldn't be a barrier for application developers. I simplify workflows 
                and enhance productivity, allowing your team to focus on their strengths. 
                I also collaborate with DevOps to optimize build pipelines, leveraging tools 
                like my custom utility "bakery" for seamless integration between local builds 
                and CI environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
