const button$$ = document.querySelector('button');
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  for (let index = 0; index < countries.length; index++) {
      const div$$ = document.createElement('div');
      const country = countries[index];
      div$$.innerHTML = '<h4>${country.title}</h4><img src="${country.imgUrl}"/>';
  
      document.body.appendChild(div$$);
  }

  button$$.addEventListener('click', function () {
      const divs$$ = document.body.querySelectorAll('div');
      divs$$[divs$$.length - 1].remove();
  })


