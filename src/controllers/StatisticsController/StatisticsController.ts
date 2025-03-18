import type { Request, Response } from "express";
import { StatisticsModel } from "../../models/StatisticsModel/StatisticsModel.ts";

export const StatisticsController = {
    getUrlStatistics: async (req: Request<{ shortUrl: string }>, res: Response): Promise<void> => {
        try {
            await StatisticsModel.getInfo(req, res)
        } catch (err) {
            if (err.message.includes('Ссылка не существует')) res.status(404).send(`${err.message}`)
            res.status(500).send(`Ошибка при получении статистики ${err.message}`)
        }
    }   
}

