import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const posts = await prisma.post.findMany({
    skip: 5, // Skip the first 5 records
    take: 5, // Take the next 5 records
  });

  console.log("Paginated Posts:", posts);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
