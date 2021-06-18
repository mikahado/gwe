// Test Methods
import { assembleBookPages } from "./constructorHelpers";
import translationsSpa from "../data/books/translationsSpa";

// Test Arguments
let contentId = "riversOfSunlight";
let endPage = 18;

describe("assembleBookPages", () => {
  it("it assembles spanish translations", () => {
    const pageData = assembleBookPages(contentId, endPage);

    let page = 1;
    let pageIndex = page - 1;

    expect(pageData[pageIndex].translation.get("spa")).toBe(
      translationsSpa[contentId][page]
    );
  });
});
