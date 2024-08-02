import authRouter from './modules/user/user.router.js'
import imageAnRouter from './modules/imageAn/imageAn.router.js'
import userChangesRouter from './modules/userChanges/userChanges.router.js'
import userInfoRouter from './modules/userInfo/userInfo.router.js'
import morgan from 'morgan';
import cors from 'cors';

export const appRouter = (app, express) => {
    //morgan
    if (process.env.NODE_ENV === "dev") {
        app.use(morgan("dev"));
    } else {
        app.use(morgan("combined"));
    }
    // //cors
    // const whiteList = [];
    // app.use((req, res, next) => {
    //     //activation account
    //     if (req.originalUrl.includes('/auth/confirmEmail')) {
    //         res.setHeader('Access-Control-Allow-Origin', "*");
    //         res.setHeader('Access-Control-Allow-Headers', "GET");
    //         return next();
    //     }
    //     if (!whiteList.includes(req.header('origin'))) {
    //         return next(new Error('blocked by cors'));
    //     }
    //     res.setHeader('Access-Control-Allow-Origin', "*");
    //     res.setHeader('Access-Control-Allow-Headers', "*");
    //     res.setHeader('Access-Control-Allow-Methods', "*");
    //     res.setHeader('Access-Control-Allow-Private-Network', true);
    //     return next();
    // })
    // Middleware to enable CORS
    // app.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST,Patch ,PUT, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //     next();
    // });
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    //global Routes
    app.use(express.json()) // parse data from cover to Json

    //APIs for user
    app.use('/auth', authRouter)
        //APIs for imageAn
    app.use('/model', imageAnRouter)
        //APIs for userChanges
    app.use('/userChanges', userChangesRouter)
        //APIs for userInfoRouter
    app.use('/', userInfoRouter)


    // Not Found Page 
    app.use('/*', (req, res, next) => {
        return next(new Error('Not Found', { cause: 404 }));
    })

    //error handler
    app.use((error, req, res, next) => {
        return res.status(error.cause || 500).json({
            success: false,
            message: error.message,
            stack: error.stack
        })
    })
    app.use((error, req, res, next) => {
        return res.status(error.cause || 500).json({
            success: false,
            message: error.message,
            stack: error.stack
        })
    })
}