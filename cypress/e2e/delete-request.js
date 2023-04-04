/// <reference types="cypress" />

describe("delete Request.", () => {

    //get the http
    it("Delete post via /posts api.", () => {
        //http URL
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/4"
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });
});