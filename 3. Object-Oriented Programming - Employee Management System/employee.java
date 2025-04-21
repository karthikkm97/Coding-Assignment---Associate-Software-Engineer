import java.util.ArrayList;
import java.util.List;

class Employee {
    // Attributes
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Display method
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("----------------------");
    }

    // Main method
    public static void main(String[] args) {
        // Create 3 Employee objects
        Employee emp1 = new Employee(101, "John Doe", 75000.0);
        Employee emp2 = new Employee(102, "Jane Smith", 85000.0);
        Employee emp3 = new Employee(103, "Michael Johnson", 95000.0);

        // Create list and add employees
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Display details for all employees
        System.out.println("Employee Details:");
        System.out.println("=================");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
