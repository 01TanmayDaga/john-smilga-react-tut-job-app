import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Companies from "./Components/Companies";
import Job from "./Components/Job";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [currentCompany, setCurrentCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setCurrentCompany(newJobs[0].company);
    setIsLoading(false);
  };
  useEffect(() => {
    try {
      fetchJobs();
    } catch (Err) {
      setIsLoading(false);
      setIsError(true);
      console.log(Err);
    }
  }, []);

  return (
    <main className=" bg-gray-50 h-screen">
      {isLoading ? (
        <div className="flex align-middle justify-center h-screen w-screen">
          <Loader />
        </div>
      ) : (
        <div className="h-full w-full flex md:flex-row md:justify-between md:pl-32 md:pt-16 max-md:flex-col max-md:justify-start ">
       
          <Companies
            currentCompany={currentCompany}
            companies={jobs.map((job) => job.company)}
            setCurrentCompany={setCurrentCompany}
          />
          <Job job={jobs.filter((ele) => ele.company === currentCompany)} />
        </div>
      )}
    </main>
  );
};
export default App;
