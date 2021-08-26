import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import SnackDao from '@daos/Snack/SnackDao'
import { paramMissingError } from '@shared/constants';

const snackDao = new SnackDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all snacks.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllSnacks(req: Request, res: Response) {
    const snacks = await snackDao.getAll();
    return res.status(OK).json({snacks});
}


/**
 * Add one snack.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneSnack(req: Request, res: Response) {
    const { snack } = req.body;
    if (!snack) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await snackDao.add(snack);
    return res.status(CREATED).end();
}


/**
 * Update one snack.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneSnack(req: Request, res: Response) {
    const { snack } = req.body;
    if (!snack) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    snack.brandName =String(snack.brandName);
    await snackDao.update(snack);
    return res.status(OK).end();
}


/**
 * Delete one snack.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneSnack(req: Request, res: Response) {
    const { brandName } = req.params;
    await snackDao.delete(brandName);
    return res.status(OK).end();
}
