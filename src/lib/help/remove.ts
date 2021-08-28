export const REMOVE = [
  {
    header: 'Remove',
    content: 'The ability to remove resources\nIf executing s remove is equivalent to s remove all',
  },
  {
    header: 'Usage',
    content: '$ s remove <sub-command>',
  },
  {
    header: 'SubCommand List',
    content: [
      {
        desc: 'all',
        example: 'Remove all resources, you can get help through [s remove all -h]',
      },
      {
        desc: 'function',
        example: 'Only remove function resources, you can get help through [s remove function -h]',
      },
      {
        desc: 'trigger',
        example: 'Only remove trigger resources, you can get help through [s remove trigger -h]',
      },
    ],
  },
];

const GLOBAL_OPTIONS = [
  {
    name: 'help',
    description: 'Help for command',
    alias: 'h',
    type: Boolean,
  },
  {
    name: 'debug',
    description: 'Output debug informations',
    type: Boolean,
  },
];

export const DEPLOY_ALL = [
  {
    header: 'Remove all',
    content: 'Remove all resources',
  },
  {
    header: 'Usage',
    content: '$ s remove all <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'type',
        description: 'Only remove configuration or code. Value: code, config',
        type: Boolean,
      },
      {
        name: 'use-local',
        description: 'Remove resource using local config',
        type: Boolean,
      },
      {
        name: 'assume-yes',
        description: 'Assume that the answer to any question which would be asked is yes',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: GLOBAL_OPTIONS,
  },
  {
    header: 'Examples with Yaml',
    content: ['$ s remove all', '$ s remove all --use-local'],
  },
];

export const DEPLOY_SERVICE = [
  {
    header: 'Remove service',
    content: 'Only remove service resources',
  },
  {
    header: 'Usage',
    content: '$ s remove service <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'use-local',
        description: 'Remove resource using local config',
        type: Boolean,
      },
      {
        name: 'assume-yes',
        description: 'Assume that the answer to any question which would be asked is yes',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: GLOBAL_OPTIONS,
  },
  {
    header: 'Examples with Yaml',
    content: ['$ s remove service', '$ s remove service --use-local'],
  },
];

export const REMOVE_FUNCTION = [
  {
    header: 'Remove function',
    content: 'Only remove function resources',
  },
  {
    header: 'Usage',
    content: '$ s remove function <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'type',
        description: 'Only remove configuration or code Value: code, config',
        type: Boolean,
      },
      {
        name: 'use-local',
        description: 'Remove resource using local config',
        type: Boolean,
      },
      {
        name: 'assume-yes',
        description: 'Assume that the answer to any question which would be asked is yes',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: GLOBAL_OPTIONS,
  },
  {
    header: 'Examples with Yaml',
    content: ['$ s remove function', '$ s remove function --use-local'],
  },
];

export const REMOVE_TRIGGER = [
  {
    header: 'Remove trigger',
    content: 'Only remove trigger resources',
  },
  {
    header: 'Usage',
    content: '$ s remove trigger <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'trigger-name',
        description: 'Only remove the specified trigger',
        type: Boolean,
      },
      {
        name: 'use-local',
        description: 'Remove resource using local config',
        type: Boolean,
      },
      {
        name: 'assume-yes',
        description: 'Assume that the answer to any question which would be asked is yes',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: GLOBAL_OPTIONS,
  },
  {
    header: 'Examples with Yaml',
    content: ['$ s remove trigger', '$ s remove trigger --use-local'],
  },
];

export const REMOVE_DOMAIN = [
  {
    header: 'Remove domain',
    content: 'Only remove domain resources',
  },
  {
    header: 'Usage',
    content: '$ s remove domain <options>',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'use-local',
        description: 'Remove resource using local config',
        type: Boolean,
      },
      {
        name: 'assume-yes',
        description: 'Assume that the answer to any question which would be asked is yes',
        alias: 'y',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: GLOBAL_OPTIONS,
  },
  {
    header: 'Examples with Yaml',
    content: ['$ s remove domain'],
  },
];
