import { rest } from 'msw';
import dayjs from 'dayjs';
import { diffTime } from '@/utils/date';
import { CharmersDefaultType } from '@/api/types';
import { MOCK_QUESTIONS } from './mockData';

const MOCK_USER_DATA: CharmersDefaultType[] = [
  {
    name: 'dobby',
    openTime: '2023-06-27T23:28:00.000000',
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

  rest.get('/api/charmers/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const findData = MOCK_USER_DATA.find((el) => el.shareLink.includes(id as string));

    const isFinished = (time: string) => (diffTime(time, new Date()) < 0 ? true : false);

    if (findData) {
      return res(
        ctx.status(200),
        ctx.json({ ...findData, finished: isFinished(findData.openTime) })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ ...MOCK_USER_DATA[0], finished: isFinished(MOCK_USER_DATA[0].openTime) })
    );
  }),

  rest.get('/api/questions/:id', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_QUESTIONS));
  }),
];
