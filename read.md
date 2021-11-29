# hw 1

1) Create reacct a app

```
npx create-react-app app
```

2) Delete all useless files 

3) create in src folders  as

```
components 
    Profile
        index.js 
        style.module.css 
```

4) render ( that means import file) Profile in App.js and pass the data props 

```js
// as example 

const user = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

function App(){
    return (
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    )
}
```


```
Описание компонента <Profile>
Компонент должен принимать несколько пропсов с информацией о пользователе:

username — имя пользователя
tag — тег в социальной сети без @
location — город и страна
avatar — ссылка на изображение
stats — объект с информацией об активности
```

![Profile](./preview.png)
