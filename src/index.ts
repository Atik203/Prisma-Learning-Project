import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is my first post",
      published: true,
      authorName: "Alice",
    },
  });

  const getAllPosts = await prisma.post.findMany();
  console.log(getAllPosts);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
