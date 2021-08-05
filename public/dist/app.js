"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quote_text = document.querySelector(".quote-text");
const quote_author = document.querySelector(".quote-author");
const next_quote = document.querySelector(".generate-next-quote");
const FetchQuote = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(quote => {
        const random = Math.floor(Math.random() * quote.length);
        const { text, author } = quote[random];
        quote_text.innerHTML = text;
        quote_author.innerHTML = author;
    })
        .catch(err => console.log(err));
});
next_quote.addEventListener("click", FetchQuote);
