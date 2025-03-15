export interface IUrlDto {
    originalUrl: string,
    expiresAt?: string,
    alias?: string
}

export interface IUrlInfoDto {
    originalUrl: string,
    createdAt: string,
    clickCount: number
}