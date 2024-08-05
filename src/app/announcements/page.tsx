import { Features } from "@/components/Features";
import { Filter } from "@/components/filter";

function page() {
  return (
    <div> 
      <br /> <br /> <br /> <br /> <br /> 
      
      <h4 className="text-3xl text-center mt-4 mb-2">Filter Properties</h4>
      <p className="text-center text-muted-foreground mb-4">
        Use the filters below to narrow down your search and find the perfect property for you.
      </p> 
      <br /> <br />
      <Filter />
      <Features />
    </div>
  );
}

export default page;
