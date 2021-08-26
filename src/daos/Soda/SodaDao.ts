import { ISoda } from '@entities/Soda';



export interface ISodaDao {
    getOne: (brandName: string) => Promise<ISoda | null>;
    getAll: () => Promise<ISoda[]>;
    add: (soda: ISoda) => Promise<void>;
    update: (soda: ISoda) => Promise<void>;
    delete: (brandName: string) => Promise<void>;
}

class SodaDao implements ISodaDao {


    /**
     * @param brandName
     */
    public getOne(brandName: string): Promise<ISoda | null> {
        // TODO
        return Promise.resolve(null);
    }


    /**
     *
     */
    public getAll(): Promise<ISoda[]> {
         // TODO
        return Promise.resolve([]);
    }


    /**
     *
     * @param soda
     */
    public async add(soda: ISoda): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param soda
     */
    public async update(soda: ISoda): Promise<void> {
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

export default SodaDao;
