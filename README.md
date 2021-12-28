

# HOSTING  
1) Log in In netlify

https://app.netlify.com/

https://www.npmjs.com/package/netlify-cli

git 

3) Installing


```js

// https://app.netlify.com/



1) npm install netlify-cli -g
2) netlify login 

```

3) Scripts 

```json
"predeploy": "npm run build",
"deploy": "netlify deploy -p"
```

5) Deploying 


```
npm run deploy 

```


```
This folder isn't linked to a site yet
? What would you like to do? +  Create & configure a new site
? Team: nataliasabadysh's team
Choose a unique site name (e.g. isnt-nataliasabadysh-awesome.netlify.app) or leave it blank for a random name. You can update the site name later.
? Site name (optional): f11-test
 ```


6) Open the site 

```js
 netlify open --site
```





# GIT HUB 


```js
"homepage": "http://gitname.github.io/react-gh-pages" // NAME REPO 
npm install --save gh-pages

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
```





# TS 
npx create-react-app my-app --template typescript
FriendList.ts // (.js  //. jsx )
