import { UrlModel } from "../../models/UrlModel/UrlModel.ts"
import type { IUrlDto, IUrlInfoDto } from "../../models/UrlModel/dto.ts"


export const UrlController = {
    shortenUrl: async (req, res) => {
        try {
            return await UrlModel.shortenUrl(req, res)
        } catch(err: any) {
            res.status(500).send(`Ошибка создания укороченной ссылки. ${err.message}`)
        }
    },
    
    redirect: async (req, res): Promise<string | void> => {
        try {
            return await UrlModel.redirect(req, res)
        } catch(err: any) {
            res.status(500).send('Ошибка перенаправления')
        }
    },
    
    getUrlInfo: async (req, res): Promise<IUrlInfoDto | void> => {
        try {
            return await UrlModel.getUrlInfo(req, res)
        } catch(err: any) {
            res.error(500)
        }
    },
    
    deleteUrlInfo: async (req, res): Promise<number> => {
        try {
            return await UrlModel.deleteUrlInfo(req, res)
        } catch(err: any) {
            res.error(500)
        }
    }
}