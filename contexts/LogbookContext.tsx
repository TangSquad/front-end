import { createContext, ReactNode, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyEquipment } from 'api/user/equipment';
import { CreateLogbook } from 'types/Logbook';

interface LogbookContextType {
  logbook: CreateLogbook;
  setLogbook: React.Dispatch<React.SetStateAction<CreateLogbook>>;
}

const defualtValue = {
  logbook: {
    date: '',
    title: '',
    contents: '',
    userCondition: '',
    imageUrls: [],
    equipment: {
      suit: '',
      bc: '',
      mask: '',
      weightBelt: '',
      shoes: '',
    },
  },
  setLogbook: () => {},
};

const LogbookContext = createContext<LogbookContextType>(defualtValue);

const LogbookProvider = ({ children }: { children: ReactNode }) => {
  const [logbook, setLogbook] = useState<CreateLogbook>(defualtValue.logbook);

  const { data } = useQuery({
    queryKey: ['equipment'],
    queryFn: getMyEquipment,
  });

  useEffect(() => {
    data && setLogbook({
      ...logbook,
      equipment: {
        suit: data.data.suit || '',
        bc: data.data.bc || '',
        mask: data.data.mask || '',
        weightBelt: data.data.weightBelt || '',
        shoes: data.data.shoes || '',
      },
    });
  }, []);

  return (
    <LogbookContext.Provider value={{ logbook, setLogbook }}>
      {children}
    </LogbookContext.Provider>
  );
};

export { LogbookContext, LogbookProvider };