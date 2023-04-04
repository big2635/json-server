/// <reference types="cypress" />

describe("Get Request", () => {
    var result;

    //get the http
    it("Validate status code of the /posts api", () => {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal", 200)
    })


    //get the keys and values
    it("Validate /posts api contains the correct keys and values", () => {
        
        //http URL
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body);

            //get the specific values
            expect(body[0]).has.property("id", 1,"title", "example json-server","author", "marbz");
            expect(body[1]).has.property("id", 2,"title", "marbz blogs", "marbz");
           // expect(body[1]).has.property("author", "Joe Blogs");

           //check the items
            body.forEach(function(item) {
                expect(item).to.have.all.keys("id", "title", "author");
                cy.log("Author: " + item["author"] + " & Title: " + item["title"]);
            });
        })
    })
})