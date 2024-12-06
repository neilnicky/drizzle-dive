import "dotenv/config";
import { db } from "./drizzle/db";
import { UserRole, UserTable } from "./drizzle/schema";
import { eq, sql } from "drizzle-orm";

async function main() {
  //   Querying data from db
  // const users = await db.query.UserTable.findMany({
  //   columns: {
  //     name: true,
  //   },
  //   with: { posts: true },
  // extras: {
  //   lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
  // },
  // });
  // const users = await db.select().from(UserTable);

  //   Inserting data to db
  //   const user = await db
  //     .insert(UserTable)
  //     .values([
  //       {
  //         name: "NEIL NICHOLAS",
  //         age: 22,
  //         email: "Uo9Ct@example.com",
  //         role: "ADMIN",
  //       },
  //       {
  //         name: "Muad Pn",
  //         age: 22,
  //         email: "Uo9Ct@exdfample.com",
  //         role: "BASIC",
  //       },
  //     ])
  //     .returning({
  //       id: UserTable.id,
  //       name: UserTable.name,
  //     })
  //     .onConflictDoUpdate({
  //       target: UserTable.email,
  //       set: {
  //         name: "Updated name",
  //       },
  //     });

  // Updating a data
  // const ageInc = await db
  //   .update(UserTable)
  //   .set({
  //     age: 30,
  //   })
  //   .where(eq(UserTable.age, 22));

  // Deleting data
  const users = await db.delete(UserTable).where(eq(UserTable.age, 30));

  console.log(users);
}

main();
