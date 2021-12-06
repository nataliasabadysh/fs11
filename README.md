
```js

const api = {
    getPhotos: (query, page = 1) =>`https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
}
```


* tips, just as example on click search method 

```js
   const onSearch = () => {
        setQuery(inputValue)
        setInputValue('')
        setPage(1)
    };
```

