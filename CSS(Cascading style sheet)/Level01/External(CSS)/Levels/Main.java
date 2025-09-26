// Parent interface
interface Vehicle {
    void accelerate();
    void decelerate();
    
    // Getters and Setters for private properties
    String getColor();
    void setColor(String color);
    
    double getWeight();
    void setWeight(double weight);
    
    String getModel();
    void setModel(String model);
}

// Sub-interface for Bus
interface Bus extends Vehicle {
    void openDoors();
}

// Sub-interface for Truck
interface Truck extends Vehicle {
    void loadCargo();
}

// Sub-interface for Car
interface Car extends Vehicle {
    void startEngine();
}

// Implementation of SchoolBus
class SchoolBus implements Bus {
    private String color;
    private double weight;
    private String model;

    @Override
    public void accelerate() {
        System.out.println("SchoolBus is accelerating.");
    }

    @Override
    public void decelerate() {
        System.out.println("SchoolBus is decelerating.");
    }

    @Override
    public void openDoors() {
        System.out.println("SchoolBus doors are opening.");
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public double getWeight() {
        return weight;
    }

    @Override
    public void setWeight(double weight) {
        this.weight = weight;
    }

    @Override
    public String getModel() {
        return model;
    }

    @Override
    public void setModel(String model) {
        this.model = model;
    }
}

// Implementation of HondaCar
class HondaCar implements Car {
    private String color;
    private double weight;
    private String model;

    @Override
    public void accelerate() {
        System.out.println("HondaCar is accelerating.");
    }

    @Override
    public void decelerate() {
        System.out.println("HondaCar is decelerating.");
    }

    @Override
    public void startEngine() {
        System.out.println("HondaCar engine started.");
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public double getWeight() {
        return weight;
    }

    @Override
    public void setWeight(double weight) {
        this.weight = weight;
    }

    @Override
    public String getModel() {
        return model;
    }

    @Override
    public void setModel(String model) {
        this.model = model;
    }
}

// Implementation of VigoTruck
class VigoTruck implements Truck {
    private String color;
    private double weight;
    private String model;

    @Override
    public void accelerate() {
        System.out.println("VigoTruck is accelerating.");
    }

    @Override
    public void decelerate() {
        System.out.println("VigoTruck is decelerating.");
    }

    @Override
    public void loadCargo() {
        System.out.println("VigoTruck is loading cargo.");
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public double getWeight() {
        return weight;
    }

    @Override
    public void setWeight(double weight) {
        this.weight = weight;
    }

    @Override
    public String getModel() {
        return model;
    }

    @Override
    public void setModel(String model) {
        this.model = model;
    }
}

// Main class to test the implementation
public class Main {
    public static void main(String[] args) {
        SchoolBus schoolBus = new SchoolBus();
        schoolBus.setColor("Yellow");
        schoolBus.setWeight(5000);
        schoolBus.setModel("Bluebird");
        schoolBus.accelerate();
        schoolBus.openDoors();

        HondaCar hondaCar = new HondaCar();
        hondaCar.setColor("Red");
        hondaCar.setWeight(1500);
        hondaCar.setModel("Civic");
        hondaCar.accelerate();
        hondaCar.startEngine();

        VigoTruck vigoTruck = new VigoTruck();
        vigoTruck.setColor("Blue");
        vigoTruck.setWeight(8000);
        vigoTruck.setModel("Vigo");
        vigoTruck