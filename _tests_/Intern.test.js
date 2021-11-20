const Intern = require("../lib/Intern");

test("pulls school username from constructor", () => {
  const school = "Hogwarts";
  const employee = new Intern("arg1", 10, "arg3", school);
  expect(employee.school).toBe(school);
});

test("verify getSchool()", () => {
    const school = "Hogwarts";
    const employee = new Intern("arg1", 10, "arg3", school);
    expect(employee.getSchool()).toBe(school);
  });

test("verify getRole()", () => {
  const role = "Intern";
  const employee = new Intern("arg1", 10, "arg3", "arg4");
  expect(employee.getRole()).toBe(role);
});