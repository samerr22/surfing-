import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../img/pic.jpg";

export default function Schedul() {


  

  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const [Info, setInfo] = useState([]);
  console.log(Info)
  const [payId, setformId] = useState("");
  console.log(payId)

  
  useEffect(() => {
    const fetchinfo = async () => {
      try {
        const res = await fetch(`/api/suplier/getAll`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setInfo(data.suplier);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchinfo();
  }, []);


  
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/sheet/deletepay/${payId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setInfo((prev) => prev.filter((Employe) => Employe._id !== payId));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  








  return (

    <div className="h-[600px] relative"> 
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10"> 

        <div>

      
          <div className=" flex justify-center items-center">
        
        <div>
    
        
        <h1 className="text-4xl font-serif opacity-70 text-gray-800">Supplier Management</h1>

        
       

        
        </div>
        
        </div>
        <div>
          <div className="flex justify-center items-center mt-2 ">
          <form>
            <div className="opacity-50">

            
          <input
            type="text"
            placeholder="Search... "
            className=" w-[350px] h-10 rounded-full shadow-xl border border-white bg-opacity-10"
         

          />
          </div>
        </form>
          </div>
        </div>
        <div className=" mb-1 g ">
          <button className="w-36 bg-blue-900 rounded-lg  h-10 bg-opacity-90 border-white border border-opacity-45 text font-serif text-white text-opacity-80">
            New Supplier
          </button>
          <button className="w-24 bg-blue-900 rounded-lg  h-10 bg-opacity-90 border-white border border-opacity-45 text font-serif text-white text-opacity-80 ml-2">
            Report
          </button>
        </div>
        </div>

        <div  className="w-[1400px] h-[400px] rounded-lg bg-opacity-65  bg-slate-500">
          
        <div className="">
       
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full border border-white border-opacity-50 divide-y divide-black shadow-md">
            <thead className="bg-none divide-x divide-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs bg-blue-900 bg-opacity-90 text-white font-medium text-opacity-80   uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium   bg-blue-900 bg-opacity-90 text-white text-opacity-80   uppercase">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-blue-900 bg-opacity-90 text-white text-opacity-80   uppercase">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-blue-900 bg-opacity-90 text-white text-opacity-80   uppercase">
                  Supply Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-blue-900 bg-opacity-90 text-white text-opacity-80   uppercase">
                  Send Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-blue-900 bg-opacity-90 text-white text-opacity-80    uppercase">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium bg-blue-900 bg-opacity-90 text-white text-opacity-80   uppercase">
                  Delete
                </th>
               
              </tr>
            </thead>
                
            
            <tbody className="bg-none bg-opacity-40 divide-y divide-gray-200">
            {Info.map((Employe) => (
              <tr
                key={Employe._id}
                className=" dark:border-gray-700 dark:bg-gray-800"
              >
                

                
                <td className="px-6 py-4 whitespace-nowrap">
                  {Employe.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {Employe.contact}
                </td>

                <td className="px-6 py-4 whitespace-nowrap ">
                  {Employe.Address}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  Rs:{Employe.SItems}
                </td>
                <td className=" whitespace-nowrap">
                <button className="w-24 bg-blue-600 rounded-lg  hover:opacity-80 h-10 bg-opacity-70 border-white border border-opacity-45 text font-serif text-white text-opacity-80 ml-2">
            Order
          </button>
                </td>

                

                <td className="  whitespace-nowrap">
                  <Link
                    to={`/update/${Employe._id}`}
                   
                  >
                    <button className="w-24 bg-green-500 hover:opacity-80 rounded-lg  h-10 bg-opacity-70 border-white border border-opacity-45 text font-serif text-white text-opacity-80 ">
            Edit
          </button>
                  </Link>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <span
                    onClick={() => {
                      setformId(Employe._id);
                      handleDeleteUser();
                    }}
                  
                  >
                    <button className="w-24 bg-red-600 hover:opacity-80 rounded-lg  h-10 bg-opacity-70 border-white border border-opacity-45 text font-serif text-white text-opacity-80 ">
            Delete
          </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
         
       
         
          </table>
          </div>
         
        </div>
         
        </div>
      
        </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
     
        
       
      </div>
    </div>






    

  );
}
