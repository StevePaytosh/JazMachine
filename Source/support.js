// for functions that reference stack 'top' and 'top minus one': op1 = top, op2 = top -1

function add(op1,op2)
{
	return +op1 + +op2;
};

function subtract(op1,op2)
{
	return +op2 - +op1;
};

function mult(op1,op2)
{
	return +op1 * +op2;
}

function divide(op1,op2)
{
	return Math.floor(+op2 / +op1);
}

function div_mod(op1,op2)
{
	return +op2 % +op1;
}

function logic_AND(op1,op2)
{
	return +op1 && +op2?1:0;
}

function logic_OR(op1,op2)
{
	return +op1 || +op2?1:0;
}

function negate(op1)
{
	return !(+op1)?1:0;
}

function check_equality(op1,op2)
{
	//<>
	return (+op1 == +op2)?0:1;
}

function check_diff(op1,op2)
{
	// =
		return !((+op1==+op2))?0:1;
			
}

function less_or_equal(op1,op2)
{
	//if (op2 <= op1) return 0;
	//else return 1;
	return !(+op2<=+op1)?0:1;
}

function greater_or_equal(op1,op2)
{
	//if (op2 >= op1) return 0;
	//else return 1;
	return !(+op2 >= +op1)?0:1;
}

function less_than(op1,op2)
{
	//if (op2 < op1) return 0;
	//else return 1;
	return !(+op2 < +op1)?0:1;
}

function greater_than(op1,op2)
{
	//if (op2 > op1) return 0;
	//else return 1;
	return !(+op2 > +op1)?0:1;
}

function greater_or_equal(op1,op2)
{
	//if (op2 >= op1) return 0;
	//else return 1;
	return !(+op2>=+op1)?0:1;
}
