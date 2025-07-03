import React from 'react'
import { LuTrendingUpDown } from "react-icons/lu"
import cardimg from "../../assets/images/card2.jpg"
const Authlayout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
                <h2 className='text-lg font-medium text-black'>Expense  tracker</h2>
                {children}
            </div>
            <div className=" hidden w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative md:block ">
                <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
                <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
                <div className="w-48 h-48 rounded-[40px]  bg-violet-500 absolute -bottom-7 -left-5" />
                <div className="grid grid-cols-1  z-20">
                    <StatInfoCard icon={<LuTrendingUpDown />} lable="Track your Income & Expenses" value="430,000" color="bg-primary" />
                </div>
                <img src={cardimg} alt="" className='w-64 lg:w-[90%] absolute bottom-10 shadow-blue-400/15' />
            </div>
        </div>
    )
}
export default Authlayout;


const StatInfoCard = ({ icon, lable, value, color }) => {
   
   return <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border-gray-200/5 z-10">
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div>
            <h6 className='text-xs  text-gray-500 md-1'>{lable}</h6>
            <span className="text-[20px]">$ {value}</span>
        </div>
    </div>
}
