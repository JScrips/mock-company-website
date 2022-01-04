import React from "react";
import Box from "./Box";
import HeroHeader from "./HeroHeader";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import MoreContent from "./MoreContent";




const Layout = () => {
  return (
    <div className="">
      <main className=" flex-col min-h-screen lg:grid lg:grid-cols-10 lg:grid-rows-3 ">
      <div className='lg:col-span-10 w-full'>
        <HeroHeader />
        </div>

        <div className='lg:row-span-5 w-full '>
            <Sidebar />
        </div>

        <div className='lg:col-span-9 lg:row-span-1 w-full'>
            <MainContent />
            
        </div>
        <div className='lg: col-span-9 lg:row-span-1 w-full'>
            <MoreContent />
            
        </div>

   


        
        
      




      
        
        






        
        
        

        
        

      </main>

      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
