var Quotes = [
    {quote: 'When we have respect for ourselves and others, we gravitate towards connections that encourage that.',
    author: 'Simeon Lindstrom'},
    {quote: 'Anger is the ultimate destroyer of your own peace of mind.',
    author: 'Dalai Lama'},
    {quote: 'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful',
    author: 'L. R. Eller'},
    {quote: 'Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you do not take the shot',
    author: 'Wayne Gretzky'},
    {quote: 'Don not be afraid. Be focused. Be determined. Be hopeful. Be empowered.',
    author: 'Michelle Obama'},
    {quote: 'The fact is that grief today is a family matter as much a s it is an individual one.',
    author: ' Barbara Okun'},
    {quote: 'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it',
    author: 'Muhammad Ali'},
    {quote: 'Failed? The most of people do not even try',
    author: 'Elon Musk'},
    {quote: 'Success is a lousy teacher. It seduces smart people into thinking they cannot lose. Your most unhappy customers are your greatest source of learning. Life is not fair; get used to it.',
    author: 'Bill Gates'},
]

const quote_text = document.querySelector('.quote-text');
const quote_author = document.querySelector('.quote-author');
const next_quote = document.querySelector('.generate-next-quote');

class Quote {
    constructor(quote, author){
        this.quote = quote;
        this.author = author;
    }
}

next_quote.addEventListener('click', ()=>{
    let Random = Math.floor(Math.random() * Quotes.length);
    var newQuote = new Quote(Quotes[Random].quote, Quotes[Random].author)

    quote_text.textContent = newQuote.quote;
    quote_author.textContent = newQuote.author;
})