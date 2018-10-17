import { Controller, Get } from '@nestjs/common'
import { stack } from '@colmena/core'

@Controller()
export class ServerAppController {

  @Get('status')
  status(): any {
    const { uptime, arch, version, platform } = process
    return {
      uptime: uptime(),
      arch,
      version,
      platform,
      stack,
    }
  }
}
