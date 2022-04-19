"use strict";
window.onload = ()=>{
// Original Story Commented Out:
// No amount of education and training can prepare you for death or a pandemic. I knew a doctor who went to Africa a few years ago to help with an Ebola outbreak. He was still rattled as he sat next to me at a bar. We were drinking whiskey. “The man’s drink,” as my college roommate and a longtime friend used to tell me. As a doctor, I knew I drank too much. With every sip, I imagined myself as a boxer pounding my liver. “It’s just the dying…the helplessness…the deathing…,” he muttered through a nearly drunken haze. “Deathing?” I asked. He shrugged his shoulders and told me to read The Tibetan Book of the Dead. “I am not Zen,” he concluded. I finished off my whiskey. I could care less about religion or Eastern philosophy. “If you were Zen you wouldn’t need to declare yourself Zen. You would just be,” I retorted. My friend stared at me for a few seconds and began to cry. Quiet tears slid down his face. 

// I worked at Francis Memorial Hospital in New York City. I was preparing to be a cardiothoracic surgeon, but Covid derailed my training. I was lucky if I got to cut once a week. I was placed on Covid detail. This meant reading a two hundred page manual on policy, procedures, and treatments. To enter the Covid Ward I had to wear a hospital hazmat suit. It imposed a barrier between me and the patients. It was for my safety. Many were dying or “deathing” as my friend would say, yet some were recovering and holding strong.

  let questionTotal=15;
  let questionCounter=0;
  let userInputs=[];
  let questionArray= [
    `Enter a noun (education,cooking etc)`,
    `Enter a profession (cleaner,dentist etc)`,
    `Enter a country`,
    `Enter a noun (any place)`,
    `Enter a drinkable (juice, cola etc)`,
    `Enter a profession`,
    `Enter a book name`,
    `Enter a disease (diherrea etc)`,
    `Enter a relation (uncle , brother etc)`,
    `Enter a emotion (laugh etc)`,
    `Enter a noun (any place)`,
    `Enter a noun (any famous comedian)`,
    `Enter any name of costume (batman suit)`,
    `Enter a noun (workers ,employee etc)`,
    `Enter a verb (cooking ,running)`,
  ];
      for (let i=questionTotal;i>=0;i--){
          console.log( 
            questionArray[questionCounter]+ `...${questionTotal} questions remaining`
          );
          userInputs.push(
            prompt(
              console.log(questionArray[questionCounter] + `... (${questionTotal} questions left)`)
              )
          );
        console.log(userInputs);
        questionCounter++;
        questionTotal--;
      }
// A Very Covid Carol By Risa Peris
let originalStory= `<h2>No amount of ${userInputs[0]} and training can prepare you for death or a pandemic. I knew a ${userInputs[1]} who went to ${userInputs[2]} a few years ago to help with an Ebola outbreak. He was still rattled as he sat next to me at a ${userInputs[3]}. We were drinking ${userInputs[4]}. “The mans drink,” as my college roommate and a longtime ${userInputs[8]} used to tell me. As a doctor, I knew I drank too much. With every sip, I imagined myself as a ${userInputs[5]} pounding my liver. “Its just the dying…the helplessness…the deathing…,” he muttered through a nearly drunken haze. “Deathing?” I asked. He shrugged his shoulders and told me to read ${userInputs[6]} Book of the Dead. “I am not ${userInputs[7]},” he concluded. I finished off my ${userInputs[4]}. I could care less about religion or Eastern philosophy. “If you were ${userInputs[7]} you wouldnt need to declare yourself ${userInputs[7]}. You would just be,” I retorted. My ${userInputs[8]} stared at me for a few seconds and began to ${userInputs[9]}. Quiet tears slid down his face. 

I worked at ${userInputs[10]} Hospital in New York City. I was preparing to be a ${userInputs[11]} surgeon, but Covid derailed my training. I was lucky if I got to cut once a week. I was placed on Covid detail. This meant reading a two hundred page manual on policy, procedures, and treatments. To enter the Covid Ward I had to wear a ${userInputs[12]}. It imposed a barrier between me and the ${userInputs[13]}. It was for my safety. Many were ${userInputs[14]} as my ${userInputs[8]} would say, yet some were recovering and holding strong.</h2>`;

console.log(originalStory);

  alert(
    "All done! Rady for your totally-accurate,not-at-all confusing story of A Very Covid Carol (Story By Risa Peris)????"
  );

  console.log(originalStory);
  document.write(originalStory);
  console.log("Good Bye");
};

