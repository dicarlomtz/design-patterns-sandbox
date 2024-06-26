//Allows to produce different types of objects without using the same construction code

interface CarBuilder<T> {
  setSeats(seats: number): T
  setEngine(engine: string): T
  setTripComputer(tripComputer: boolean): T
  setGPS(gps: boolean): T
}

class StandardCarBuilder implements CarBuilder<string[]> {

  setSeats(seats: number): string[] {
    throw new Error("Method not implemented.")
  }
  setEngine(engine: string): string[] {
    throw new Error("Method not implemented.")
  }
  setTripComputer(tripComputer: boolean): string[] {
    throw new Error("Method not implemented.")
  }
  setGPS(gps: boolean): string[] {
    throw new Error("Method not implemented.")
  }
}

class LuxuryCarBuilder implements CarBuilder<string[]> {
  setSeats(seats: number): string[] {
    throw new Error("Method not implemented.")
  }
  setEngine(engine: string): string[] {
    throw new Error("Method not implemented.")
  }
  setTripComputer(tripComputer: boolean): string[] {
    throw new Error("Method not implemented.")
  }
  setGPS(gps: boolean): string[] {
    throw new Error("Method not implemented.")
  }
}

const builder = new StandardCarBuilder();
builder.setEngine('v8');
builder.setGPS(true);
builder.setSeats(5);
builder.setTripComputer(true);