export interface Post {
    title : string;
    path: string;
    img_url : string;
    description : string;
}

export class postData{

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
            img_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=64",
            description: "Welcome to the blog! This is the first (test) post.",
        },


    ];
}