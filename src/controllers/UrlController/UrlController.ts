import { UrlModel } from "../../models/UrlModel/UrlModel.ts"

export const UrlController = {
    shortenUrl: async (req, res): Promise<void> => {
        try {
            await UrlModel.shortenUrl(req, res)
        } catch(err) {
            if(err?.original?.code === '23505') {
                res.status(500).send(`Укороченная ссылка должна быть уникальной.\n Укажите другой сайт либо псевдоним`)
            }
        }
    },
    
    redirect: async (req, res): Promise<void> => {
        try {
            await UrlModel.redirect(req, res)
        } catch(err: any) {
            res.status(500).send(`Ошибка перенаправления. ${err.message}`)
        }
    },
    
    getUrlInfo: async (req, res): Promise<void> => {
        try {
            await UrlModel.getUrlInfo(req, res)
        } catch(err: any) {
            res.status(500).send(`Ошибка получения информации о ссылке. ${err.message}`)
        }
    },
    
    deleteUrlInfo: async (req, res): Promise<void> => {
        try {
            await UrlModel.deleteUrlInfo(req, res)
        } catch(err: any) {
            res.status(500).send(`Ошибка удаления ссылки. ${err.message}`)
        }
    },

    getAllUrls: async (req, res): Promise<void> => {
        try {
            await UrlModel.getAll(req, res)
        } catch(err: any) {
            res.err(500).send(`Ошибка получения списка ссылок. ${err.message}`)
        }
    }
}