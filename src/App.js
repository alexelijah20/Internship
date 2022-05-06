import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/people/");
      setData(res?.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white z-50 ">
      <div className="container mx-auto p-40 z-50 ">
        <div className="grid grid-cols-2 z-50">
          {data.map((item) => (
            <div key={item.name} className="z-50 relative">
              <div className="mx-20 border z-50 border-[#E6FF83] shadow-md shadow-[#E6FF83] p-7 px-10 my-10 rounded-lg">
                <div className="z-50">
                  <p className="text-xl z-50 font-bold tracking-wider mb-5 flex justify-between items-center">
                    {item.name}
                    <FaStar color="#E6FF83" size={"20px"} />
                  </p>
                </div>
                <p className="mb-2 z-50">
                  <span className="font-semibold z-50">Height: </span>
                  <span className="font-light ml-2 z-50"> {item.height}</span>
                </p>
                <p className="z-50">
                  <span className="font-semibold z-50">Birth Year: </span>
                  <span className="font-light ml-2 z-50">
                    {item.birth_year}
                  </span>
                </p>
              </div>
              <div className="absolute bg-gradient-to-b from-[#E6FF83] to  rounded-full h-20 w-20 bottom-1 left-10 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
