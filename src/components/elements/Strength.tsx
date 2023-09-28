import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import CountUp from "react-countup";

const Strength: React.FC = () => {
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
    setCountingStarted(true);
  }, []);

  return (
    <div className=" h-fit max-w-full items-center justify-center p-12">
      <SectionHeader title="Strength in" subtitle="Numbers" />
      <div className="mt-8 flex flex-wrap justify-center">
        <CountCard
          start={0}
          end={6300}
          duration={10}
          suffix="LEARNERS & COUNTING"
          started={countingStarted}
        />
        <CountCard
          start={0}
          end={638}
          duration={10}
          suffix="TOTAL COURSES"
          started={countingStarted}
        />
        <CountCard
          start={0}
          end={7600}
          duration={10}
          suffix="SUCCESSFUL STUDENTS"
          started={countingStarted}
        />
        <CountCard
          start={0}
          end={36}
          duration={10}
          suffix="LANGUAGES"
          started={countingStarted}
        />
      </div>
    </div>
  );
};

interface CountCardProps {
  start: number;
  end: number;
  duration: number;
  suffix: string;
  started: boolean;
}

const CountCard: React.FC<CountCardProps> = ({
  start,
  end,
  duration,
  suffix,
  started,
}) => {
  const countUpRef = useRef<CountUp>(null);

  useEffect(() => {
    if (countUpRef.current && started) {
      countUpRef.current.start();
    }
  }, [started]);

  return (
    <div className="flex w-full flex-col gap-3 border-r-2 p-4 text-center sm:w-1/2 sm:border-b-2 md:w-1/4 md:border-b-0 lg:border-r-2">
      <CountUp
        start={started ? start : undefined}
        end={end}
        duration={duration}
        ref={countUpRef}
      >
        {({ countUpRef }) => (
          <div>
            <h2 className="text-5xl font-bold" ref={countUpRef} />
            <p className="text-xl font-semibold">{suffix}</p>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Strength;
