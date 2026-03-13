import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "SHI 記 UpTime Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.stoh.cc', label: 'Blog' },
    { link: 'https://social.stoh.cc', label: 'Social' },
    { link: 'mailto:shh[at]stoh.cc', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'Web',
      name: 'Web',
      method: 'GET',
      target: 'https://www.stoh.cc',
      //  tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // statusPageLink: 'https://blog.stoh.cc',
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 4500,
      // [OPTIONAL] headers to be sent
      },

    {
      id: 'Social',
      name: 'Social',
      method: 'GET',
      target: 'https://social.stoh.cc',
     // tooltip: 'This is a tooltip for this monitor',
     // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
     // statusPageLink: 'https://social.stoh.cc',
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 4500,
      // [OPTIONAL] headers to be sent
      },

    {
      id: 'Main',
      name: 'Main',
      method: 'TCP_PING',
      target: '137.175.126.187:22103',
  //    tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 3000,
    },

    {
      id: 'Website',
      name: 'Website',
      method: 'TCP_PING',
      target: '72.11.140.72:22103',
    //    tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
 // statusPageLink: 'https://example.com',
      timeout: 3000,
    },
   
    {
      id: 'Vmess',
      name: 'Vmess',
      method: 'TCP_PING',
      target: '131.186.32.166:22103',
   //     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 3000,
    },

    {
      id: 'File',
      name: 'File',
      method: 'TCP_PING',
      target: '168.138.201.51:22103',
   //     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 3000,
    },
    
  ],
}
  
const maintenances: MaintenanceConfig[] = []
  
// Don't edit this line
export { maintenances, pageConfig, workerConfig }

  
