import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    workspaces: {
        'backend': {
            entry: ['src/index.ts'],
        },
        'frontend': {
            entry: ['src/index.ts'],
        },
    }

};

export default config;
