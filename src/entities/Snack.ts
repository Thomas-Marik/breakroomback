export interface ISnack {
    brandName: string;
    type: string;
    distributor: string;
    diet: boolean;
    caloriePerServing:number;  
    caffeine:boolean;
    glutenFree:boolean;


}

class Snack implements ISnack {

   
    public brandName: string;
    public type: string;
    public distributor: string;
    public diet: boolean;
    public caloriePerServing: number;    
    public caffeine:boolean;
    public glutenFree:boolean;



    constructor(brandNameOrSnack: string | ISnack,
                type:string, 
                distributor?:string,
                diet?: boolean,
                caloriePerServing?: number,
                caffeine?:boolean,
                glutenFree?:boolean) {

        if (typeof brandNameOrSnack === 'string') {
            this.brandName = brandNameOrSnack;
            this.type = type || 'snack';
            this.distributor = distributor || '';
            this.diet = diet || false;
            this.caloriePerServing = caloriePerServing || 0;
            this.caffeine = caffeine || true;
            this.glutenFree = glutenFree || false;

        } else {
            this.brandName = brandNameOrSnack.brandName;
            this.type = brandNameOrSnack.type;
            this.distributor = brandNameOrSnack.distributor;
            this.diet = brandNameOrSnack.diet;
            this.caloriePerServing = brandNameOrSnack.caloriePerServing;
            this.caffeine = brandNameOrSnack.caffeine;
            this.glutenFree = brandNameOrSnack.glutenFree;

        }
    }
}

export default Snack;
