import groceries from "../json/default/groceries.json";

class GroceriesUtil {
  static getFullShoppingList = () => {
    try {
      return groceries;
    } catch (error) {
      new TypeError("Error loading groceries");
    }
  }

  static getCasualShoppingList = (num=5) => {
    try {
      let shuffle = [...groceries].sort(() => 0.5 - Math.random())
      return shuffle.slice(0, num);
    } catch (error) {
      new TypeError("Error loading groceries");
    }
  }
}

export default GroceriesUtil;