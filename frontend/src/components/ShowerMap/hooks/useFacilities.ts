import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowers } from '../../../store/slices/showersSlice';
import { RootState, AppDispatch } from '../../../store/store';

export const useFacilities = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { facilities, status, error } = useSelector((state: RootState) => state.showers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShowers());
    }
  }, [status, dispatch]);

  return { facilities, status, error };
};