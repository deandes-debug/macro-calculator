document.getElementById('macroForm').addEventListener('submit', function(e){
e.preventDefault();
const age = Number(this.age.value);
const sex = this.sex.value;
const height = Number(this.height.value);
const weight = Number(this.weight.value);
const activity = Number(this.activity.value);
const goal = this.goal.value;

let bmr = sex === 'male'
? 10*weight + 6.25*height - 5*age + 5
: 10*weight + 6.25*height - 5*age - 161;

let calories = bmr * activity;
if(goal==='lose') calories -= 500;
if(goal==='gain') calories += 500;

const protein = Math.round((calories*0.3)/4);
const carbs = Math.round((calories*0.4)/4);
const fat = Math.round((calories*0.3)/9);

sessionStorage.setItem('calories', calories);
sessionStorage.setItem('protein', protein);
sessionStorage.setItem('carbs', carbs);
sessionStorage.setItem('fat', fat);

window.location.href = 'results.html';
});
