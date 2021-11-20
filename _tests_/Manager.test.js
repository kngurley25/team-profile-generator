const Manager = require("../lib/Manager");

test("pulls office number from constructor", () => {
    const officeNumber = 25;
    const employee = new Manager("arg1", 10, "arg3", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("verify getOffice()", () => {
    const officeNumber = 25;
    const employee = new Manager("arg1", 10, "arg3", officeNumber);
    expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test("verify getRole()", () => {
    const role = "Manager";
    const employee = new Manager ("arg1", 10, "arg3", 25);
    expect(employee.getRole()).toBe(role);
});