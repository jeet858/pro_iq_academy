import { Prisma } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { reviewInput } from "~/types";

export const reviewRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const reviews = await ctx.db.review.findMany();
    await ctx.db.$disconnect();
    return reviews.map(({ name, email, review }) => ({
      name,
      email,
      review,
    }));
  }),
  create: publicProcedure
    .input(reviewInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.review.create({
        data: { name: input.name, email: input.email, review: input.review },
      });
    }),
});
