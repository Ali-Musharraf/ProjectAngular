import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    
    private recipes: Recipe[] =[
        new Recipe('Hyderabadi Biryani','Best Dish in the world','https://i.ytimg.com/vi/iJUdcbCoIcA/maxresdefault.jpg',[
            new Ingredient('Meat',1),
            new Ingredient('Basmati Rice',500)
        ]),
        new Recipe('Mutton Kabab','Best Starter','https://meatspice-hszhpctgbpaedf6prrg.netdna-ssl.com/wp-content/uploads/2017/08/MUTTON-SEEKH-KABAB.jpg',[
            new Ingredient('Mutton',1),
            new Ingredient('Onion',250)
        ])
      ];
    getRecipes()
    {
        return this.recipes.slice()
        
    }
    constructor(private slService: ShoppingListService){

    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
}