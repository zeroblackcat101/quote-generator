// let apiQuotes = [];
// Get Quotes From API

// show New Quote
const newQuote = () => {
    // Pick a random quote from apiQuotes array
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    // local version
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}
// Async within try catch
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         // fetch statement: response not populated until some data is fetched from api
//        const response = await fetch(apiUrl) ;
//     //converting response into json object
//        apiQuotes = await response.json();
//        newQuote();
//     } catch {
//         // Catch Error Here
//     }
// }

// // On Load
// getQuotes();

// if using local array
newQuote();