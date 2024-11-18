# How I uploaded this Angular app to GitHub Pages
Author: Jan-FCloud

## GitHub Pages

GitHub Pages is one of the best ways for developers to host their websites on. It is fast, easy to set up and easy to update.

But many might opt for the HTML, CSS and JS route, writing everything from scratch and not using any frameworks and such, since GitHub Pages only supports static websites.

## Angular

"Angular is a TypeScript based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.

Angular is a component-based framework, which means that applications are built up from reusable components that can be combined to create complex user interfaces. Angular also provides a number of features that make it easy to build scalable and maintainable web applications." <a href="https://medium.com/@jiri.caga/intro-to-angular-f159021917a0" target="_blank">[1]</a><a href="https://angular.dev/overview" target="_blank">[2]</a>

## The issue at hand

Given what Angular is used for, many might think that deploying their Angular App to GitHub Pages might not be an option at first.

But that's where an amazing npm package comes into play!

## Angular CLI GHPages

<a href="https://www.npmjs.com/package/angular-cli-ghpages" target="_blank">angular-cli-ghpages</a> is an amazing package, that let's you deploy your Angular Apps to ghpages. 

Now I won't be getting into the specifics of what it is, but I will get into the step by step process, the problems and their solutions so you can get your Angular app up and running in no time!

## Setup

First (if you haven't already) make sure to install the Angular CLI:
```bash
# This example is for npm, but I personally use bun
npm install -g @angular/cli
```

Now that we have the Angular CLI and have access to **ng**, let's add the package:

```bash
ng add angular-cli-ghpages
```

## Deployment

Now that we have all the required things installed, we have to double-check and keeps a few things in mind.

### Angular json config

Let's start with **angular.json**. We first need to make sure that the thing responsible for deploying is in fact our newly installed package, that we have the correct builder set and that we have assets we want to keep as they are in the built and deployed app itself:

```json
// This json might not be correct in here, since it only shows points of interest! So copying and pasting it won't benefit you :)

{
  //...
  "projects": {
    "jans-dev": {
      "projectType": "application", // As of v2.0 of angular-cli-ghpages, we need to set this to application
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application", // set the builder to application as well
          "options": {
            "outputPath": "dist/jans-dev/",
            "index": "src/index.html",
            "browser": "src/main.ts", // this used to be "main". Change it to "browser"
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [ // this is where you list elements that you want to keep in the directory of your built projects
              "src/favicon.ico",
              "src/assets",
              "src/public/posts",
              "src/sitemap.xml",
              "src/robots.txt",
              "src/CNAME" // This will be important for anyone that wants to use a custom domain and uses the v2.0 of the package!
            ],
            //...
          },
          "configurations": {
            "production": {
              //...
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true,
              // "buildOptimizer": false, -- DELETE this
              // "vendorChunk": true, -- DELETE this
              // ! We delete the above, since they are not supported for the build type, and it won't build in development if you keep these two here.
            }
          },
          // ...
        },
        // ...
        "deploy": {
          "builder": "angular-cli-ghpages:deploy" // In this example, the builder is set correctly
        }
      }
    }
  },
// ...
}
```

### Deploying to GitHub Pages
The major configuration is now out of the way and now we need to figure out your deployment script parameters.

Here is an example of the one I used:
```bash
ng deploy --repo=https://github.com/Jan-Fcloud/jans.dev.git --message="What could possibly go wrong again?" --branch=gh-pages --no-nojekyll
```

Lets go through these parameters: (for other params, go to the package documentation)
- repo:
    
    this is where I specified to which repo it will be deployed to. Note, that the default parameter, is your git remote you have added. But I have personally had more success adding this here regardless of my added remotes.

- message:

    this is just the git commit message that gets added

- branch:

    the branch parameters specifies which GitHub branch you are deploying your built app to. The default is gh-pages, but I feel safer specifying it again

- no-nojekyll:

    I added this so GitHub doesn't use it's jekyll page theme on my app that could break my styles

Notice how I didn't add the cname parameter? That is because of the v2.0 update, it has trouble creating the cname file. Therefor, I added a CNAME file to the root of my app, and specified it as an asset in the angular.json file, so it is kept the way it is. And since I placed it in the root of my source code, it will be kept in the root of my deployed and built app as well.

For ease of access, I added this script to my packages.json file, so I can always just run the script without needing to retype the above command and parameters.

## Conclusion
And that's about it! It's actually very simple to get set up and deploy.

The deployment itself is also very fast and will always notify you of anything gone wrong so you know what to search for and fix!

I hope this guide helped you get your own Angular application up and running on GitHub Pages!