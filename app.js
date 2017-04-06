// Lists of English words that rhyme with line-ending words in Green Eggs and Ham
// These are JavaScript arrays

var am_nouns = ['Sam', 'ham', 'am', 'spam', "ma'am", 'dam', 'jam', 'lamb', 'ram', 'tam'];

var ouse_nouns = ['house', 'mouse', 'blouse', 'louse'];

var oat_nouns = ['boat', 'goat', 'oat', 'moat', 'coat', 'tote'];

var ox_nouns = ['box', 'fox', 'ox', 'pox'];

var ain_nouns = ['rain', 'train', 'cane', 'mane', 'pane', 'pain', 'stain', 'crane'];

var see_verbs = ['see', 'flee', 'be', 'pee'];

var tree_nouns = ['tree', 'bee', 'fee', 'flea', 'knee', 'pea', 'sea', 'tea', 'tee'];

var eat_verbs = ['eat', 'beat', 'heat', 'meet', 'seat', 'treat'];

var would_verbs = ['would', 'could'];

var like_verbs = ['like', 'bike', 'hike', 'spike'];

// The text of Green Eggs and Ham, in HTML code

var original_text = '<p> I am Sam <br/> Sam I am <br/> That Sam-I-am <br/> That Sam-I-am! <br/> I do not like <br/> that Sam-I-am <br/> Do you like <br/> green eggs and ham <br/> I do not like them, <br/> Sam-I-am. <br/> I do not like <br/> green eggs and ham. <br/> Would you like them <br/> Here or there? <br/> I would not like them <br/> here or there. <br/> I would not like them <br/> anywhere. <br/> I do not like <br/> green eggs and ham. <br/> I do not like them, <br/> Sam-I-am <br/> Would you like them <br/> in a house? <br/> Would you like them <br/> with a mouse? <br/> I do not like them <br/> in a house. <br/> I do not like them <br/> with a mouse. <br/> I do not like them <br/> here or there. <br/> I do not like them <br/> anywhere. <br/> I do not like green eggs and ham. <br/> I do not like them, Sam-I-am. <br/> Would you eat them <br/> in a box? <br/> Would you eat them <br/> with a fox? <br/> Not in a box. <br/> Not with a fox. <br/> Not in a house. <br/> Not with a mouse. <br/> I would not eat them here or there. <br/> I would not eat them anywhere. <br/> I would not eat green eggs and ham. <br/> I do not like them, Sam-I-am. <br/> Would you? Could you? <br/> in a car? <br/> Eat them! Eat them! <br/> Here they are. <br/> I would not, <br/> could not, <br/> in a car <br/> You may like them. <br/> You will see. <br/> You may like them <br/> in a tree? <br/> I would not, could not in a tree. <br/> Not in a car! You let me be. <br/> I do not like them in a box. <br/> I do not like them with a fox <br/> I do not like them in a house <br/> I do not like them with a mouse <br/> I do not like them here or there. <br/> I do not like them anywhere. <br/> I do not like green eggs and ham. <br/> I do not like them, Sam-I-am. <br/> A train! A train! <br/> A train! A train! <br/> Could you, would you <br/> on a train? <br/> Not on a train! Not in a tree! <br/> Not in a car! Sam! Let me be! <br/> I would not, could not, in a box. <br/> I could not, would not, with a fox. <br/> I will not eat them with a mouse <br/> I will not eat them in a house. <br/> I will not eat them here or there. <br/> I will not eat them anywhere. <br/> I do not like them, Sam-I-am. <br/> Say! <br/> In the dark? <br/> Here in the dark! <br/> Would you, could you, in the dark? <br/> I would not, could not, <br/> in the dark. <br/> Would you, could you, <br/> in the rain? <br/> I would not, could not, in the rain. <br/> Not in the dark. Not on a train, <br/> Not in a car, Not in a tree. <br/> I do not like them, Sam, you see. <br/> Not in a house. Not in a box. <br/> Not with a mouse. Not with a fox. <br/> I will not eat them here or there. <br/> I do not like them anywhere! <br/> You do not like <br/> green eggs and ham? <br/> I do not <br/> like them, <br/> Sam-I-am. <br/> Could you, would you, <br/> with a goat? <br/> I would not, <br/> could not. <br/> with a goat! <br/> Would you, could you, <br/> on a boat? <br/> I could not, would not, on a boat. <br/> I will not, will not, with a goat. <br/> I will not eat them in the rain. <br/> I will not eat them on a train. <br/> Not in the dark! Not in a tree! <br/> Not in a car! You let me be! <br/> I do not like them in a box. <br/> I do not like them with a fox. <br/> I will not eat them in a house. <br/> I do not like them with a mouse. <br/> I do not like them here or there. <br/> I do not like them ANYWHERE! <br/> I do not like <br/> green eggs <br/> and ham! <br/> I do not like them, <br/> Sam-I-am. <br/> You do not like them. <br/> SO you say. <br/> Try them! Try them! <br/> And you may. <br/> Try them and you may I say. <br/> Sam! <br/> If you will let me be, <br/> I will try them. <br/> You will see. <br/> Say! <br/> I like green eggs and ham! <br/> I do!! I like them, Sam-I-am! <br/> And I would eat them in a boat! <br/> And I would eat them with a goat... <br/> And I will eat them in the rain. <br/> And in the dark. And on a train. <br/> And in a car. And in a tree. <br/> They are so good so good you see! <br/> So I will eat them in a box. <br/> And I will eat them with a fox. <br/> And I will eat them in a house. <br/> And I will eat them with a mouse. <br/> And I will eat them here and there. <br/> Say! I will eat them ANYWHERE! <br/> I do so like <br/> green eggs and ham! <br/> Thank you! <br/> Thank you, <br/> Sam-I-am. <br/> </p>';

