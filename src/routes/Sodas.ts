import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import SodaDao from '@daos/Soda/SodaDao'
import { paramMissingError } from '@shared/constants';

const sodaDao = new SodaDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all sodas.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllSodas(req: Request, res: Response) {
    const sodas = await sodaDao.getAll();
    return res.status(OK).json({sodas});
}


/**
 * Add one soda.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneSoda(req: Request, res: Response) {
    const { soda } = req.body;
    if (!soda) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await sodaDao.add(soda);
    return res.status(CREATED).end();
}


/**
 * Update one soda.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneSoda(req: Request, res: Response) {
    const { soda } = req.body;
    if (!soda) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    soda.brandName = String(soda.brandName);
    await sodaDao.update(soda);
    return res.status(OK).end();
}


/**
 * Delete one soda.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneSoda(req: Request, res: Response) {
    const { brand } = req.params;
    await sodaDao.delete(brand);
    return res.status(OK).end();
}
