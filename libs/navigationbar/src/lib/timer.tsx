import { useEffect, useState } from 'react';
import styles from './timer.module.css';

export interface TimerProps {
    isTimer: boolean;
    timerDuration?: number; // No of seconds for the timer
    currentTime: number;
}

const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
};

const getTimeString = (date: Date): string => {
    return date.toLocaleString('en-us', options);
};

const getTimerString = (num: number): string => {
    return num > 0
        ? `${Math.floor(num / 3600)} : ${Math.floor(num / 60)} : ${Math.floor(
              num % 60
          )}`
        : '00: 00 : 00';
};

export const Timer = (timerProps: TimerProps) => {
    // Yupp the entire function reruns itself. So look into the Optimizations using other hooks..
    const startTime: number = timerProps.currentTime;
    const [currentTimer, setCurrentTimer] = useState(new Date(startTime));

    useEffect(() => {
        const update = setInterval(() => setCurrentTimer(new Date()), 1000);
        console.log('UseEffect Hook called');
        return () => clearInterval(update);
    }, []);

    return (
        <>
            <div className={styles['time-container']}>
                {timerProps.isTimer
                    ? getTimerString(
                          (timerProps?.timerDuration ?? 3600) -
                              (currentTimer.valueOf() - startTime) / 1000
                      )
                    : getTimeString(currentTimer)}
            </div>
        </>
    );
};
