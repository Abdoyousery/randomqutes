var PopularQuotes = [
  {
    quote: "Be yourself; everyone else is already taken",
    name: " Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    name: " Marilyn Monroe",
  },
  {
    quote: "So many books, so little time",
    name: " Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    name: " Oscar Wilde",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    name: "― Bernard M. Baruch",
  },
  {
    quote: `You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.`,
    name: "― William W. Purkey",
  },
  {
    quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    name: "― Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    name: "― Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world",
    name: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    name: "― Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    name: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    name: "― Mark Twain",
  },
  {
    quote: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself`,
    name: "― C.S. Lewis, The Four Loves",
  },
  {
    quote: `A friend is someone who knows all about you and still loves you.`,
    name: "― Elbert Hubbard",
  },
  {
    quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
    name: "― Oscar Wilde",
  },
  {
    quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
    name: "― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
  },
  {
    quote: `We accept the love we think we deserve.`,
    name: "― Stephen Chbosky, The Perks of Being a Wallflower",
  },
  {
    quote: `Without music, life would be a mistake`,
    name: "― ― Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote: `It is better to be hated for what you are than to be loved for what you are not.`,
    name: "― Andre Gide, Autumn Leaves",
  },
];


var randomnum,prevrandom ;


function randomquotes() {
  do {
    prevrandom = randomnum;
    randomnum = Math.floor(Math.random() * 20);
  } while (randomnum == prevrandom);
  console.log(randomnum);
  
  document.getElementById("quotes").innerHTML = PopularQuotes[randomnum].quote;
  document.getElementById("name").innerHTML = PopularQuotes[randomnum].name;
}
