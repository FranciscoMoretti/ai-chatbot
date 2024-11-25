import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";
import { models } from "./models";

export const customModel = (apiIdentifier: string) => {
  const provider = models.find(
    (model) => model.apiIdentifier === apiIdentifier
  )?.provider;

  return wrapLanguageModel({
    model:
      provider === "openai" ? openai(apiIdentifier) : anthropic(apiIdentifier),
    middleware: customMiddleware,
  });
};
