import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "hxd Status Page",
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
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.stoh.cc',
        tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://blog.stoh.cc',
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
        },
      },

    {
      id: 'Web',
      name: 'Social',
      method: 'GET',
      target: 'https://social.stoh.cc',
      tooltip: 'This is a tooltip for this monitor',
     // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://social.stoh.cc',
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE', 
        },
      },

    {
      id: 'VPS',
      name: 'Main',
      method: 'TCP_PING',
      target: '137.175.126.187:22103',
      tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 5000,
    },

    {
      id: 'VPS',
      name: 'Website',
      method: 'TCP_PING',
      target: '72.11.140.72:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
 // statusPageLink: 'https://example.com',
      timeout: 5000,
    },
   
    {
      id: 'VPS',
      name: 'Vmess',
      method: 'TCP_PING',
      target: '131.186.32.166:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 5000,
    },

    {
      id: 'VPS',
      name: 'File',
      method: 'TCP_PING',
      target: '168.138.201.51:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  // statusPageLink: 'https://example.com',
      timeout: 5000,
    },
    
  ],

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

  
