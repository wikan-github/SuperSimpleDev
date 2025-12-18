import { describe, expect, it } from "vitest";
import { formatMoney } from "./money";

describe("formatMoneyTests", () => {
	it("format money 1999 to $19.99", () => {
		expect(formatMoney(1999)).toBe("$19.99");
	});
	it("display cents with two digits", () => {
		expect(formatMoney(1090)).toBe("$10.90");
		expect(formatMoney(100)).toBe("$1.00");
	});
});
