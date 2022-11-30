import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ban, isBanned, unban } from '../store/bans.slice';

export default function BanButton({ id }: { id: string }) {
  const banned = useSelector(isBanned(id));

  const dispatch = useDispatch();

  const toggleBan = useCallback(() => {
    const action = banned ? unban : ban;
    dispatch(action(id));
  }, [banned, dispatch, id]);

  return <button onClick={toggleBan}>{banned ? 'Unban' : 'Ban'}</button>;
}
