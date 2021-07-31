// keystone.ts

import { config, list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text(),
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
  },
});

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
  server: {
    healthCheck: {
      path: '/my-health-check',
      data: { status: 'healthy' },
    },
  },
});