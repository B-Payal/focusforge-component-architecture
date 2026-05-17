import TaskItem from "../shared/TaskItem";

export default function TaskList({
  filtered,
  toggleTask,
  deleteTask
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {filtered.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <div>🎯</div>
          <div>No tasks found</div>
        </div>
      )}

      {filtered.map((task) => (
  <TaskItem
    key={task.id}
    task={task}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
  />
))}
    </div>
  );
}