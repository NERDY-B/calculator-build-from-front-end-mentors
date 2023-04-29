`use strict mode`
const theme = document.querySelector('.theme');
const bgChangeList = theme.querySelectorAll('li');
const lastContainer = document.querySelector('.last-container');
const parentList = document.querySelector('.parent-list');
const underParentList = parentList.querySelector('ul');
const thirdContainer = document.querySelector('.third-container');
const secondContainer = document.querySelector('.second-container');
const child = underParentList.querySelectorAll('*');
let inputVal = [];
// const valString =  [...inputVal].slice(0, inputVal.length-1).join('');
let operatorArr = [];
let answerVal = [];
let input;
let i = 0;
let processVal = '0';
let answer = 0;
const HTMLel = document.createElement('h1');

let dataVal;

const processor = function(inputOperator) {
   if(inputOperator === '+')
   valString.join(' ');
 {  +processVal  + (+`${processVal}`) + (+`${valString[i + 1]}`)}
    console.log(processVal);
    
    //  return +processVal;
}        


console.log(bgChangeList);
theme.addEventListener('click', function(e){
    dataVal = (e.target.dataset.theme);
    // console.log(typeof(e.target.dataset.theme));
    // dataVal = 1;
    // const el = e.target;

    if(+dataVal === 1){
        document.querySelector('.del').style.removeProperty('background');
        document.querySelector('.reset').style.removeProperty('background');

        console.log('background change');
        e.target.classList.toggle('hidden');
        document.querySelector('body').style.background = `rgb(42, 24, 121)`;
        // lastContainer.style.background = `rgb(24, 13, 73);`
        lastContainer.style.removeProperty("background");
        lastContainer.style.background = `rgb(24, 13, 73)`;

        thirdContainer.style.removeProperty('background');
        thirdContainer.style.background =`rgb(24, 13, 73);`;

        secondContainer.querySelector('div').style.background = `rgb(24, 13, 73)`;
        //  theme.querySelector('li').style.background = `rgb(238, 98, 16)`;
         

         bgChangeList.forEach((el, i,arr) => {
            if(+dataVal === +(el.dataset.theme)){
                // el[i+(arr.length-2)].style.opacity = 0;
                // el[i + (arr.length-1)].style.opacity = 0;

                arr[1].setAttribute('class','hidden');
                arr[2].setAttribute('class','hidden');
                console.log(el);
                return;
            }
        });
    }

     
    if(+dataVal === 2){
        document.querySelector('.del').style.removeProperty('background');
        document.querySelector('.reset').style.removeProperty('background');
        console.log('background change');
        // document.querySelector('body').style.background = `rgb(150, 148, 148)`;
        document.querySelector('body').style.background = `rgb(214, 208, 208)`;
        lastContainer.style.setProperty(`background`, `rgb(245, 238, 238`);
        // lastContainer.style.background = `rgb(150, 148, 148)`;
        // underParentList.querySelectorAll('li').forEach(el => el.style.background = `rgb(214, 208, 208)`);
        thirdContainer.style.background =`rgb(245, 238, 238)`;
        secondContainer.querySelector('div').style.background = `rgb(245, 238, 238)`;
        e.target.classList.toggle('hidden');
        // e.target.style.opacity = 1;

        bgChangeList.forEach((el, i,arr) => {
            if(+dataVal === +(el.dataset.theme)){
                // el[i-1].style.opacity = 0;
                // el[i + 1].style.opacity = 0;
                console.log(arr);
                
                arr[0].setAttribute('class','hidden');
                arr[2].setAttribute('class','hidden');
                return;
            }

        });
        
    }

    if(+dataVal === 3){
        console.log('background change');
        e.target.classList.toggle('hidden');
        // document.querySelector('body').style.background = `rgb(150, 148, 148)`;
        bgChangeList.forEach((el, i,arr) => {
            if(+dataVal === +(el.dataset.theme)){
                // el[i-1].style.opacity = 0;
                // el[i + 1].style.opacity = 0;
                arr[2].style.background = `rgb(133, 191, 248)`    ;
                arr[0].setAttribute('class','hidden');
                arr[1].setAttribute('class','hidden');
                return;
            }
        });

        document.querySelector('body').style.background = `rgb(60, 4, 87)`;
        lastContainer.style.background = `rgb(31, 2, 46)`;
        // underParentList.querySelectorAll('*').forEach(el => el.style.background = `rgb(214, 208, 208)`);
        thirdContainer.style.background =`rgb(31, 2, 46)`;
        secondContainer.querySelector('div').style.background = `rgb(31, 2, 46)`;
    }
        // console.log(dataset.theme);
        

        
const parentUnderList = document.querySelector('.button');
Array.from(parentUnderList.querySelectorAll('li')).forEach((el, i, arr) => 
    { 

	
						
        arr[i].classList.contains('none') ? '' : el.style.background = `rgb(150, 148, 148)`;
        if(+dataVal === 3 && el.classList.contains('none'))
                {
                    document.querySelector('.del').style.background = `rgb(248, 8, 236)`;
                    document.querySelector('.reset').style.background = `rgb(248, 8, 236)`;
                } 

					
    });
});
        console.log(child);
       
const screenDisplay = function(){
    lastContainer.addEventListener('click', function(e){
        
        input = e.target.textContent;
        HTMLel.textContent += `${input}`;

        HTMLel.style.setProperty('display','flex');
        HTMLel.style.setProperty('align-items','flex-end');
        thirdContainer.prepend(HTMLel);

        inputVal = HTMLel.textContent; 
      
        if(input === '='){
            
            // const valString =  [...inputVal].slice(0, inputVal.length-1).join('');
            // console.log([...valString]);

            for(i; i <  inputVal.length; i++){
	
                if(inputVal[i] === '+' || '*' || '/', '-')
                processor(valString[i])
            
                processVal + inputVal[i] ;
                //make process val an empty string 
                //so that inputVal is concatenated
                
            }
        }
    })
}

screenDisplay();
// create two array , one store the entire values and split theme, the other (check input if +, -, *, /)
// convert the separated array values to number carry out the arithmetic operation on the sequence of operatorarr and display when equal is clicked , check the input if is delete, reset before perfoming logic
//loop through input value , if it is either store that value in the operator arr
//loop throught the input value ,slice the array value store somewhere else

//loop throught the input value element, if array element is +,-,/,*
//const answer input= +inputval arr.split(input)
//const answer ((input === 'x')? input=* :input) = +inputval arr.split(input)
