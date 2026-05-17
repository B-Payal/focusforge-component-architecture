# Changes Made

- Refactored the large `DashboardPage.jsx` into smaller, focused components for better readability and maintainability.
- Extracted page-specific components:
  - `DashboardHeader`
  - `StatsRow`
  - `AddTaskInput`
  - `TasksFilterBar`
  - `TaskList`
- Created reusable shared components:
  - `StatCard` for individual dashboard statistics cards
  - `TaskItem` for rendering each task row
- Kept all state management and task logic (`add`, `delete`, `toggle`, `filter`, `search`) inside `DashboardPage.jsx`.
- Passed data and event handlers through props to keep components modular and reusable.

# Why These Changes

This refactor improves code organization by separating UI into smaller components with single responsibilities. It makes the code easier to read, debug, update, and reuse without changing the app’s functionality or design.

## Deployed link

https://focusforge-component-architecture.vercel.app/