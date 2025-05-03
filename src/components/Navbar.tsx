import Link from "next/link"
import '@/styles/navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SignedIn, SignedOut } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <>
        <nav className="navbar font-inter py-[2rem] " >
            <div>
                <h2 className="farm font-inter">FarmerSaaathi</h2>
            </div>
            <div className="navlinks" >
                <Link href={"/"} >Home</Link>
                <Link href={"/krishilab?component=disease"} >Krishi Lab</Link>
                <Link href={"/agribot"} >AgriBot</Link>
                {/* <Link href={'/'}><ShoppingCartIcon className="!text-[2rem]" /></Link> */}
                
                <SignedOut>
                 <Link href={"/sign-in"} >SignIn</Link>
                </SignedOut>
                <SignedIn>
                <Link href={"/user-profile"} ><AccountCircleIcon className="!text-[2rem]" /></Link>
                </SignedIn>
            </div>
        </nav>
    </>
  )
}

export default Navbar