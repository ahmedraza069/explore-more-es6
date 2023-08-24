class Vhichels{

    constructor(name, price){
        this.name = name;
        this.price= price;
    }
    move(move){
        console.log('Faster car')
    }
}
class Bus extends Vhichels{
    constructor(name, price, brands, seat){
        super(name, price);
        this.brands = brands;
        this.seat = seat;
    }
}

const anannna = new Bus('Anannna', 150000, 'Toyota', 53)
console.log(anannna);