// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    console.log(response.data.articles)
     response.data.articles.placeholder
     
  

    function cardBuilder(arr){
      return arr.map(crrV =>{
          console.log(crrV) 

        const newCard = document.createElement('div');
        const newHeadline = document.createElement('div');
        const newAuthorContainer = document.createElement('div');
        const newImgContainer = document.createElement('div');
        const authorImg = document.createElement('img');
        const authorSpan = document.createElement('span');

        newCard.setAttribute('class', 'card');
        newHeadline.setAttribute('class', 'headline');
        newAuthorContainer.setAttribute('class', 'author');
        newImgContainer.setAttribute('class', 'img-container');
        authorImg.setAttribute('src', crrV.authorPhoto);

         console.log(crrV.headline)
        newHeadline.textContent = crrV.headline;
        authorSpan.textContent = crrV.authorName;

        newImgContainer.appendChild(authorImg)

        newAuthorContainer.appendChild(newImgContainer);
        newAuthorContainer.appendChild(authorSpan);

        newCard.appendChild(newHeadline);
        newCard.appendChild(newAuthorContainer);

        const getCardContainer = document.querySelector('.cards-container')
        return getCardContainer.append(newCard)
      })
    }
   
    //  cardBuilder(response.data.articles.javascript);
    //  cardBuilder(response.data.articles.bootstrap);
    //  cardBuilder(response.data.articles.technology);
    //  cardBuilder(response.data.articles.jquery);
    //  cardBuilder(response.data.articles.node);

      for(const property in response.data.articles){
        console.log(property) ;
        cardBuilder(response.data.articles[property]);
      }

  }) 

    function cardBuilder(arr){
      return arr.map(crrV =>{
         console.log(crrV) 
         .card.addEventListener(click, () => {console.log(headline)} ) 
        const newCard = document.createElement('div');
        const newHeadline = document.createElement('div');
        const newAuthorContainer = document.createElement('div');
        const newImgContainer = document.createElement('div');
        const authorImg = document.createElement('img');
        const authorSpan = document.createElement('span');

        newCard.setAttribute('class', 'card');
        newHeadline.setAttribute('class', 'headline');
        newAuthorContainer.setAttribute('class', 'author');
        newImgContainer.setAttribute('class', 'img-container');
        authorImg.setAttribute('src', crrV.authorPhoto);

         console.log(crrV.headline)
        newHeadline.textContent = crrV.headline;
        authorSpan.textContent = crrV.authorName;

        newImgContainer.appendChild(authorImg)

        newAuthorContainer.appendChild(newImgContainer);
        newAuthorContainer.appendChild(authorSpan);
        newCard.appendChild(newHeadline);
        newCard.appendChild(newAuthorContainer);
        
        const getCardContainer = document.querySelector('.cards-container')
        return getCardContainer.append(newCard)
    })
}
 cardBuilder(response.data.articles.javascript);
    cardBuilder(response.data.articles.bootstrap);
    cardBuilder(response.data.articles.technology);
    cardBuilder(response.data.articles.jquery);
    cardBuilder(response.data.articles.node)

for(const property in response.data.articles){
    console.log(property) ;
    cardBuilder(response.data.articles[property]);


}
