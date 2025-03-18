import { Url } from "./Url.ts"
import { Statistics } from "../StatisticsModel/Statistics.ts"
import type { Request, Response } from "express"
import type { IUrlDto } from "./dto.ts"

const generateString = (maxLength = 20) => {
    var abc = "abcdefghijklmnopqrstuvwxyz1234567890";
        var rs = "";
        const length = Math.round(Math.random()*maxLength)
        while (rs.length < length) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        return rs
}

export const UrlModel = {
    shortenUrl: async (req: Request<any, IUrlDto>, res: Response): Promise<void> => {
        const { originalUrl, alias, expiresAt }: IUrlDto = req.body

        const url = new URL(originalUrl)
        const { hostname } = url

        const shortUrl = `${hostname}/${alias || generateString()}`
        await Url.create({originalUrl, shortUrl, alias, expiresAt: new Date(expiresAt), createdAt: new Date()})

        res.json(shortUrl)
    },
    redirect: async (req: Request<{ shortUrl: string }, string>, res: Response): Promise<void> => {
        const { shortUrl } = req.params
        const record = await Url.findOne({ where: { shortUrl }})

        if (!record) throw new Error('Ссылка не существует')

        const { id } = record.dataValues
        const { originalUrl } = record.dataValues
        const { ip } = req

        console.log(ip)

        await Statistics.create({ urlId: id, ip: String(ip), createdAt: new Date() })
        res.send(originalUrl)
    },
    getUrlInfo: async (req: Request<{ shortUrl: string }>, res: Response): Promise<void> => {
        const { shortUrl } = req.params
        const record = await Url.findOne({ where: { shortUrl }})

        if (!record) throw new Error('Ссылка не существует')

        const { id, originalUrl, createdAt } = record.dataValues
        const clickRecords = await Statistics.findAll({ raw: true, where: { urlId: id }})

        res.send({ originalUrl, createdAt, clickCount: clickRecords.length})
    },
    deleteUrlInfo: async (req, res): Promise<void> => {
        const { shortUrl } = req.params

        const urlRecord = await Url.findOne({ where: { shortUrl }})

        if (!urlRecord) throw new Error('Ссылка не существует')

        const { id } = urlRecord.dataValues

        await Statistics.destroy({ where: { urlId: id }})
        await Url.destroy({ where: { shortUrl }})
        res.send('Ссылка удалена')
    },
    getAll: async (req: Request, res: Response) => {
        const records = await Url.findAll()
        res.send(records)
    }
}