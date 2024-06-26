import "./App.css";
import Navbar from "./Components/Navbar";
import Filtter from "./Components/Filtter";
import { apiURL, filterData } from "./data";
import Cards from "./Components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiURL);
        const output = await res.json();
        //save data into a variable
        // console.log(output.data);
        setCourses(output.data);
      } catch (error) {
        toast.error("someThing is Wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filtter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="w-11/12  max-w-[1200px]  flex flex-wrap gap-6  mx-auto justify-center items-center min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
}

export default App;
