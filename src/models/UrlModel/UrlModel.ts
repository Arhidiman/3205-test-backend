import { Url } from "./Url.ts"
import { Statistics } from "../StatisticsModel/Statistics.ts"
import type { Request, Response } from "express"
import type { IUrlDto, IUrlInfoDto } from "./dto.ts"

export const UrlModel = {
    shortenUrl: async (req: Request<any, IUrlDto>, res: Response): Promise<void> => {
        const { originalUrl, alias, expiresAt }: IUrlDto = req.body

        const url = new URL(originalUrl)
        const { hostname } = url

        const shortUrl = `${hostname}/${alias}`
        await Url.create({originalUrl, shortUrl, alias, expiresAt: new Date(), createdAt: new Date()})

        res.json(shortUrl)
    },
    redirect: async (req: Request<any, string>, res: Response): Promise<void> => {
        const { shortUrl } = req.params
        const record = await Url.findOne({ where: { shortUrl }})

        if (!record) throw new Error('Ссылка не найдена')

        const { id } = record.dataValues
        const { originalUrl } = record.dataValues
        const { ip } = req

        await Statistics.create({ urlId: id, ip: String(ip), createdAt: new Date() })
        res.send(originalUrl)
    },
    getUrlInfo: async (req, res): Promise<void> => {
        const { shortUrl } = req.params
    },
    deleteUrlInfo: async (req, res): Promise<void> => {
        const {url: shortenUrl} = req.params
        await Url.destroy({ where: { shortenUrl }})
        res.send('Ссылка удалена')
    }

}