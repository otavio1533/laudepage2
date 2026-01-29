import Image from "next/image";

export default function Home() {
  return (
    
      
<div className=" flex flex-col justify-center items-center bg-blue-500 w-full h-full">

      <div className="text-yellow-400  bg-blue-500 rounded-2xl border-2 border-white mt-20 text-center w-100 h-15">
      <h1 className="font-bold  text-lg   ">São thome das letras</h1>
      
</div>


   <div className=" bg-blue-500  w-400 h-100 mt-10 flex gap-25 ">
    
    <div className="bg-yellow-500  w-120  h-100 border-5 border-white   rounded-2xl">
       <Image
        src="/img1.jpg"
        alt="Senac"
        width={500}
        height={100}
      
       />
       <h1 className="">ponto turisticos</h1>
    </div>
    <div className="bg-yellow-500  w-120  h-100  border-5 border-white  rounded-4xl">
      
    </div>
    <div className="bg-yellow-500  w-120  h-100  border-5 border-white  rounded-4xl"></div>


    
   </div>

   <div className=" bg-blue-500  w-400 h-100 mt-10 flex gap-25 ">
    
    <div className="bg-yellow-500  w-120  h-100 border-5 border-white   rounded-4xl">
     
    </div>

    
    <div className="bg-yellow-500  w-120  h-100  border-5 border-white  rounded-4xl"></div>
    <div className="bg-yellow-500  w-120  h-100  border-5 border-white  rounded-4xl"></div>


    
   </div>




    </div>
  );
}
