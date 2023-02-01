import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
mojito:Cocktail= new Cocktail("Mojito",8,"https://assets.afcdn.com/recipe/20140721/47392_w1024h1024c1cx400cy476.jpg");
capirinia:Cocktail= new Cocktail("Capirinia",8,"https://cache.marieclaire.fr/data/photo/w801_ci/5b/caipirinha-au-citron-vert.jpg")
theAlaMenthe:Cocktail= new Cocktail("Thé à la Menthe",4,"https://assets.afcdn.com/recipe/20200504/110609_w1024h1024c1cx960cy540.webp")


cocktails:Cocktail[]=[this.mojito,this.capirinia,this.theAlaMenthe];

constructor() { }

getCocktails(){
return this.cocktails
}


}

