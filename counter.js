var counter =(function(){
	var _number;

	var _checkInteger = function(x){
		if ( parseInt(x) == x ) {
			return true;
		} else {
			return false;
		}
	}

	var setValue = function(x){
		if (_checkInteger(x)){
			_number = x;
		} else {
			console.log('Неверное значениею');
		}
	}

	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}

	return{
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}());

counter.setValue(5); // принимает целое число, задает его в значение счетчика
counter.increaseCounter(); // вызов метода увеличивает счетчик на 1
counter.decreaseCounter();  // вызов метода уменьшает счетчик на 1
counter.printCounter(); // вызов метода выводит значение счетчика в консоль
