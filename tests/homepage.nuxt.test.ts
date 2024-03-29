import {expect, test} from "vitest";

test("homepage", async () => {
    const response = await fetch("http://localhost:3000")

    expect(response.ok).toBeTruthy()
    expect(response.status).toBe(200)
})