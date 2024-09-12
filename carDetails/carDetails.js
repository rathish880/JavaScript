class MyCar {
    displayDetails(details) {
        console.log(details);
    }

    display(car, ownerName, color) {

        const message = `${ownerName}, your car ${color} ${car.brand} has registration number ${car.registrationNumber}`;
        
       
        this.displayDetails(message);
    }
}

const car = new MyCar();
car.display({ brand: "Audi", registrationNumber: "abc123" }, "John", "Blue");