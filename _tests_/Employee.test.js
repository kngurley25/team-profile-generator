const Employee = require("../lib/Employee");

test("verify Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("pulls employee name from constructor", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("pulls employee ID from constructor", () => {
    const Id = 10;
    const employee = new Employee("arg1", Id);
    expect(employee.id).toBe(Id);
});

test("pulls employee email from constructor", () => {
    const email = "email@email.com";
    const employee = new Employee("arg1", 10, email);
    expect(employee.email).toBe(email);
});

test("verify getName()", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("verify getId()", () => {
    const Id = 10;
    const employee = new Employee("arg1", Id);
    expect(employee.getId()).toBe(Id);
});

test("verify getEmail()", () => {
    const email = "email@email.com";
    const employee = new Employee("arg1", 10, email);
    expect(employee.getEmail()).toBe(email);
});

test("verify getRole()", () => {
    const role = "Employee";
    const employee = new Employee("arg1", 10, "arg3");
    expect(employee.getRole()).toBe(role);
});

