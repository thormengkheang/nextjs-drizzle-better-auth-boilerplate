import { auth } from "@/lib/auth";

async function seed() {
  await auth.api.createUser({
    body: {
      email: "admin@domain.com",
      name: "Admin",
      password: "admin123",
      data: {
        username: "admin",
      },
    },
  });
}

seed().then(() => {
  console.log("User seeded successfully.");
});
