const questions = [
  {q:"‘নবযুগ’ শব্দের অর্থ কী?", options:["নতুন যুগ","পুরোনো যুগ","মধ্যযুগ","ছোট যুগ"], ans:0},
  {q:"কোনটি অপঠিত শব্দ?", options:["অনুচ্ছেদ","অনুপ্রেক্ষা","অপরাজেয়","অনাবৃত"], ans:1},
  {q:"শুদ্ধ বানান কোনটি?", options:["অনুষ্ঠান","অনুষ্টান","অনুস্থান","অনবস্থান"], ans:0},
  {q:"‘অভিনব’ শব্দটির সমার্থক কোনটি?", options:["বিরল","নতুন","পুরনো","অব্যবহৃত"], ans:1},
  {q:"উপমা কোন ধরনের অলংকার?", options:["রূপক","তুলনামূলক","প্রত্যয়","উপবর্ণনা"], ans:1},
  {q:"‘শস্য’ শব্দের বহুবচন কোনটি?", options:["শস্যসম্ভার","শস্যগোছা","শস্যরা","শস্য"], ans:3},
  {q:"নিচের কোনটি কর্মবাচ্য বাক্যের উদাহরণ?", options:["সে বই পড়ে।","বই পড়া হয়।","তাকে বই পড়ানো হলো।","বই পড়িত হয়।"], ans:1},
  {q:"‘তুমি-করা’ ধরনের সর্বনাম কোনটি?", options:["তুমি","সে","আমরা","তারা"], ans:0},
  {q:"‘প্রতিশব্দ’ বলতে বোঝায়—", options:["সমার্থক শব্দ","বিপরীত শব্দ","সংক্ষিপ্ত রচনা","বিশেষ্য"], ans:0},
  {q:"‘উপপাদ্য’ শব্দের অর্থ কী?", options:["বিষয়বস্তু","মূল বক্তব্য","অনুচ্ছেদ","সমাপ্তি"], ans:1},
  {q:"কোনটি সমাসের উদাহরণ?", options:["মহাবিশ্ব","মানুষ","পাঠশালা","জীবন"], ans:0},
  {q:"‘তৎপর্য’ শব্দটির প্রতিশব্দ কী?", options:["তাৎপর্য","তুচ্ছ","ত্রুটিপূর্ণ","তন্ত্র"], ans:0},
  {q:"‘নামধাত্রী’ বলতে বোঝায়—", options:["নামযুক্ত বস্তু","নাম দিয়ে ডাক","নাম পরিবর্তন","নাম রক্ষা"], ans:0},
  {q:"কোনটি বাংলা ভাষার কাব্যধারা?", options:["উপন্যাস","মহাকাব্য","প্রবন্ধ","নাটক"], ans:1},
  {q:"‘উপসর্গ’ কীকে বলে?", options:["শব্দের শুরুতে যুক্ত অংশ","শব্দের শেষে যুক্ত অংশ","শব্দের মাঝে যুক্ত অংশ","বাক্যে যুক্ত অংশ"], ans:0},
  {q:"কোনটি সমার্থক জোড়া?", options:["ছোট—নির্মাণ","বড়—বিশাল","গরম—ঠাণ্ডা","হাসি—কাঁদা"], ans:1},
  {q:"‘ভাষ্য’ কি?", options:["ভাষার ব্যাখ্যা","ভাষার শব্দ","ভাষার ত্রুটি","ভাষার রীতি"], ans:0},
  {q:"কাব্যে ছন্দ কোন কাজে লাগে?", options:["সুর সরবরাহে","অর্থ পরিবর্তনে","বাক্য ভাঙতে","প্রবন্ধ লিখতে"], ans:0},
  {q:"‘অনুচ্ছেদ’ কী?", options:["লেখার একটি পর্ব","বাক্যের অংশ","শব্দের অংশ","প্রতিলিপি"], ans:0},
  {q:"‘বহুব্রীহি’ সমাস কি নির্দেশ করে?", options:["বিশেষ্য সম্পর্কিত","বিশেষণ সংক্রান্ত","কর্মের ধরন","অনুত্তর"], ans:0},
  {q:"সমাসবিচ্ছেদের সঠিক রীতি কোনটি?", options:["দুইটি শব্দ আলাদা","মিলিয়ে লেখা","শুধু প্রথমটি","নিঃশেষ করা"], ans:0},
  {q:"‘উপমা’তে সাধারণত কোন শব্দ ব্যবহৃত হয়?", options:["যেমন","যদি","যে","কেন"], ans:0},
  {q:"‘সন্ধি’ কী?", options:["স্বর বদল","শব্দ মিলন","ব্যাকরণ","রচনা"], ans:1},
  {q:"‘বাক্যশৈলী’ বলতে বুঝায়—", options:["লেখার রীতি","শব্দ সংখ্যা","শব্দ বর্ণ","বানান"], ans:0},
  {q:"‘উপন্যাস’ কোন ধরনের সাহিত্য?", options:["দীর্ঘ কাহিনী","ছোট কাহিনী","কবিতা","প্রবন্ধ"], ans:0},

  // English Section
  {q:"‘Abundant’ শব্দের বাংলা অর্থ কী?", options:["প্রচুর","কম","অনুপস্থিত","সামান্য"], ans:0},
  {q:"He ___ a teacher.", options:["is","are","am","be"], ans:0},
  {q:"Which one is passive?", options:["The cake was eaten by him.","He ate the cake.","Eating the cake.","Eat the cake."], ans:0},
  {q:"‘Their’ অর্থ কী?", options:["তাদের","তার","আমি","আপনি"], ans:0},
  {q:"‘Quickly’ কোন অংশ of speech?", options:["adverb","noun","verb","adjective"], ans:0},
  {q:"Correct spelling?", options:["Receive","Recieve","Receve","Reciave"], ans:0},
  {q:"Plural of child?", options:["childs","children","childes","childer"], ans:1},
  {q:"Opposite of increase?", options:["grow","decrease","rise","expand"], ans:1},
  {q:"She is good ___ math.", options:["at","in","on","for"], ans:0},
  {q:"Article used in ‘An apple’?", options:["An","A","The","None"], ans:0},
  {q:"Which is conjunction?", options:["and","beautiful","quickly","run"], ans:0},
  {q:"Synonym of happy?", options:["sad","joyful","angry","tired"], ans:1},
  {q:"Question form of ‘You are coming.’?", options:["Are you coming?","You are coming?","Coming you are?","Do you coming?"], ans:0},
  {q:"Comparative of good?", options:["gooder","better","more good","best"], ans:1},
  {q:"Tense of ‘She had finished the work.’", options:["Past perfect","Simple past","Present perfect","Future perfect"], ans:0},
  {q:"Which is interjection?", options:["Wow!","However","Because","Although"], ans:0},
  {q:"Plural of analysis?", options:["analysises","analyses","analysis","analyzess"], ans:1},
  {q:"Phrasal verb meaning postpone?", options:["put off","put on","put up","put in"], ans:0},
  {q:"Homophone of flower?", options:["flour","floor","flaw","flew"], ans:0},
  {q:"Imperative sentence?", options:["Please close the door.","The door is closed.","Who closed the door?","Door closes."], ans:0},
  {q:"Gerund in ‘Swimming is fun.’?", options:["Swimming","is","fun","none"], ans:0},
  {q:"Tag question: She can swim, ___?", options:["can she","can't she","cann't she","does she"], ans:1},
  {q:"Reported speech: He said, “I am tired.”", options:["He said he was tired.","He said he is tired.","He said he will be tired.","He said had been tired."], ans:0},
  {q:"Which is compound noun?", options:["toothpaste","run","fast","happy"], ans:0},
  {q:"‘Which’ কোন ধরনের শব্দ?", options:["pronoun","verb","adjective","preposition"], ans:0},

  // Math Section
  {q:"একটি সংখ্যার ২৫% = ৫০ হলে সংখ্যাটি কত?", options:["২০০","২৫০","১০০","৫০"], ans:0},
  {q:"১২৫ ÷ ৫ = ?", options:["২৫","২০","১৫","২৫০"], ans:0},
  {q:"ত্রিভুজের কোণের যোগফল?", options:["১৮০°","৯০°","৩৬০°","২৭০°"], ans:0},
  {q:"সরল সুদের সূত্র কী?", options:["SI = PRT/100","A = P(1+r)^t","CI = P(1+r/n)^(nt)","None"], ans:0},
  {q:"৭৫ এর ২০% = ?", options:["১৫","১২","১৮","২০"], ans:0},
  {q:"দুটি সংখ্যার গড় ৩০ হলে যোগফল?", options:["৩০","৬০","৪০","১৫"], ans:1},
  {q:"x=5 হলে 3x+4 = ?", options:["১৯","১৫","১৭","২০"], ans:0},
  {q:"১০০ টাকায় ১০% ভ্যাট = ?", options:["১০","১","২০","৫"], ans:0},
  {q:"১২ এবং ১৮ এর LCM?", options:["৩৬","২৪","১২","৬"], ans:0},
  {q:"√১৪৪ = ?", options:["১৪","১২","১০","১৬"], ans:1},
  {q:"x² = ৯ হলে x = ?", options:["৩ অথবা −৩","৯","০","২"], ans:0},
  {q:"২, ৩, ৫ এর LCM?", options:["৩০","৬","১৫","১০"], ans:0},
  {q:"বৃত্তের ক্ষেত্রফল?", options:["πr²","2πr","πd","r²"], ans:0},
  {q:"১ কেজি = ?", options:["১০০০ গ্রাম","১০০ গ্রাম","১০ গ্রাম","৫০ গ্রাম"], ans:0},
  {q:"৫ কেজি চাল ৩০০ টাকা হলে ১ কেজি?", options:["৬০","৫০","৭০","৫৫"], ans:0},
  {q:"২:৫ =", options:["২:৫","৫:২","৭:১","১:১"], ans:0},
  {q:"৩/৪ + ১/৪ = ?", options:["১","৩/২","১/২","২/৩"], ans:0},
  {q:"৫০% = কোন ভগ্নাংশ?", options:["১/২","১/৩","৩/৪","১/৪"], ans:0},
  {q:"(10+20+30)/3 = ?", options:["২০","১৫","২৫","১০"], ans:0},
  {q:"১২ × ৮ = ?", options:["৯৬","১০০","৮৪","১২০"], ans:0},
  {q:"১৫ ÷ ৩ = ?", options:["৫","৩","৭","১০"], ans:0},
  {q:"Series: 5,10,15 → Next?", options:["২০","২৫","৩০","১৫"], ans:0},
  {q:"২³ = ?", options:["৮","৬","৯","৪"], ans:0},
  {q:"৭০-৩০ = ?", options:["৪০","৫০","৩০","৬০"], ans:0},
  {q:"বর্গের ক্ষেত্রফল (পাশ=৫)?", options:["২৫","২০","১০","৫০"], ans:0},

  // GK Section
  {q:"বাংলাদেশ স্বাধীনতার তারিখ?", options:["২৬ মার্চ ১৯৭১","১৬ ডিসেম্বর ১৯৭১","২১ ফেব্রুয়ারি","১ জানুয়ারি"], ans:0},
  {q:"‘আমার সোনার বাংলা’ রচয়িতা?", options:["রবীন্দ্রনাথ","নজরুল","জয় গোবিন্দ","লিওটলস্ট"], ans:0},
  {q:"বাংলাদেশের রাজধানী?", options:["ঢাকা","চট্টগ্রাম","সিলেট","রাজশাহী"], ans:0},
  {q:"WHO সদর দফতর?", options:["জেনেভা","নিউইয়র্ক","লন্ডন","প্যারিস"], ans:0},
  {q:"জাতিসংঘ সদর দফতর?", options:["নিউইয়র্ক","জেনেভা","কিয়েভ","ব্রাসেলস"], ans:0},
  {q:"সবচেয়ে বড় মহাদেশ?", options:["এশিয়া","আফ্রিকা","ইউরোপ","অস্ট্রেলিয়া"], ans:0},
  {q:"বাংলাদেশ স্বাধীনতার নেতা?", options:["শেখ মুজিবুর রহমান","সৈয়দ নজরুল","খালেদা জিয়া","হুসেইন"], ans:0},
  {q:"জাতীয় ফুল?", options:["শাপলা","গোলাপ","রজনীগন্ধা","লিলি"], ans:0},
  {q:"জাতীয় ফল?", options:["আম","কাঁঠাল","লিচু","কলা"], ans:0},
  {q:"বাংলাদেশে নির্বাচনের মেয়াদ?", options:["৫ বছর","৪ বছর","৬ বছর","৩ বছর"], ans:0},
  {q:"WHO প্রতিষ্ঠা?", options:["১৯৪৮","১৯৩৮","১৯৫০","১৯৬০"], ans:0},
  {q:"নোবেল পুরস্কার প্রথম কোন বছরে?", options:["১৯০১","১৯১০","১৮৯০","১৮৮৭"], ans:0},
  {q:"ইউরোপীয় ইউনিয়নের প্রেসিডেন্ট?", options:["পরিবর্তনশীল","নেই","সাবেক রাষ্ট্রপতি","পুরোনো নাম"], ans:0},
  {q:"পৃথিবীর সর্বোচ্চ পর্বত?", options:["এভারেস্ট","কিলিমাঞ্জারো","কঞ্চনজঙ্ঘা","মাকালু"], ans:0},
  {q:"আন্তর্জাতিক মাতৃভাষা দিবস?", options:["২১ ফেব্রুয়ারি","২৬ মার্চ","১৬ ডিসেম্বর","১ জানুয়ারি"], ans:0},
  {q:"বায়ুমণ্ডলের প্রধান গ্যাস?", options:["নাইট্রোজেন","অক্সিজেন","কার্বন ডাই অক্সাইড","হাইড্রোজেন"], ans:0},
  {q:"বাংলাদেশের কেন্দ্রীয় ব্যাংক?", options:["বাংলাদেশ ব্যাংক","বাণিজ্যিক ব্যাংক","গ্রামীণ ব্যাংক","ফেরেদ্বা ব্যাংক"], ans:0},
  {q:"FAO কোন বিষয়ে?", options:["কৃষি ও খাদ্য","স্বাস্থ্য","নিরাপত্তা","শিক্ষা"], ans:0},
  {q:"বিশ্বব্যাংকের উদ্দেশ্য?", options:["উন্নয়ন সাহায্য","বিনিয়োগ","যুদ্ধ","খেলাধুলা"], ans:0},
  {q:"বাংলাদেশের সবচেয়ে বড় নদী?", options:["পদ্মা/মেঘনা/যমুনা","কাপ্তাই","তিতাস","আত্রাই"], ans:0},
  {q:"স্বাধীনতার যুদ্ধ শেষ?", options:["১৬ ডিসেম্বর ১৯৭১","২৬ মার্চ ১৯৭১","২১ ফেব্রুয়ারি","১ জানুয়ারি"], ans:0},
  {q:"জাতিসংঘের প্রধান লক্ষ্য?", options:["শান্তি রক্ষা","বাণিজ্য","সামরিক শক্তি","খাদ্য"], ans:0},
  {q:"DDT কী?", options:["কীটনাশক","ভ্যাকসিন","ওষুধ","সার"], ans:0},
  {q:"টিকা দেয়ার উদ্দেশ্য?", options:["রোগ প্রতিরোধ","রোগ সৃষ্টি","ওজন বাড়ানো","পুষ্টি"], ans:0},
  {q:"বিশ্ব পরিবেশ দিবস?", options:["৫ জুন","২২ এপ্রিল","১৫ আগস্ট","১ মে"], ans:0},
];
// Add all 100 questions similarly

