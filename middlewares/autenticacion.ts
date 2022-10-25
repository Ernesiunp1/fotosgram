import { Response, Request, NextFunction } from "express";
import Token from "../classes/token";

export const verificaToken = (req: any, resp: Response, next: NextFunction) =>{

    const userToken = req.get('x-token') || '';

    Token.comprobarToken( userToken)
    .then( (decode: any) =>{
        console.log('Decode', decode);
        req.usuario = decode.usuario;
        next();
        
    })

    .catch(err =>{
        resp.json({
            ok: false,
            mensaje: 'Token no es correcto'
        });
    });

}