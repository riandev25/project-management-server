import { NextFunction, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxyMiddlware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const proxyOptions = {
    target: 'https://taskaccio.onrender.com',
    changeOrigin: true,
  };
  createProxyMiddleware(proxyOptions) as any;
  next();
};
