import { AbstractConsoleCommand } from '../Base/Abstract/AbstractConsoleCommand'
import { Application } from '../Application'

export class SshConnectCommand extends AbstractConsoleCommand {

    public constructor(app: Application) {
        super(app, 'connect:', 'Connect to IP: username@xxx.xxx.xxx.xxx')
    }

    public async execute() {
        console.log('execute!!!')
    }

}