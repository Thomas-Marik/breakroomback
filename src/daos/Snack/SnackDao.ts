import { ISnack } from '@entities/Snack';



export interface ISnackDao {
    getOne: (brandName: string) => Promise<ISnack | null>;
    getAll: () => Promise<ISnack[]>;
    add: (snack: ISnack) => Promise<void>;
    update: (snack: ISnack) => Promise<void>;
    delete: (brandName: string) => Promise<void>;
}

class SnackDao implements ISnackDao {


    /**
     * @param brandName
     */
    public getOne(brandName: string): Promise<ISnack | null> {
        // TODO
        return Promise.resolve(null);
    }


    /**
     *
     */
    public getAll(): Promise<ISnack[]> {
         // TODO
        return Promise.resolve([]);
    }


    /**
     *
     * @param snack
     */
    public async add(soda: ISnack): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param snack
     */
    public async update(soda: ISnack): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param brandName
     */
    public async delete(brandName: string): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }
}

export default SnackDao;
