import { Search } from "lucide-react";
import { SearchForm } from "./SearchForm";

export function Hero() { 
return (
    <div className="min-h-screen hero flex justify-center items-center"> 
    <div className="max-w-4xl flex flex-col gap-6 items-center justify-center"> 
        <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white" > 
                Easy Way To Find Your Dream Home
            </h1> 
            <p className="text-slate-300 font-normal text-center lg:text-1xl">
                In Estate You can use our quick search below to find your future home.
            </p>
        </div>
       <SearchForm />
    </div>
    </div>
)

}