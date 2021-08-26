export interface ISoda {
    brandName: string;
    type: string;
    distributor: string;
    diet: boolean;
    caloriePerServing:number;  
    caffeine:boolean;
    glutenFree:boolean;


}

class Soda implements ISoda {

   
    public brandName: string;
    public type: string;
    public distributor: string;
    public diet: boolean;
    public caloriePerServing: number;    
    public caffeine:boolean;
    public glutenFree:boolean;



    constructor(brandNameOrSoda: string | ISoda,
                type:string, 
                distributor?:string,
                diet?: boolean,
                caloriePerServing?: number,
                caffeine?:boolean,
                glutenFree?:boolean) {

        if (typeof brandNameOrSoda === 'string') {
            this.brandName = brandNameOrSoda;
            this.type = type || 'soda';
            this.distributor = distributor || '';
            this.diet = diet || false;
            this.caloriePerServing = caloriePerServing || 0;
            this.caffeine = caffeine || true;
            this.glutenFree = glutenFree || false;

        } else {
            this.brandName = brandNameOrSoda.brandName;
            this.type = brandNameOrSoda.type;
            this.distributor = brandNameOrSoda.distributor;
            this.diet = brandNameOrSoda.diet;
            this.caloriePerServing = brandNameOrSoda.caloriePerServing;
            this.caffeine = brandNameOrSoda.caffeine;
            this.glutenFree = brandNameOrSoda.glutenFree;

        }
    }
}

export default Soda;
