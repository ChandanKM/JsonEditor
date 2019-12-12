import { Component, OnInit } from '@angular/core';

//import { ShowError } from './showError.component';
import { Hero } from '../shared/hero';

@Component({
  selector: 'template-driven-form',
  templateUrl: './templateForm.component.html'
})
export class TemplateFormComponent implements OnInit {
  model: Hero;
  powers: string[];
  submitted: boolean = false;
  questions : any;
  question : any;
  constructor() { }

  ngOnInit() {

    var verbalAbility  = {
      "questiontype": "VA",
      "part1": [{

          "instructions": {
              "instructionDescription": " In PART1, first look at the word in capital letters. Then, from the"+
                                        " five words that follow, find the one that means the same thing as the word"+
                                        " in capitals, and mark that answer on the screen, in the box given below.",
              "instructionInfo": "Work as quickly and accurately as you can. You will have 4 minutes for"+
              " PART 1 and 3 minutes and 30 second for PART 2 .If you are not sure of the right answer for an item,"+
              " mark the choice that is your best guess.",
              "instructionInfo2":"An example follows. Mark the correct answer on your screen in the box for EXAMPLE X.",
              "stopInstruction": "When you have finished PART 1, please STOP, do not turn to PART 2",
              "startInstruction": "PLEASE WAIT FOR THE INSTRUCTION TO START",
              "qType":"VA",
              "sampleQuestions": [{
                  "question": { "id": "1", "type": "text", "name": "ATTEMPT" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "hit" },
                      { "id": "b", "type": "text", "name": "try" },
                      { "id": "c", "type": "text", "name": "falter" },
                      { "id": "d", "type": "text", "name": "walk" },
                      { "id": "e", "type": "text", "name": "quarrel" }
                  ],

                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",
                  "sampleQuestion1Info":"Since ATTEMPT and TRY mean the same thing. TRY is the correct answer."+
                  " Therefore, you should choose 'Second option'. "
              },
              {
                  "question": { "id": "2", "type": "text", "name": "LET ANOTHER'S SHIPWRECK BE YOUR GUIDE AT SEA" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "one man's meat is another man's poison" },
                      { "id": "b", "type": "text", "name": "ships fear fire more than water" },
                      { "id": "c", "type": "text", "name": "wise men learn from other men's mistakes" },
                      { "id": "d", "type": "text", "name": "the worst things happen at sea" },
                      { "id": "e", "type": "text", "name": "chart acareful course" }
                  ],

                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",
                  "part2Info":"In PART2, First read the saying or proverb in capital letters. Then, from the "+
                  "five sayings under it, find the one that means the same thing, and mark that answer. ",
                  "sampleQuestion2Info":"Since LET ANOTHER'S SHIPWRECK BE YOUR GUIDE AT SEA means about the same "+
                  "thing as WISE MEN LEARN FROM OTHER MEN'S MISTAKES, you should choose 'Third option'. "
              }
              ],
              "audioInstruction": "assets/audio/Verbal_ability.mp3"
          },
          "questionbankJson": [{
              "testname": "VA",
              "totalQuestion":"24",
              "timer": "7.50",
              "questions": [{
                  "question": { "id": "PART-I 1", "type": "text", "name": "FAST" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "old" },
                      { "id": "b", "type": "text", "name": "rapid" },
                      { "id": "c", "type": "text", "name": "slow" },
                      { "id": "d", "type": "text", "name": "early" },
                      { "id": "e", "type": "text", "name": "late" }
                  ],

                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "2", "type": "text", "name": "DECEIVE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "blunder" },
                      { "id": "b", "type": "text", "name": "obtain" },
                      { "id": "c", "type": "text", "name": "conceal" },
                      { "id": "d", "type": "text", "name": "mislead" },
                      { "id": "e", "type": "text", "name": "disclose" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "3", "type": "text", "name": "EXCESS" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "waste" },
                      { "id": "b", "type": "text", "name": "departure" },
                      { "id": "c", "type": "text", "name": "surplus" },
                      { "id": "d", "type": "text", "name": "tax" },
                      { "id": "e", "type": "text", "name": "approach" }
                  ],
                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "4", "type": "text", "name": "BELIEVABLE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "admirable" },
                      { "id": "b", "type": "text", "name": "real" },
                      { "id": "c", "type": "text", "name": "personable" },
                      { "id": "d", "type": "text", "name": "unlikely" },
                      { "id": "e", "type": "text", "name": "credible" }
                  ],
                  "correctAnswer": "e",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "5", "type": "text", "name": "CONTEMPLATE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "heal" },
                      { "id": "b", "type": "text", "name": "advance" },
                      { "id": "c", "type": "text", "name": "meditate" },
                      { "id": "d", "type": "text", "name": "rest" },
                      { "id": "e", "type": "text", "name": "worry" }
                  ],
                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "6", "type": "text", "name": "AMIABLE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "friendly" },
                      { "id": "b", "type": "text", "name": "humorous" },
                      { "id": "c", "type": "text", "name": "healthy" },
                      { "id": "d", "type": "text", "name": "convincing" },
                      { "id": "e", "type": "text", "name": "polished" }
                  ],
                  "correctAnswer": "a",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "7", "type": "text", "name": "TURMOIL" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "circular" },
                      { "id": "b", "type": "text", "name": "turbulent" },
                      { "id": "c", "type": "text", "name": "calm" },
                      { "id": "d", "type": "text", "name": "spinning" },
                      { "id": "e", "type": "text", "name": "air-borne" }
                  ],
                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "8", "type": "text", "name": "DECEPTIVE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "illogical" },
                      { "id": "b", "type": "text", "name": "illusory" },
                      { "id": "c", "type": "text", "name": "magical" },
                      { "id": "d", "type": "text", "name": "visible" },
                      { "id": "e", "type": "text", "name": "clear" }
                  ],
                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "9", "type": "text", "name": "WHIMSICAL" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "unlike" },
                      { "id": "b", "type": "text", "name": "musical" },
                      { "id": "c", "type": "text", "name": "dancing" },
                      { "id": "d", "type": "text", "name": "unpredictable" },
                      { "id": "e", "type": "text", "name": "equatorial" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "10", "type": "text", "name": "APATHETIC" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "ignorant" },
                      { "id": "b", "type": "text", "name": "indifferent" },
                      { "id": "c", "type": "text", "name": "pitiful" },
                      { "id": "d", "type": "text", "name": "concerned" },
                      { "id": "e", "type": "text", "name": "clever" }
                  ],
                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "11", "type": "text", "name": "ARDUOUS " },
                  "answer": [
                      { "id": "a", "type": "text", "name": "repulsive" },
                      { "id": "b", "type": "text", "name": "loving" },
                      { "id": "c", "type": "text", "name": "easy" },
                      { "id": "d", "type": "text", "name": "interesting" },
                      { "id": "e", "type": "text", "name": "strenuous" }
                  ],
                  "correctAnswer": "e",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "12", "type": "text", "name": "PLACATE " },
                  "answer": [
                      { "id": "a", "type": "text", "name": "cover" },
                      { "id": "b", "type": "text", "name": "beautify" },
                      { "id": "c", "type": "text", "name": "arouse" },
                      { "id": "d", "type": "text", "name": "plasticize" },
                      { "id": "e", "type": "text", "name": "appease" }
                  ],
                  "correctAnswer": "e",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "13", "type": "text", "name": "CLANDESTINE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "furtive" },
                      { "id": "b", "type": "text", "name": "safe" },
                      { "id": "c", "type": "text", "name": "tribal" },
                      { "id": "d", "type": "text", "name": "open" },
                      { "id": "e", "type": "text", "name": "healthful" }
                  ],
                  "correctAnswer": "a",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "14", "type": "text", "name": "VINDICATE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "deny" },
                      { "id": "b", "type": "text", "name": "state" },
                      { "id": "c", "type": "text", "name": "persecute" },
                      { "id": "d", "type": "text", "name": "defend" },
                      { "id": "e", "type": "text", "name": "accuse" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "15", "type": "text", "name": "INCULCATE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "grow" },
                      { "id": "b", "type": "text", "name": "inquire" },
                      { "id": "c", "type": "text", "name": "instil" },
                      { "id": "d", "type": "text", "name": "compute" },
                      { "id": "e", "type": "text", "name": "acquire" }
                  ],
                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              },
              // {
              //     "question": { "id": "", "type": "text", "name": "INCULCATE" },
              //     "answer": [
              //         { "id": "a", "type": "text", "name": "grow" },
              //         { "id": "b", "type": "text", "name": "inquire" },
              //         { "id": "c", "type": "text", "name": "instill" },
              //         { "id": "d", "type": "text", "name": "compute" },
              //         { "id": "e", "type": "text", "name": "acquire" }
              //     ],
              //     "correctAnswer": "c",
              //     "selectedAnswer": " ",
              //     "type": "radio",
              //     "crud": "I",
              //     "personId": "",

              // }
              {"question": { "id": "PART-II 16", "type": "text", "name": "STRIKE WHILE THE IRON IS HOT" },
              "answer": [
                  { "id": "a", "type": "text", "name": "Take things as you find them" },
                  { "id": "b", "type": "text", "name": "Hot love is soon cold" },
                  { "id": "c", "type": "text", "name": "Make hay while the sun shines" },
                  { "id": "d", "type": "text", "name": "First think and then speak" },
                  { "id": "e", "type": "text", "name": "Look before you leap" }
              ],
              "correctAnswer": "c",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "17", "type": "text", "name": "IT NEVER RAINS BUT IT POURS" },
              "answer": [
                  { "id": "a", "type": "text", "name": "cloudy mornings turn to clear evenings" },
                  { "id": "b", "type": "text", "name": "misfortunes never come one at a time" },
                  { "id": "c", "type": "text", "name": "easy come, easy go" },
                  { "id": "d", "type": "text", "name": "the least predictable thing in life is the weather" },
                  { "id": "e", "type": "text", "name": "every cloud has a silver lining" }
              ],
              "correctAnswer": "b",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "18", "type": "text", "name": "LET SLEEPING DOGS LIE" },
              "answer": [
                  { "id": "a", "type": "text", "name": " as you make your bed, so you must lie on it" },
                  { "id": "b", "type": "text", "name": "do not keep a dog and bark yourself" },
                  { "id": "c", "type": "text", "name": "there will be sleeping enough in the grave" },
                  { "id": "d", "type": "text", "name": "never look for trouble; let trouble look for you" },
                  { "id": "e", "type": "text", "name": " an old dog does not bark for nothing" }
              ],
              "correctAnswer": "d",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "19", "type": "text", "name": "THERE IS NO VENOM LIKE THAT OF THE TONGUE" },
              "answer": [
                  { "id": "a", "type": "text", "name": "the tongue of an idle person is never idle" },
                  { "id": "b", "type": "text", "name": "talking pays no toll" },
                  { "id": "c", "type": "text", "name": "few words are best" },
                  { "id": "d", "type": "text", "name": " words cut more than swords" },
                  { "id": "e", "type": "text", "name": "bad news travels fast" }
              ],
              "correctAnswer": "d",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "20", "type": "text", "name": " IT IS ALWAYS DARKEST BEFORE THE DAWN" },
              "answer": [
                  { "id": "a", "type": "text", "name": "the longest day means the shortest night" },
                  { "id": "b", "type": "text", "name": "what is done by night appears by day" },
                  { "id": "c", "type": "text", "name": " he who runs in the dark may well stumble" },
                  { "id": "d", "type": "text", "name": "he who groupcs in the dark finds what he would not" },
                  { "id": "e", "type": "text", "name": "when things are at the worst they will improve" }
              ],
              "correctAnswer": "e",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "21", "type": "text", "name": "ALL THAT GLITTERS IS NOT GOLD" },
              "answer": [
                  { "id": "a", "type": "text", "name": "don't judge a book by its cover" },
                  { "id": "b", "type": "text", "name": "all men can't be masters" },
                  { "id": "c", "type": "text", "name": "gold dust blinds all eyes" },
                  { "id": "d", "type": "text", "name": "money is the root of all evil" },
                  { "id": "e", "type": "text", "name": "riches alone will not make a man happy" }
              ],
              "correctAnswer": "a",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "22", "type": "text", "name": "TOO MANY COOKS SPOIL THE BROTH" },
              "answer": [
                  { "id": "a", "type": "text", "name": "too much praise is a burden" },
                  { "id": "b", "type": "text", "name": "too much consulting confounds" },
                  { "id": "c", "type": "text", "name": "truth needs not many words" },
                  { "id": "d", "type": "text", "name": "actions speak louder than words" },
                  { "id": "e", "type": "text", "name": "when needs is highest, help is nighest" }
              ],
              "correctAnswer": "b",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "23", "type": "text", "name": "A STITCH IN TIME SAVES NINE" },
              "answer": [
                  { "id": "a", "type": "text", "name": "it is never too late to mend" },
                  { "id": "b", "type": "text", "name": "time cures all things" },
                  { "id": "c", "type": "text", "name": "prevention is better than cure" },
                  { "id": "d", "type": "text", "name": "take time while time is, for time will away" },
                  { "id": "e", "type": "text", "name": "it is no use crying over spilled milk " }
              ],
              "correctAnswer": "c",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }, {
              "question": { "id": "24", "type": "text", "name": "LITTLE STROKES FELL GREAT OAKS" },
              "answer": [
                  { "id": "a", "type": "text", "name": "step after step the ladder is ascended" },
                  { "id": "b", "type": "text", "name": "great strokes make not sweet music" },
                  { "id": "c", "type": "text", "name": "tall oaks from little acorns grow" },
                  { "id": "d", "type": "text", "name": "oaks may fall when reeds stand the storm" },
                  { "id": "e", "type": "text", "name": "little things please little minds" }
              ],
              "correctAnswer": "a",
              "selectedAnswer": " ",
              "type": "radio",
              "crud": "I",
              "personId": "",

          }]
          }]
      }],
      "part2": [{
          "questiontype": "VA",
          "instructions": {
              "instructionDescription": "PART1, first look at the word in capital letters. Then, from the five words that follow, find the one that nut arise the same thing as the word in capitals, and mark that answer on the screen, in the box given below.",
              "instructionInfo": "",
              "stopInstruction": "",
              "startInstruction": "",
              "sampleQuestions": [{
                  "question": { "id": "1", "type": "text", "name": "LET ANOTHER'S SHIPWRECK BE YOUR GUIDE AT SEA" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "one man's meat is an man's poison" },
                      { "id": "b", "type": "text", "name": "ships fear fire more than water" },
                      { "id": "c", "type": "text", "name": "wise men learn from other men's mistakes" },
                      { "id": "d", "type": "text", "name": "the worst things happen at sea" },
                      { "id": "e", "type": "text", "name": "chart a careful course" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }
              ],
              "audioInstruction": "assets/audio/Verbal_ability.mp3"
          },
          "questionbankJson": [{
              "testname": "VA",
              "timer": "3:30",
              "questions": [{
                  "question": { "id": "16", "type": "text", "name": "STRIKE WHILE THE IRON IS HOT" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "Take things as you find them" },
                      { "id": "b", "type": "text", "name": "Hot love is soon cold" },
                      { "id": "c", "type": "text", "name": "Make hay while the sun shines" },
                      { "id": "d", "type": "text", "name": "First think and then speak" },
                      { "id": "e", "type": "text", "name": "Look before you leap" }
                  ],
                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "17", "type": "text", "name": "NEVER RAINS BUT IT POURS" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "cloudy mornings turn to clear evenings" },
                      { "id": "b", "type": "text", "name": "misfortunes never come one at a time" },
                      { "id": "c", "type": "text", "name": "easy come, easy go" },
                      { "id": "d", "type": "text", "name": "the least predictable thing in life is the weather" },
                      { "id": "e", "type": "text", "name": "every cloud has a silver lining" }
                  ],
                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "18", "type": "text", "name": "LET SLEEPING DOGS LIE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": " as you make your bed, so you must lie on it" },
                      { "id": "b", "type": "text", "name": "do not keep a dog and bark yourself" },
                      { "id": "c", "type": "text", "name": "there will be sleeping enough in the grave" },
                      { "id": "d", "type": "text", "name": "never look for trouble; let trouble look for you" },
                      { "id": "e", "type": "text", "name": " an old dog does not bark for nothing" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "19", "type": "text", "name": "THERE IS NO VENOM LIKE THAT OF THE TONGUE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "the tongue of an idle person is never idle" },
                      { "id": "b", "type": "text", "name": "talking pays no toll" },
                      { "id": "c", "type": "text", "name": "few words are best" },
                      { "id": "d", "type": "text", "name": " words cut more than swords" },
                      { "id": "e", "type": "text", "name": "bad news travels fast" }
                  ],
                  "correctAnswer": "d",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "20", "type": "text", "name": " IT IS ALWAYS DARKEST BEFORE THE DAWN" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "the longest day means the shortest night" },
                      { "id": "b", "type": "text", "name": "what is done by night appears by day" },
                      { "id": "c", "type": "text", "name": " he who runs in the dark may well stumble" },
                      { "id": "d", "type": "text", "name": "he who groupcs in the dark finds what he would not" },
                      { "id": "e", "type": "text", "name": "when things are at the worst they will improve" }
                  ],
                  "correctAnswer": "e",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "21", "type": "text", "name": "ALL THAT GLITTERS IS NOT GOLD" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "don't judge a book by its cover" },
                      { "id": "b", "type": "text", "name": "all men can't be masters" },
                      { "id": "c", "type": "text", "name": "gold dust blinds all eyes" },
                      { "id": "d", "type": "text", "name": "money is the root of all evil" },
                      { "id": "e", "type": "text", "name": "riches alone will not make a man happy" }
                  ],
                  "correctAnswer": "a",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "22", "type": "text", "name": "TOO MANY COOKS SPOIL THE BROTH" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "too much praise is a burden" },
                      { "id": "b", "type": "text", "name": "too much consulting confounds" },
                      { "id": "c", "type": "text", "name": "truth needs not many words" },
                      { "id": "d", "type": "text", "name": "actions speak louder than words" },
                      { "id": "e", "type": "text", "name": "when needs is highest, help is nighest" }
                  ],
                  "correctAnswer": "b",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "23", "type": "text", "name": "A STITCH IN TIME SAVES NINE" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "it is never too late to mend" },
                      { "id": "b", "type": "text", "name": "time cures all things" },
                      { "id": "c", "type": "text", "name": "prevention is better than cure" },
                      { "id": "d", "type": "text", "name": "take time while time is, for time will away" },
                      { "id": "e", "type": "text", "name": "it is no use crying over spilled milk " }
                  ],
                  "correctAnswer": "c",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }, {
                  "question": { "id": "24", "type": "text", "name": "LITTLE STROKES FELL GREAT OAKS" },
                  "answer": [
                      { "id": "a", "type": "text", "name": "step after step the ladder is ascended" },
                      { "id": "b", "type": "text", "name": "great strokes make not sweet music" },
                      { "id": "c", "type": "text", "name": "tall oaks from little acorns grow" },
                      { "id": "d", "type": "text", "name": "oaks may fall when reeds stand the storm" },
                      { "id": "e", "type": "text", "name": "little things please little minds" }
                  ],
                  "correctAnswer": "a",
                  "selectedAnswer": " ",
                  "type": "radio",
                  "crud": "I",
                  "personId": "",

              }]
          }]
      }]

    };
      this.model = new Hero(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');

      this.powers = ['Really Smart', 'Turbulent Breeze',
                     'Super Hot', 'Weather Changer'];
      this.question = verbalAbility.part1[0].instructions.sampleQuestions[0];
      this.questions = verbalAbility.part1[0].instructions.sampleQuestions;
      console.log(this.question);
  }

  onSubmit() {

    console.log("After Submit",this.question);
    this.submitted = true;
  }
}
