// for functions that reference stack 'top' and 'top minus one': op1 = top, op2 = top -1

function add(op1,op2)
{
	//var sum = 
	return +op1 + +op2;
	//return sum;
};

function subtract(op1,op2)
{
	//var difference = 
	return op1 - op2;
	//return difference;
};

function mult(op1,op2)
{
	//var product = 
	return op1 * op2;
	//return product;
}

function divide(op1,op2)
{
	//var quotient = 
	return op1 / op2;
	//return Math.floor(quotient);
}

function div_mod(op1,op2)
{
	//var remainder = 
	return op1 % op2;
	//return remainder;
}

function logic_AND(op1,op2)
{
	return op1 && op2;
}

function logic_OR(op1,op2)
{
	return op1 || op2;
}

function negate(op1)
{
	return !op1;
}

function check_equality(op1,op2)
{
	if (op1 == op2) return 0;
	else return 1;
}

function less_or_equal(op1,op2)
{
	if (op2 <= op1) return 0;
	else return 1;
}

function greater_or_equal(op1,op2)
{
	if (op2 >= op1) return 0;
	else return 1;
}

function less_than(op1,op2)
{
	if (op2 < op1) return 0;
	else return 1;
}

function greater_than(op1,op2)
{
	if (op2 > op1) return 0;
	else return 1;
}

function greater_or_equal(op1,op2)
{
	if (op2 >= op1) return 0;
	else return 1;
}
