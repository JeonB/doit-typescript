import { ResultType } from "./ResultType";

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurred...");
  } catch (e) {
    if (e instanceof Error) {
      return [false, e.message];
    }
    return [false, "An error occurred but no message was provided"];
  }
};
