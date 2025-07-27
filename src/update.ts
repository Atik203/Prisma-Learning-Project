import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const updatePost = await prisma.post.update({
    where: { id: 1 }, // Assuming you want to update the post with id 1
    data: {
      title: "Updated Post Title",
      content: "This is the updated content of the post.",
      published: false,
      authorName: "Updated Author",
    },
  });
  console.log("Post updated:", updatePost);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
