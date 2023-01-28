const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
const loading = () =>
{loader.hidden = false;
quoteContainer.hidden = true;}

//  Hide Loading
const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Get Quotes From API

// show New Quote
const newQuote = () => {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unkown'
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
    // local version
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // console.log(quote);
}
// Async within try catch
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        // fetch statement: response not populated until some data is fetched from api
       const response = await fetch(apiUrl) ;
    //converting response into json object
       apiQuotes = await response.json();
       newQuote();
    } catch {
        // Catch Error Here
    }
}

// Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// // On Load
getQuotes();

// if using local array
// newQuote();