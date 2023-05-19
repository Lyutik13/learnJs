"use strict";
const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
	sumAllBudget: 1,
};

function isBudgetEnough(data) {
	let allSquareShop = [];

	data.shops.forEach((item) => {
		let sum = item.width * item.length;
		allSquareShop.push(sum);
	});

	let allSquareShops = allSquareShop.reduce(
		(sum, current) => sum + current,
		0
	);

	data.sumAllBudget = (allSquareShops * data.height) * data.moneyPer1m3;

/*     if (data.sumAllBudget <= data.budget) {
		return "Бюджета достаточно";
	} else {
		return "Бюджета недостаточно";
	} */
    return data.sumAllBudget <= data.budget ? console.log("Бюджета достаточно") : console.log("Бюджета недостаточно");
}

isBudgetEnough(shoppingMallData);

