const Engineer = require("../lib/Engineer");

test("pulls github username from constructor", () => {
  const github = "GitHubUser";
  const employee = new Engineer("arg1", 10, "arg3", github);
  expect(employee.github).toBe(github);
});

test("verify getGithub()", () => {
    const github = "GitHubUser";
    const employee = new Engineer("arg1", 10, "arg3", github);
    expect(employee.getGithub()).toBe(github);
  });

test("verify getRole()", () => {
  const role = "Engineer";
  const employee = new Engineer("arg1", 10, "arg3", "arg4");
  expect(employee.getRole()).toBe(role);
});

