import { Url } from "./Url.ts"
import type { IUrlDto, IUrlInfoDto } from "./dto.ts"

export const UrlModel = {
    shortenUrl: async (req, res) => {
        const { originalUrl, alias, expiresAt }: IUrlDto = req.body

        const url = new URL(originalUrl)
        const { protocol, hostname } = url
        const shortenUrl = `${protocol}://${hostname}/${alias}`

        try {
            const record = await Url.create({originalUrl, shortenUrl, alias, expiresAt: new Date()})
            res.json(shortenUrl)
        } catch(err) {
            if(err?.original.code === '23505') {
                throw new Error ('Укороченная ссылка должна быть уникальной.\n Укажите другой сайт либо псевдоним')
            }
            console.log(err[0])
        }

    },
    
    redirect: async (req, res): Promise<string | void> => {
        return ''
    },
    
    getUrlInfo: async (req, res): Promise<IUrlInfoDto | void> => {
        return {
            originalUrl: '',
            createdAt: '',
            clickCount: 0
        }
    },
    
    deleteUrlInfo: async (req, res): Promise<number> => {
        return 0
    }

}