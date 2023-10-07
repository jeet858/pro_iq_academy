import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allBasicUnitOutput = RouterOutputs["review"]["all"];

export const reviewInput = z.object({
  name: z.string({
    required_error: "Describe your basic units name",
  }),
  email: z.string({
    required_error: "Describe your basic units symbol",
  }),
  review: z.string({
    required_error: "Describe your basic units symbol",
  }),
});
export const basicUnitsDeleteInput = z.object({
  name: z.string({
    required_error: "Describe your old basic units name",
  }),
});
