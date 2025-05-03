import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import { productdata } from "../data/productdata"

const page = () => {
  return (
    <>
        <Navbar/>
        <div className="">
            {
                productdata.map((i)=>{
                    return(
                        <ProductCard
                        key={i.id}
                        name={i.productname}
                        description={i.desc}
                        price={i.price}
                        image={i.img}
                        />
                    )
                })
            }
  </div>
    </>
  )
}

export default page