import Image from 'next/image';
import React from 'react';
const carsData = async () => {
    const response = await fetch('http://localhost:5000/exploreCars');
           const data = await response.json();
    // console.log(data);
    return data;
}

const ExploreCars =async () => {
    const cars = await carsData();
    console.log(cars);
    return (
        <div className="grid grid-cols-3 gap-4">
         
            {cars.map((car) => (
                <div key={car._id}>
                    <Image width={200 } height={200} src={car.imageURL} alt={car.carName} />
                    <h1>{car.name}</h1>
                    <p>{car.price}</p>
                    <p>{car.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ExploreCars;