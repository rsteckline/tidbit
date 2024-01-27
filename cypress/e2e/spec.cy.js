describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6caedfe4e93a416aa2a44571703532bf",
      {
        statusCode: 200, fixture: "articles.json",
      }
    ).as("news");

  cy.visit("http://localhost:3000/");
});

  it("should be able to see the app title in the header", () => {
    cy.get("h1").contains("Tidbit");
  });

});
