import { Application } from './Application'
// import Crypto from 'crypto'

export function execute(config: IConfig) {
    // String.prototype.sha512 = function() {
    //     return Crypto.createHash('sha512').update(this as string).digest('hex').toString().toLowerCase()
    // }
    // String.prototype.sha256 = function() {
    //     return Crypto.createHash('sha256').update(this as string).digest('hex').toString().toLowerCase()
    // }
    // String.prototype.md5 = function() {
    //     return Crypto.createHash('md5').update(this as string).digest('hex').toString().toLowerCase()
    // }
    // String.prototype.isValidEmail = function() {
    //     // eslint-disable-next-line
    //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         .test(this as string)
    // }
    // Date.prototype.getTimestamp = function() { return Math.floor(this.getTime() / 1000) }
    // ; (global as any).time = () => Math.floor(Date.now() / 1000)
    // ; (global as any).date = (format: string, timestamp: number) => routines.date(format, timestamp)
    // ; (global as any).float = (value: any) => value ? parseFloat(value) : .0

    const app = new Application(config)

    app.run()
}
