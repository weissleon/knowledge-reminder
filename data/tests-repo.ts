import { TestData } from "@src/types/Types";

let testData: TestData[] = require("./test_data.json");

export const testRepo = {
  reviewTest: (testId: string) =>
    testData.filter((testData) => testData.id === testId)[0] || null,
};
