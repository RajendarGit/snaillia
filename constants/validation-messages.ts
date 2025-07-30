export const validationMessages = {
  required: "This field is required.",
  invalidEmail: "Please enter a valid email address.",
  minLength: (min: number) => `Minimum ${min} characters required.`,
  maxLength: (max: number) => `Maximum ${max} characters allowed.`,
  invalidPhone: "Please enter a valid phone number.",
  invalidCountry: "Please select a valid country.",
  invalidEmailPassword: "Invalid email or password.",
  invalidUser: "No registered user found. Please register first.",
  loggedInSuccess: (user: { name: string; email: string }) =>
    `Logged in as ${user.name} (${user.email})`,
  registerSuccess: (user: {
    firstName: string;
    lastName: string;
    email: string;
  }) => `Registered as ${user.firstName} ${user.lastName} (${user.email})`,
};
