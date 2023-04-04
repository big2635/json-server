/// <reference types="cypress" />

describe("Put Request", () => {

    //get the http
    it("Update an existing post via /posts api", () => {
        //http URL
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/4",
            body: { //send request to the json
                title: "Where ca i buy apples?",
                author: "Tom Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });
});