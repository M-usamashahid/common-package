import { jest } from '@jest/globals';

export const natsClient = {
  client: {
    publish: jest
      .fn()
      .mockImplementation(
        (subject: any, data: any, callback: any) => {
          callback();
        })
  },
};
