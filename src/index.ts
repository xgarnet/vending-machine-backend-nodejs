import express from "express";
import userRouter from "./routers/user.router"
import productRouter from './routers/product.router'
import resetRouter from "./routers/reset.router";
import depositRouter from "./routers/deposit.router";
import buyRouter from "./routers/buy.router";

const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter);
app.use(productRouter);
app.use(resetRouter);
app.use(depositRouter);
app.use(buyRouter);

app.listen( port, () => {
    // console.log( `server started at http://localhost:${ port }` );
});