let quizForm = document.getElementById("quizForm");

questions.forEach((item, index) => {
  let div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<b>${index+1}. ${item.q}</b>`;

  let optDiv = document.createElement("div");
  optDiv.className = "options";

  item.options.forEach((op, i) => {
    optDiv.innerHTML += `
      <label><input type='radio' name='q${index}' value='${i}'> ${op}</label>
    `;
  });

  div.appendChild(optDiv);
  quizForm.appendChild(div);
});

function submitQuiz(){
  let score = 0;
  let output = "<h3>Result:</h3>";

  questions.forEach((item, index) => {
    let selected = document.querySelector(`input[name='q${index}']:checked`);
    if(!selected){
      alert("Please answer all questions before submitting.");
      return;
    }
  });

  questions.forEach((item, index) => {
    let selected = document.querySelector(`input[name='q${index}']:checked`).value;

    if(parseInt(selected) === item.ans){ score++; }

    output += `<p><b>${index+1}. ${item.q}</b><br>`;
    output += `Your answer: ${item.options[selected]} - `;
    output += parseInt(selected)===item.ans ? `<span class='correct'>Correct</span>` : `<span class='wrong'>Wrong</span>`;
    output += `<br>Correct answer: <span class='correct'>${item.options[item.ans]}</span></p>`;
  });

  document.getElementById("result").innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>` + output;
}
