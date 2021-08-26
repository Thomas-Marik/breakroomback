import { ISoda } from '@entities/Soda';
import {ddbDoc} from '../Dynamo'
import { DeleteCommand, GetCommand, PutCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';


export interface ISodaDao {
    getOne: (brandName: string) => Promise<ISoda | null>;
    getAll: () => Promise<any>;
    add: (soda: ISoda) => Promise<void>;
    update: (soda: ISoda) => Promise<any>;
    delete: (brandName: string) => Promise<void>;
}
const TABLE='breakroom'

class SodaDao implements ISodaDao {

    public table= TABLE;

    /**
     * @param brandName
     */
     
     public async getOne(name: string): Promise<ISoda| null> {
 
         const params = {
             TableName: this.table,
             Key:{
                 brandName: name,
                 type:"soda",
             },
         };
         try {
             const data = await ddbDoc.send(new GetCommand(params));
         
            console.log(data.Item);
             return data.Item as ISoda;
           } catch (err) {
             console.log("Error", err);
           }
 
         return null;
    }


    /**
     *
     */
     public async getAll(){
        const params = {
            TableName: TABLE,
            type:'soda',
            
            };
        
        try {
            const data = await ddbDoc.send(new ScanCommand(params));
            return Promise.resolve(data.Items);
        } catch (err) {
            console.log("Error", err);
        }
    }


    /**
     *
     * @param soda
     */
     public async add(soda: ISoda): Promise<void> {
        console.log(soda)
        const params = {
            TableName: this.table,
            Item: soda
          };
          
          // Call DynamoDB to add the item to the table
         
             await ddbDoc.send(new PutCommand(params)); 
        }


    /**
     *
     * @param soda
     */
     public async update(soda: ISoda): Promise<void> {
        const params = {
            TableName: this.table,
            Item: soda,            
          };
          
         
         
             await ddbDoc.send(new PutCommand(params)); 
    }


    /**
     *
     * @param brandName
     */
     public async delete(name: string): Promise<void> {
        const params = {
             TableName:this.table,
             Key: {
                 brandName:{'S' : name},
                 type:{'S' :'soda'}
             },
         }
           
           // Call DynamoDB to delete the item from the table
           ddbDoc.send(new DeleteCommand(params));
    }
}

export default SodaDao;
