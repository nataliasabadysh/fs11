# lesson 2 
1. Props, children  
2. propType
3. Render по условию


# PropTypes 

```

```








# Git pages 

В *package.json  вам нужено добавить
1)  “homepage”: “http://....github.io/repo”
2)  “deploy”: “gh-pages -d build”
npm run deploy
A если нужно обновить изменения
1) Перезалить на git
git add .
git commit -m”some text ”
git push origin master
2) И обновить gitpage
npm run deploy
 



# styled-components;

```js
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 26px 20px;
  max-width: 1240px;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#cbcbcb"};
`;
```

# filter 


```js 

    const [filterValue, setFilterValue] = useState(''); // Local State 
    const visibleList = list.goods.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))  

```