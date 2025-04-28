import cars from "@/data/cars.json"

export default defineEventHandler(async (event) => {
    const {city} = event.context.params;
    const {make, minPrice, maxPrice } = getQuery(event):

    let fileteredCars = cars;

    fileteredCars.filter(car =>{
        car.city.toLowerCase() === city.toLowerCase();
    })
    
    if(make){
        filteredCars = filteredCars.filter((car) => {
            return car.make.toLowerCase() === make.toLowerCase();
        }
    }

    if(minPrice){
        filteredCars = filteredCars.filter((car) => {
            return car.price >= parseInt(minPrice);
        })
    }
    if(maxPrice){
        filteredCars = filteredCars.filter((car) => {
            return car.price <= parseInt(maxPrice);
        })
    }
}