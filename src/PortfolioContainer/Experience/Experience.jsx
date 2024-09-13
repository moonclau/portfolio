import { dataExperience } from "../data";
function Experience() {
  return (
      
      <div className="flex flex-col justify-center divide-y divide-orange-600  bg-[#ffce96] mb-10">
           <div className="flex justify-center ">
             <h1 className="mt-20 mb-5 text-3xl ">Mi trayectoria profesional</h1>
           </div>
            <div className="w-full max-w-3xl mx-auto pb-5 pt-5 md:pb-20 md:pt-20 sm:mt-2">
                <div className="-my-6">
                    {dataExperience.map((data) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-orange-500 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-orange-500
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-7 mb-3 sm:mb-0 text-white bg-orange-500 rounded-full">{data.date}</time>
                                <div className="text-xl font-bold ">{data.subtitle}</div>
                            </div>
                            <div className="">{data.description}</div>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-2 mr-2">
                                {data.technologies.map((tecnology,index) => (
                                    <div key={data.id+index} className="text-sm font-semibold bg-orange-500 rounded-full w-auto content-center text-center text-white">
                                        {tecnology}
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
}
export default Experience;
