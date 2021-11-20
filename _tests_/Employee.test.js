const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee ("John");

    expect(employee.name).toBe("John");
    expect(employee.email).toBe("email");
})

test("creates an employee object", () => {
    const employee = new Employee ("John");
    
    expect(employee.email).toBe("email");
})