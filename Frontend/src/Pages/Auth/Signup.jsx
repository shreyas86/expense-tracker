import React ,{useContext, useState}from 'react'
import Authlayout from '../../components/layout/Authlayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoselecter from '../../components/input/ProfilePhotoselecter';
import axiosinstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext,  } from '../../context/UserContext';
import { uplodImage } from '../../utils/uplodImage';


const Signup = () => {
  const [profilepic,setProfilepic]=useState(null)
  const [fullname, setFullname]=useState("")
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[error,seterror]=useState("");

const navigate=useNavigate();
const {updateUser}=useContext(UserContext)
const handlesignup=async(e)=>{
e.preventDefault()
let profileimgurl="";

if(!fullname){
  seterror("please enter your name")
  return;
}
if(!validateEmail(email)){
  seterror("please enter a valid email")
  return;
}
if(!password){
  seterror("please enter a password")
  return;
}
seterror("")
if(profilepic){
  const imgUplodres=await uplodImage(profilepic)
profileimgurl = imgUplodres.imageurl || "";

}
try {
  const response=await axiosinstance.post(API_PATHS.AUTH.REGISTER,{
    fullname,
    email,
    password,
profileimgurl
  })
  const{token,user}=response.data;
  if(token){
    localStorage.setItem("token",token)
    updateUser(user)
    navigate("/dashboard")
  }
} catch (error) {
   if(error.response && error.response.data.message){
      seterror(error.response.data.message)
    }else{
      seterror("something went wrong")
    }
}

}
return (
    <Authlayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your detail below</p>
      <form onSubmit={handlesignup}>

        <ProfilePhotoselecter image={profilepic} setImage={setProfilepic}/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Input
    value={fullname}
    onChange={({ target }) => setFullname(target.value)}
    label="Full Name"
    placeholder="John"
    type="text"
  />
  
  <Input
    value={email}
    onChange={({ target }) => setEmail(target.value)}
    label="Email Address"
    placeholder="john@example.com"
    type="text"
  />

  <div className="col-span-1 md:col-span-2">
    <Input
      value={password}
      onChange={({ target }) => setPassword(target.value)}
      label="Password"
      placeholder="Min 8 characters"
      type="password"
    />
  </div>
</div>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p> }
            <button type='submit' className='btn-primary'>SIGNUP</button>
            <p className='text-[13px]'>Already have an account?{" "}
              <Link className="font-medium text-primary underline"  to="/login">Login</Link>
            </p>

      </form>
      </div>

    </Authlayout>
  )
}

export default Signup
