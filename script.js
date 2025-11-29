const questions = [
  {q:"‘নবযুগ’ শব্দের অর্থ কী?", options:["নতুন যুগ","পুরোনো যুগ","মধ্যযুগ","ছোট যুগ"], ans:0},
  {q:"কোনটি অপঠিত শব্দ?", options:["অনুচ্ছেদ","অনুপ্রেক্ষা","অপরাজেয়","অনাবৃত"], ans:1},
  {q:"শুদ্ধ বানান কোনটি?", options:["অনুষ্ঠান","অনুষ্টান","অনুস্থান","অনবস্থান"], ans:0},
  {q:"‘অভিনব’ শব্দটির সমার্থক কোনটি?", options:["বিরল","নতুন","পুরনো","অব্যবহৃত"], ans:1},
  {q:"উপমা কোন ধরনের অলংকার?", options:["রূপক","তুলনামূলক","প্রত্যয়","উপবর্ণনা"], ans:1},

  // English Section
  {q:"‘Abundant’ শব্দের বাংলা অর্থ কী?", options:["প্রচুর","কম","অনুপস্থিত","সামান্য"], ans:0},
  {q:"He ___ a teacher.", options:["is","are","am","be"], ans:0},
  {q:"Which one is passive?", options:["The cake was eaten by him.","He ate the cake.","Eating the cake.","Eat the cake."], ans:0},
  {q:"‘Their’ অর্থ কী?", options:["তাদের","তার","আমি","আপনি"], ans:0},
  {q:"‘Quickly’ কোন অংশ of speech?", options:["adverb","noun","verb","adjective"], ans:0},

  // Math Section
  {q:"একটি সংখ্যার ২৫% = ৫০ হলে সংখ্যাটি কত?", options:["২০০","২৫০","১০০","৫০"], ans:0},
  {q:"১২৫ ÷ ৫ = ?", options:["২৫","২০","১৫","২৫০"], ans:0},
  {q:"ত্রিভুজের কোণের যোগফল?", options:["১৮০°","৯০°","৩৬০°","২৭০°"], ans:0},
  {q:"সরল সুদের সূত্র কী?", options:["SI = PRT/100","A = P(1+r)^t","CI = P(1+r/n)^(nt)","None"], ans:0},
  {q:"৭৫ এর ২০% = ?", options:["১৫","১২","১৮","২০"], ans:0},

  // GK Section
  {q:"বাংলাদেশ স্বাধীনতার তারিখ?", options:["২৬ মার্চ ১৯৭১","১৬ ডিসেম্বর ১৯৭১","২১ ফেব্রুয়ারি","১ জানুয়ারি"], ans:0},
  {q:"‘আমার সোনার বাংলা’ রচয়িতা?", options:["রবীন্দ্রনাথ","নজরুল","জয় গোবিন্দ","লিওটলস্ট"], ans:0},
  {q:"বাংলাদেশের রাজধানী?", options:["ঢাকা","চট্টগ্রাম","সিলেট","রাজশাহী"], ans:0},
  {q:"WHO সদর দফতর?", options:["জেনেভা","নিউইয়র্ক","লন্ডন","প্যারিস"], ans:0},
  {q:"জাতিসংঘ সদর দফতর?", options:["নিউইয়র্ক","জেনেভা","কিয়েভ","ব্রাসেলস"], ans:0},
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
