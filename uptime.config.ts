import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig = {
  // Title for your status page
  title: "hxd Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.stoh.cc', label: 'Blog' },
    { link: 'https://social.stoh.cc', label: 'Social' },
    { link: 'mailto:shh[at]stoh.cc', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'Web',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.stoh.cc',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

 {
      id: 'Web',
      name: 'Social',
      method: 'GET',
      target: 'https://social.stoh.cc',
     tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

    {
      id: 'VPS',
      name: 'Main',
      method: 'TCP_PING',
      target: '137.175.126.187:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

    {
      id: 'VPS',
      name: 'Website',
      method: 'TCP_PING',
      target: '72.11.140.72:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },
   
    {
      id: 'VPS',
      name: 'Vmess',
      method: 'TCP_PING',
      target: '131.186.32.166:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },

    {
      id: 'VPS',
      name: 'File',
      method: 'TCP_PING',
      target: '168.138.201.51:22103',
        tooltip: 'This is a tooltip for this monitor',
  // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
  statusPageLink: 'https://example.com',
    },
    
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
