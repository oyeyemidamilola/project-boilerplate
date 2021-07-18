import startServer from "./index";

try {
    startServer()
    console.log('Server started')

} catch (error) {
    console.log('Can not start server. An error occured!')
}