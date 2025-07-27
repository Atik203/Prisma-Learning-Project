import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Prisma with PostgreSQL",
        content: "This is a post about using Prisma with PostgreSQL.",
        published: true,
        authorName: "Alice",
      },
      {
        title: "Prisma with MySQL",
        content: "This is a post about using Prisma with MySQL.",
        published: true,
        authorName: "Bob",
      },
      {
        title: "Prisma with SQLite",
        content: "This is a post about using Prisma with SQLite.",
        published: false,
        authorName: "Charlie",
      },
    ],
  });

  console.log("Posts created:", createMany);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
