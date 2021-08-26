import { ISoda } from '@entities/Soda';
import { getRandomInt } from '@shared/functions';
import { ISodaDao } from './SodaDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class SodaDao extends MockDaoMock implements ISodaDao {


    public async getOne(brandName: string): Promise<ISoda | null> {
        const db = await super.openDb();
        for (const soda of db.sodas) {
            if (soda.brandName === brandName) {
                return soda;
            }
        }
        return null;
    }


    public async getAll(): Promise<ISoda[]> {
        const db = await super.openDb();
        return db.sodas;
    }


    public async add(soda: ISoda): Promise<void> {
        const db = await super.openDb();
        soda.brandName = "Mock Cola";
        db.sodas.push(soda);
        await super.saveDb(db);
    }


    public async update(soda: ISoda): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.users.length; i++) {
            if (db.sodas[i].brandName === soda.brandName) {
                db.sodas[i] = soda;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('User not found');
    }


    public async delete(brandName: string): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.sodas.length; i++) {
            if (db.sodas[i].brandName === brandName) {
                db.sodas.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('User not found');
    }
}

export default SodaDao;
