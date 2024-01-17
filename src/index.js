function displayQuote(response) {
  //response.data.answer could have the response in it
  console.log("Your quote is ready, enjoy it :)");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  // Build the API URL
  let promptInput = document.querySelector("#user-prompts");
  let apiKey = "0239330ab540e803o5b4f9t7e63fbef4";
  let prompt = `The user prompts are: Generate a short, great and potent motivational stoic (or not) quote about ${promptInput.value}`;
  let context =
    "You are an awesome and acclaimed life motivational coach who love and have the mission to help and inspire people with short but powerful quotes. Make sure to follow the user prompts to answer with the most accurate quote. Please respect the user language or idiom and respond in the same language as the user prompts. At the end of the quote, it's important to Sign it with the name of the real author.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`generating your quote, be patient :`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  // Make a call to the Api with Axios

  axios.get(apiURL).then(displayQuote);
  //Display the generated quote
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
