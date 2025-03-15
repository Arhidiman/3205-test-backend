import type { IUrlDto, IUrlInfoDto } from "./dto"

export const shortenUrl = (url: IUrlDto): string | void => {
    return ''
}

export const redirect = (url: string): string | void => {
    return ''
}

export const getUrlInfo = (url: string): IUrlInfoDto | void => {
    return {
        originalUrl: '',
        createdAt: '',
        clickCount: 0
    }
}

export const deleteUrlInfo = (url: string): number => {
    return 0
}