import React, { useEffect } from 'react';
import { getApod } from '../../api/apod';
import { useQuery } from "react-query";
import Calendar from '../../components/Calendar';

const APOD = () => {

  //const queryClient = useQueryClient();

  const { isLoading, isError, error, data: apod} = useQuery('apod', getApod);

  return (
    <div className='mx-80'>
      <Calendar />
    </div>
  )
}

export default APOD
