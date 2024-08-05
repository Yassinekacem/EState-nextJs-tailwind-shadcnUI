import { PropertyCard } from "./PropertyCard"

 export const propertiesList = [
    {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } , 
    {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } ,     {
        id : "pro__1" , 
        name : "123 Main St , New York" ,
        price : 1500 , 
        rating : 5 ,
        sqft : 300 , 
        bed : 3 , 
        baths : 2 , 
        image : "/Home2.jpg"
    } , 
]



export  function Features() {
  return (
    <div className="container pb-20"> 

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertiesList.map((property) => ( 
            <PropertyCard key={property.id} {... property} />

        ))}
      </div>
    </div>
  )
}

 
