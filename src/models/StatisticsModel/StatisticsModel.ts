import { Statistics } from "./Statistics.ts"
import { Url } from "../UrlModel/Url.ts"
import type { Request, Response } from "express"

export const StatisticsModel = {
    getInfo: async (req: Request<{ shortUrl: string }>, res: Response): Promise<void> => {

        console.log(req.params)

        const { shortUrl } = req.params
        const record = await Url.findOne({ where: { shortUrl }})

        if (!record) throw new Error('Ссылка не существует')

        const { id } = record.dataValues
        const clickStats = await Statistics.findAll({ 
            raw: true, 
            where: { urlId: id }, 
            order: [['createdAt', 'DESC']]
        })

        res.send(clickStats)
    }
}