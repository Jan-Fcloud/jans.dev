export interface Post {
    title : string;
    path: string;
    img_url : string;
    description : string;
}

export class postData{

    static assetPath = "/assets";
    static basePath = "/public/posts";

    static data : Post[] = [
        /*
        {
            title: "",
            path: `${this.basePath}/`,
            img_url: "",
            description: "",
        },
        */
       
        {
            title: "Hello World",
            path: `${this.basePath}/hello-world.md`,
            img_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=256",
            description: "Welcome to the blog! This is the first (test) post.",
        },
        {
            title: "How I uploaded this Anuglar app to GitHub Pages",
            path: `${this.basePath}/angular-to-ghpages.md`,
            img_url: `${this.assetPath}/angular-to-ghpages.png`,
            description: "A comprehensive guide on how to deploy an Angular app to GitHub Pages.",
        },


    ];
}