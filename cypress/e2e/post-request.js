/// <reference types="cypress" />

describe("Post Request", () => {

    var titleOfPosts = new Array();
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    //get the http
    it("Create a new post via /posts api", () => {
        //http URL
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: { //send request to the json
                title: randomTitle,
                author: "Sarah Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    });

    it("Validate title of lastest post", () => {
        //http URL
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {

            //call the json
            let body = JSON.parse(JSON.stringify(response.body));
           
            //store all title inside of new array
            body.forEach(function(item) {
                titleOfPosts.push(item["title"]);
            })
        }).then(() =>{
            var lastestPost = titleOfPosts[titleOfPosts.length -1]
            expect(lastestPost).to.eq(randomTitle) //assertion of last value
        })
    });
});