// This function puts the GE&S text into the web page wherever it finds an element with ID 'shakespeare'

function insertText () {
  document.getElementById('shakespeare').innerHTML = original_text;
}

// This variable makes the replace_random_word() function repeat by default.

var keep_going = true;

// The main function, which finds a random word in the text and if it finds it in one of the lists above,
// replaces it with a different word from that list

function replace_random_word() {

  // Get text from the website and split it by word into a list (array), using spaces to delimit words

  var the_text = document.getElementById('shakespeare').innerHTML;
  var the_text_words = the_text.split(' ');

  // Pick a random word in the array of words

  var random_index = Math.floor(Math.random() * the_text_words.length);
  var random_word = the_text_words[random_index];

  // Find the punctuation-free word without erasing the random_word variable that contains the punctuation
  // (which we'll need later)

  var random_word_no_punc = random_word.replace(',', '').replace('.', '').replace('?', '').replace('!', '').replace(';', '');
  var random_word_no_punc_no_quote = random_word_no_punc.replace(/"/g, '');
  if (random_word[0] == '"') {
    leading_quote = true;
  } else {
    leading_quote = false;
  }
  if (random_word[random_word.length - 1] == '"') {
    trailing_quote = true;
  } else {
    trailing_quote = false;
  }
  console.log(random_word, random_word_no_punc, random_word_no_punc_no_quote);

  // WORD REPLACEMENT LOOP

  // Search part-of-speech lists for the selected target word
  // If present in one of those lists, replace it with another word in that list

  if (am_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = am_nouns[Math.floor(Math.random() * am_nouns.length)];
  } else if (ouse_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = ouse_nouns[Math.floor(Math.random() * ouse_nouns.length)];
  } else if (oat_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = oat_nouns[Math.floor(Math.random() * oat_nouns.length)];
  } else if (ox_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = ox_nouns[Math.floor(Math.random() * ox_nouns.length)];
  } else if (ain_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = ain_nouns[Math.floor(Math.random() * ain_nouns.length)];
  } else if (see_verbs.includes(random_word_no_punc_no_quote)) {
    new_word = see_verbs[Math.floor(Math.random() * see_verbs.length)];
  } else if (tree_nouns.includes(random_word_no_punc_no_quote)) {
    new_word = tree_nouns[Math.floor(Math.random() * tree_nouns.length)];
  } else if (eat_verbs.includes(random_word_no_punc_no_quote)) {
    new_word = eat_verbs[Math.floor(Math.random() * eat_verbs.length)];
  } else if (like_verbs.includes(random_word_no_punc_no_quote)) {
    new_word = like_verbs[Math.floor(Math.random() * like_verbs.length)];
  } else if (would_verbs.includes(random_word_no_punc_no_quote)) {
    new_word = would_verbs[Math.floor(Math.random() * would_verbs.length)];
  } else {
    new_word = random_word_no_punc_no_quote;
  }

  // If there was punctuation in the originally selected word, add it to the new word

  if (random_word != random_word_no_punc && trailing_quote == false) {
    new_word += random_word[random_word.length-1];
  } else if (random_word != random_word_no_punc && trailing_quote == true) {
    new_word += random_word[random_word.length-2];
  }
  if (trailing_quote == true) {
    new_word += '"';
  }
  if (leading_quote == true) {
    new_word = '"' + new_word;
  }

  // Put the new word (with punctuation, if necessary) into the word array

  the_text_words[random_index] = new_word;

  // Use the word array to reconstruct a website-friendly text block

  var the_new_text = the_text_words.join(' ');

  // Replace the whole text block on the web page with the new text block (without reloading the page)

  document.getElementById('shakespeare').innerHTML = the_new_text;

  // Repeat the proess until keep_going = false

  if (keep_going == true) {
    setTimeout('replace_random_word()', 20);
  }
}

// A function to stop the replace_random_word() function from looping
// This function will be attached to the stop button on the page

function stop () {
  keep_going = false;
}
