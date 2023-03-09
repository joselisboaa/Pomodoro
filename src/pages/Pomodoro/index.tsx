import { BaseLayout } from "../../shared/components/layouts/BaseLayout";
import { Clock } from "../../shared/components/Clock";
import { TimeAction } from "../../shared/components/TimeAction";
import { Task } from "../../shared/components/Task";
import { PomodoroNavigation } from "../../shared/components/PomodoroNavigation";

export const Pomodoro = () => {
  return (
    <BaseLayout>
      <PomodoroNavigation />
      <Clock/>
      <TimeAction />
      <Task task="Tarefa"/>
    </BaseLayout>
  )
}