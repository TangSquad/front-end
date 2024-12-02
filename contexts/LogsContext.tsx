import { createContext, ReactNode, useState } from 'react';
import { CreateLog } from 'types/Logbook';

interface LogsContextType {
  logs: CreateLog[];
  updateLogs: (props: UpdateLogsProps) => void;
}

type UpdateLogsProps = {
  index: number,
  key: keyof CreateLog,
  value: string | number | null
};

const LogsContext = createContext<LogsContextType>({
  logs: [],
  updateLogs: () => {},
});

const LogsProvider = ({ count, children }: { count: number; children: ReactNode}) => {
  const [logs, setLogs] = useState<CreateLog[]>(
    Array.from({ length: count }, () => ({
      location: '',
      weather: '',
      airTemp: null, // 기온
      surfTemp: null, // 수면 온도
      bottTemp: null, // 바닥온도
      viewSight: '',
      tide: '',
      wave: '',
      surge: '',
      diveTime: '',
      subject: '',
      avgDepth: null,
      maxDepth: null,
      startBar: null,
      endBar: null,
    })),
  );

  const updateLogs = ({ index, key, value }: UpdateLogsProps) => {
    setLogs((prevLogs) => {
      const newLogs = [...prevLogs];
      newLogs[index] = { ...newLogs[index], [key]: value };
      return newLogs;
    });
  };

  return (
    <LogsContext.Provider value={{ logs, updateLogs }}>
      {children}
    </LogsContext.Provider>
  );
};

export { LogsContext, LogsProvider };