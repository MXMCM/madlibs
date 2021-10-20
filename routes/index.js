var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/story', function (req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story',{
    newStory: newStory
  })
});

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice ==="4"){
     formData.storyChoice = getnumber(3);
  }
  if (formData.storyChoice === "1" || formData.storyChoice=== 1){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"|| formData.storyChoice=== 2){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"|| formData.storyChoice=== 3){
    return generateStory3(formData);
  }else{
    return"invalid";
  }
}

function generateStory1(formData){
  return `Today I went to my favorite Taco Stand called the ${formData.adjective1} ${formData.noun2}. Unlike most food stands, they cook and prepare the food in a ${formData.noun4} while you ${formData.verb1}. The best thing on the menu is the ${formData.adjective2} ${formData.noun1}.
   Instead of ground beef they fill the taco with ${formData.noun3}, cheese, and top it off with a salsa made from ${formData.noun5}. If that doesn't make your mouth water, then it' just like always says: ${formData.verb2}!`
}

function generateStory2(formData) {
  return `Today a a named ${formData.noun1} came to our school to talk to us about her job. She said the most important skill you need to know to do her job is to be able to ${formData.verb2} around ${formData.noun3} ${formData.adjective1} ${formData.noun2}.
   She said it was easy for her to learn her job because she loved to ${formData.verb1} when she was my age--and that helps a lot!
   If you're considering her profession, I hope you can be near ${formData.adjective2} ${formData.noun5}. That's very important! If you get too distracted in that situation you won't be able to run next to ${formData.noun4}!`
}

function generateStory3(formData) {
  return `Say '${formData.noun1},' the photographer said as the camera flashed! ${formData.noun2} and I had gone to ${formData.noun3} to get our photos taken today.
   The first photo we really wanted was a picture of us dressed as ${formData.verb2} pretending to be a ${formData.noun4}. When we saw the proofs of it, I was a bit b because it looked different than in my head.
   (I hadn't imagined so many ${formData.adjective1} behind us.) However, the second photo was exactly what I wanted. We both looked like ${formData.adjective2} wearing ${formData.noun5} and ${formData.verb1}--exactly what I had in mind!`
}
router.post('/random', function (req,res) {
  res.render('index', {
    color:generateRandomHexCode(),
    textColor:generateRandomHexCode()
  })
});
function generateRandomHexCode() {
  let hexCode = "#";
  while(hexCode.length < 7){
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}
function getnumber(max) {
  return Math.floor(Math.random()*max +1 )
}