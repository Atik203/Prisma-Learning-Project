import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "john doe",
  //     email: "johndoe@example.com",
  //     role: UserRole.USER,
  //   },
  // });
  // const profile = await prisma.profile.create({
  //   data: {
  //     bio: "Database enthusiast and software developer.",
  //     userId: user.id,
  //   },
  // });
  // console.log("User created:", user);
  // console.log("Profile created:", profile);
  // const users = await prisma.user.findMany({
  //   include: {
  //     profile: true,
  //   },
  // });
  // console.log("All users with profiles:", users);
  // const categories = await prisma.category.createMany({
  //   data: [
  //     { name: "Technology" },
  //     { name: "Health" },
  //     { name: "Finance" },
  //     { name: "Education" },
  //   ],
  // });
  // console.log("Categories created:", categories);
  // const posts = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Understanding Prisma",
  //       content: "Prisma is a powerful ORM for Node.js and TypeScript.",
  //       published: true,
  //       authorId: 1, // Assuming user with ID 1 exists
  //       authorName: "Alice",
  //     },
  //     {
  //       title: "Getting Started with TypeScript",
  //       content: "TypeScript enhances JavaScript with static types.",
  //       published: false,
  //       authorId: 2, // Assuming user with ID 2 exists
  //       authorName: "John doe",
  //     },
  //   ],
  // });
  // console.log("Posts created:", posts);
  // const postCategories = await prisma.postCategory.createMany({
  //   data: [
  //     { postId: 1, categoryId: 1 }, // Assuming post with ID 1 and category with ID 1 exist
  //     { postId: 1, categoryId: 2 }, // Post 1 belongs to categories 1 and 2
  //     { postId: 2, categoryId: 3 }, // Post 2 belongs to category 3
  //   ],
  // });
  // console.log("Post categories created:", postCategories);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
