import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

let prisma: PrismaClient;
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: [
      {
        emit: "stdout",
        level: "error",
      },
      // {
      //   emit: "stdout",
      //   level: "info",
      // },
      // {
      //   emit: "stdout",
      //   level: "query",
      // },
      // {
      //   emit: "stdout",
      //   level: "warn",
      // },
    ],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: [
        {
          emit: "stdout",
          level: "error",
        },
        {
          emit: "stdout",
          level: "info",
        },
        {
          emit: "stdout",
          level: "query",
        },
        {
          emit: "stdout",
          level: "warn",
        },
      ],
    });
  }
  prisma = global.prisma;
}

export default prisma;
