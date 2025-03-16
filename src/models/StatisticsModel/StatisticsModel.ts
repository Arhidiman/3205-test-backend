import { Statistics } from "./Statistics.ts"
import type { Request, Response } from "express"

export const UrlModel = {
    getInfo: async (req, res): Promise<void> => {
        const { shortUrl } = req.params
    }
}