"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
config_1.default.authenticate().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error: ' + err);
});
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// view engine setup
// app.set('views', appPath.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use('/', index_1.default);
app.use('/users', users_1.default);
// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next: any) {
//   console.log('error 404');
// });
// error handler
// app.use(function(err: any, req: Request, res: Response, next: any) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// })
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
module.exports = app;
