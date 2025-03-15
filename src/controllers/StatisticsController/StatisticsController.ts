import { IUrlStatisticsDto } from "./dto";

export const getUrlStatistics = (url: string): IUrlStatisticsDto => {
    return {
        clicksCount: 0,
        lastIps: ['123']
    }
}