import type { IUrlDto, IUrlInfoDto } from "./dto.ts"


export const UrlController = {
    shortenUrl: (url: IUrlDto): string | void => {
        return ''
    },
    
    redirect: (url: string): string | void => {
        return ''
    },
    
    getUrlInfo: (url: string): IUrlInfoDto | void => {
        return {
            originalUrl: '',
            createdAt: '',
            clickCount: 0
        }
    },
    
    deleteUrlInfo: (url: string): number => {
        return 0
    }
}