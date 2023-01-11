
import express, { NextFunction, Request, Response } from 'express'
import axios from 'axios'

require('dotenv').config();

const app = express()

const PORT: any = process.env.PORT

let onlineServer: Array<any> = []

const serve = [
    {
        "url": "https://does-not-work.perfume.new",
        "priority": 1,
        "status": false
    },
    {
        "url": "https://offline.scentronix.com",
        "priority": 2,
        "status": false
    },
    {
        "url": "http://app.scnt.me",
        "priority": 77,
        "status": false
    },
    {
        "url": "https://gitlab.com",
        "priority": 3,
        "status": false
    },

]

const sendRequest = (serve: any, index: number): any => {
    return axios.get(serve.url, { timeout: 5000 });
}

app.use(async (req: Request, res: Response, next: NextFunction) => {  
    serve.map((server, index) => {
        onlineServer[index] = new Promise((resolve, reject) => {
            sendRequest(server, index).then(function (res: any) {
                server['status'] = true;
                resolve(server)
    
            }).catch(function (error: any) {
                server['status'] = false;
                reject(server)
            });
        });
    })

    Promise.all(
        onlineServer.map((sever) => {
            return sever.catch((error: any) => error)
        })
    ).then(
        (values) => {
            const online_Server: Array<any> = []
            values.map((val) => {
                if (val.status) {
                    online_Server.push(val)
                }
            })
            if(online_Server.length){
                online_Server.sort(function (a, b) {
                    return parseFloat(a.priority) - parseFloat(b.priority);
                });
                console.log(online_Server[0]);
                res.status(200).json({url:online_Server[0].url})
            }else{
                res.status(400).json({message:"server is not available"})

            }
        }
    );

})

app.listen(PORT, () => {
    console.log("server is lisning at ", PORT);

})
