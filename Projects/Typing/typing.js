const box = document.querySelector('.typing');
const text = [
  "Wow!^Cieszę się, że jesteś.^Lubię mówić do ludzi!",
  "Jak masz na imię? Może Stanisław?^Był tu taki Stanisław kiedyś, spędziliśmy razem piękne wspólne chwile.",
  "Niestety żona kazała mu odejść od monitora i wrzucić węgiele do pieca.^Mam nadzieję, że Ty nie masz pieca!"
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 80; //czym większa wartość tym wolniejszy typing
const stop = 2000; //zatrzymanie między kolejnymi tekstami
let activeDOMElement = box;

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++
        wordIndex = 0;
        requestAnimationFrame(typing)
      }, stop)

    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;
  }
  requestAnimationFrame(typing);

}

typing()
