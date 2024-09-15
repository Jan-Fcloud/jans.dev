export interface Repo {
    url : string;
    avatar_url : string;
    fullname : string;
    description : string;
    language : string;
    languageColor : string;
}

export class repoData{

    colors: any = {
        "C#": "#178600",
        "C++": "#f34b7d",
        "Python": "#3572A5",
        "TypeScript": "#3178c6",
        "JavaScript": "#f1e05a",
        "Rust": "#dea584",
        "PHP": "#4F5D95",
        "HTML": "#e34c26",
        "CSS": "#563d7c"
    }

    data : Repo[] = [
        /*
        {
            url: "",
            avatar_url: "",
            fullname: "",
            description: "",
            language: "",
            languageColor: ""
        },
        */
       
        {
            url: "https://github.com/Jan-Fcloud/jans.dev",
            avatar_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=64",
            fullname: "jans.dev",
            description: "The website you're currenty on!",
            language: "TypeScript",
            languageColor: this.colors.TypeScript
        },
        {
            url: "https://github.com/Jan-Fcloud/W101-TriviaAnswers",
            avatar_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=64",
            fullname: "W101-TriviaAnswers",
            description: "A userscript that provides trivia answers for Wizard101.",
            language: "JavaScript",
            languageColor: this.colors.JavaScript
        },
        {
            url: "https://github.com/Jan-Fcloud/media-dl-assistant",
            avatar_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=64",
            fullname: "media-dl-assistant",
            description: "An old project of mine that acts as a user firendly terminal interface for youtube-dl.",
            language: "C++",
            languageColor: this.colors["C++"]
        },
        {
            url: "https://github.com/Jan-Fcloud/Unitypackage-Extract-and-Clean",
            avatar_url: "https://avatars.githubusercontent.com/u/47220014?v=4&size=64",
            fullname: "Unitypackage-Extract-and-Clean",
            description: "A fork of an old version of EasyExtractUnitypackage that is modified to remove .dll and .cs files.",
            language: "C#",
            languageColor: this.colors["C#"]
        },
        {
            url: "https://github.com/HakuSystems/EasyExtractUnitypackage",
            avatar_url: "https://avatars.githubusercontent.com/u/66133638?v=48&size=64",
            fullname: "EasyExtractUnitypackage",
            description: "A unitypackage extractor and inspector.",
            language: "C#",
            languageColor: this.colors["C#"]
        },
    ];
  static data: Repo[];
}