// import path from 'path'
// import Multiparty from 'connect-multiparty'
import { AbstractConsoleCommand } from './Base/Abstract/AbstractConsoleCommand'
import { HelpCommand } from './Console/HelpCommand'
import { SshConnectCommand } from './Console/SshConnectCommand'

export class Application {

    /* Commands */
    public helpCommand!: HelpCommand
    public sshConnectCommand!: SshConnectCommand

    public constructor(public config: IConfig) {}

    public async run() {
        if (!this.isConsole) {
            process.exit()
        }
        this.initializeConsoleCommands()
        const command = process.argv[2]
        this.initializeConsoleCommands()
        for (const commandInstance of Object.values(this)) {
            if (commandInstance instanceof AbstractConsoleCommand) {
                if (commandInstance.name === command) {
                    await commandInstance.execute()
                    process.exit()
                }
            }
        }
        console.log(`Command "${command}" not found`)
        process.exit()
    }

    public initializeConsoleCommands() {
        this.sshConnectCommand = new SshConnectCommand(this)
        this.helpCommand = new HelpCommand(this)
    }

    private get isConsole() {
        return !!process.argv[2] && !!process.argv[3]
    }
}
