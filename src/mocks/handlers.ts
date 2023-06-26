import { rest } from 'msw';
import dayjs from 'dayjs';
import { CharmersDefaultType } from '@/api/types';

const MOCK_USER_DATA: CharmersDefaultType[] = [
  {
    name: 'dobby',
    openTime: '2023-06-27T01:47:00.000000',
    shareLink: 'https://charmcharm.me/test12345',
  },
  {
    name: '김도비',
    openTime: '2023-06-27T02:04:11.379398',
    shareLink: 'https://charmcharm.me/testuser13123123442',
  },
];

export const handlers = [
  rest.post('/api/charmers', async (req, res, ctx) => {
    const id = req.id;
    const name = await req.text();
    const responseData = {
      name,
      openTime: dayjs().add(4, 'hour').format(),
      shareLink: `https://charmcharm.me/${id}`,
    };
    MOCK_USER_DATA.push(responseData);
    return res(ctx.status(200), ctx.json(responseData));
  }),
];
