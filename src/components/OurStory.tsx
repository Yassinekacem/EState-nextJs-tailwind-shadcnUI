import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory() {
  return (
    <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative h-fit w-fit">
            <Image src="/Home2.jpg" alt="a picture of house" width={400} height={400} className="object-cover" />
            <Image src="/Home1.jpg" alt="a picture of house" width={220} height={230} className=" absolute top-1/2 left-1/2 border-4 object-cover hidden  lg:block " />

        </div>
      </div>  

      <div>
        <p className="font-semibold mb-1">Our story</p>
        <p className="text-3xl mb-2"> Transparency.Efficiency.Control</p> 
        <p className="text-muted-foreground mb-4">Born out of personal frustration with the property industry, Number Twenty Four is a different type of Estate Agency. We invite you to come on this journey with us.</p>
        <Button>Read More</Button>
      </div>


    </div>
  )
}

 
