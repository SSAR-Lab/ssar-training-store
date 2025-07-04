const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      { title: "Intro to IoT", description: "Learn basics of Internet of Things" },
      { title: "Smart Sensors", description: "Explore sensor technologies in automation" },
      { title: "Hydraulic Systems", description: "Understand hydraulic systems in vehicles" },
    ],
  });

  await prisma.product.createMany({
    data: [
      { name: "Arduino Starter Kit", price: 4500, description: "Perfect for learning IoT" },
      { name: "Hydraulic Actuator Model", price: 9800, description: "Lab kit for fluid power systems" },
      { name: "Smart Sensor Board", price: 6500, description: "Includes temperature, pressure, and motion sensors" },
    ],
  });

  console.log("Seeding completed.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });