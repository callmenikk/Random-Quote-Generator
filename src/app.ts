const quote_text = document.querySelector(".quote-text") as HTMLDivElement
const quote_author = document.querySelector(".quote-author") as HTMLDivElement
const next_quote = document.querySelector(".generate-next-quote") as HTMLButtonElement

interface quoteInterface {
    text: string;
    author: string;
}

const FetchQuote = async (): Promise<void> => {

    await fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(quote => {
        const random: number = Math.floor(Math.random() * quote.length)
        const {text, author}: quoteInterface = quote[random]
        
        quote_text.innerHTML = text
        quote_author.innerHTML = author
    })
    .catch(err => console.log(err))
}

next_quote.addEventListener("click", FetchQuote)