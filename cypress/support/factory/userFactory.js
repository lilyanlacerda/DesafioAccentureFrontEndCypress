import { faker } from "@faker-js/faker";

export function userFactory() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.string.numeric(10),
    address: faker.location.streetAddress(),
  };
}
