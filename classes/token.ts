import jwt, { decode } from 'jsonwebtoken'

export default class Token{

    private static seed: string = 'este-ess-el-seed-de-mi-app-sercreto'
    private static caducidad: string = '30d';


    constructor(){}

    static getJwtToken(payload: any): string{

      return jwt.sign({
        usuario: payload
      }, this.seed, {expiresIn: this.caducidad})

    }

    static comprobarToken( userToken: string){

        return new Promise((resolve, reject) => {

            jwt.verify(userToken, this.seed, (err, decode) =>{
                if (err){
                    reject()
                }else {
                    resolve(decode)
                }
            });

        });


    }


}