import { PrismaClient } from "@prisma/client";
import data from "../db/products";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Clear existing products
  await prisma.product.deleteMany();

  // Insert sample products
  for (const product of data.products) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`Created product with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
