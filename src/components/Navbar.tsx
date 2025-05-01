import Link from "next/link"
const Navbar = () => {
  return (
    <>
        <nav className="flex justify-between py-[2rem] px-[1rem] " >
            <div>
                <h2>FarmerSaaathi</h2>
            </div>
            <div className="flex gap-[2rem] " >
                <Link href={"/"} >home</Link>
                <Link href={"/"} >Krishi Lab</Link>
                <Link href={"/"} >AgriBot</Link>
                <Link href={"/"} >SignUP</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar