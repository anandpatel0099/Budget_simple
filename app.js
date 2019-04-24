
//Budget controller
var budgetController=(function(){

	
})();




//UI controller
var UIController =(function(){
	
	var DOMstring={
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputvalue: '.add__value',
		inputBtn: '.add__btn'
	};
	
	
	return{
	getInput: function(){
			return{
				type: document.querySelector(DOMstring.inputType).value, // incr or expe
				description: document.querySelector(DOMstring.inputDescription).value,
				value: document.querySelector(DOMstring.inputvalue).value
			};
		},
		getDOMstrings: function(){
			return DOMstring;
		}
	};
	
})();





// Global app controller
var controller =(function(bdgtCtrl,UICntrl){
	var DOM = UICntrl.getDOMstrings();
	var ctrlAddItem = function(){
		//1. get the input value from field
		var input = UICntrl.getInput();
		console.log(input);
		//2. update the budget controller
		//3. add item to the UI
		//4. calculate budget
		//5. Display budget to the UI
		
		console.log('It is also working fine');
		
	}
	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
	
	document.addEventListener('keypress', function(event){
		if(event.keyCode==13 || event.which==13){
			ctrlAddItem();
		}
		
	});
})(budgetController,UIController);