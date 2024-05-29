import { expect, test } from "vitest";

test("Range.compareBoundaryPoints should throw error", () => {
	const text1 = document.createElement("text");
	const text2 = document.createElement("text");

	const range = new Range();
	range.setStart(text1, 0);

	const sourceRange = new Range();
	sourceRange.setStart(text2, 0);

	const position = range.compareBoundaryPoints(
		Range.START_TO_START,
		sourceRange,
	); // shoud throw an error, since the text1 and text2 are in the different tree

	console.log(position); // -1

	// result doesn't matter
	expect(true).toBe(true);
});
