import { persistent } from "./persistentStore";
import { useWritable } from "./use-shared-store";

// export const useDarkMode = () => useWritable('dark', false);
export const darkMode = persistent('dark', false);
