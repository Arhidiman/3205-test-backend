import type { Request, Response } from "express";
import { StatisticsModel } from "../../models/StatisticsModel/StatisticsModel.ts";

export const StatisticsController = {
    getUrlStatistics: async (req: Request<{ shortUrl: string }>, res: Response): Promise<void> => {
        try {
            await StatisticsModel.getInfo(req, res)
        } catch (err) {
            res.status(500).send(`Ошибка при получении статистики ${err.message}`)
        }
    }   
}

