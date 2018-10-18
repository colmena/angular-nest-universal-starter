import { Controller, Get } from '@nestjs/common'
import { stack, VERSION } from '@colmena/core'

@Controller()
export class ServerAppController {

  @Get('status')
  status(): any {
    const { uptime, arch, version, platform } = process
    return {
      version: VERSION,
      stack,
      server: {
        uptime: uptime(),
        arch,
        version,
        platform,
      },
    }
  }
}
