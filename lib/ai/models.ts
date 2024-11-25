// Define your models here.

export interface Model {
  id: string;
  provider: "openai" | "anthropic";
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "gpt-4o-mini",
    label: "GPT 4o mini",
    apiIdentifier: "gpt-4o-mini",
    description: "Small model for fast, lightweight tasks",
    provider: "openai",
  },
  {
    id: "gpt-4o",
    label: "GPT 4o",
    apiIdentifier: "gpt-4o",
    description: "For complex, multi-step tasks",
    provider: "openai",
  },
  {
    id: "claude-3-5-sonnet",
    label: "Claude 3.5 Sonnet",
    apiIdentifier: "claude-3-5-sonnet-20241022",
    description: "For complex, multi-step tasks, with documents",
    provider: "anthropic",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "gpt-4o-mini";
