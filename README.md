# Angular Container/Presenter Blueprint

A template repository for building **scalable Angular applications** using a clean **Container/Presenter architecture**, feature-based structure, and strict separation between UI and business logic.

This blueprint defines **clear architectural boundaries** that scale well for medium and large Angular frontends.

---

## 🧱 Architecture Overview

This template implements the **Container / Presenter Pattern** with explicit layers per feature.

### Page Components (Containers / Smart)

- Route-level components.
- Handle orchestration, navigation, and data flow.
- Inject facades and interact with the router.
- Do **not** contain UI logic.

Example:

```
features/todos/pages/todos-page/
```

---

### UI Components (Presenters / Dumb)

- Pure presentational components.
- Stateless and reusable.
- Receive data via `@Input()`.
- Emit events via `@Output()`.
- No business logic, no services, no router.

Example:

```
features/todos/ui/todos-list/
features/todos/ui/todos-stats/
```

---

### Domain Layer

- Pure TypeScript.
- Business language only (models, types, rules).
- No Angular or framework dependencies.

Example:

```
features/todos/domain/
```

---

### Data-Access Layer

- Facades + services.
- Facade is the **single entry point** for feature state and logic.
- Services encapsulate HTTP or external APIs.

Example:

```
features/todos/data-access/
```

---

## 📁 Project Structure

```text
src/app/
 ├─ core/                          # Global services, interceptors, guards
 ├─ shared/                        # Reusable UI and utilities
 │   ├─ ui/                        # Generic presentational components
 │   ├─ directives/
 │   └─ pipes/
 └─ features/
     └─ todos/                     # Example feature
         ├─ domain/
         │   └─ todo.model.ts
         ├─ data-access/
         │   ├─ todos.facade.ts
         │   ├─ todos.service.ts
         │   └─ *.spec.ts
         ├─ pages/
         │   └─ todos-page/
         │       ├─ todos-page.component.ts
         │       ├─ todos-page.component.html
         │       ├─ todos-page.component.css
         │       └─ todos-page.component.spec.ts
         └─ ui/
             ├─ todos-list/
             └─ todos-stats/
```

---

## 📏 Naming & File Conventions

| Concept       | Pattern               | Example                   | Location                 |
| ------------- | --------------------- | ------------------------- | ------------------------ |
| **Container** | `*-page.component.ts` | `todos-page.component.ts` | `features/*/pages`       |
| **Presenter** | `*.component.ts`      | `todos-list.component.ts` | `features/*/ui`          |
| **Facade**    | `*.facade.ts`         | `todos.facade.ts`         | `features/*/data-access` |
| **Service**   | `*.service.ts`        | `todos.service.ts`        | `features/*/data-access` |
| **Model**     | `*.model.ts`          | `todo.model.ts`           | `features/*/domain`      |

---

## 🧰 Tech Stack

| Component     | Version | Notes                                |
| ------------- | ------- | ------------------------------------ |
| Angular       | 18+     | Standalone components, signals ready |
| Node          | 20+     | Recommended LTS                      |
| RxJS          | 7+      | Reactive streams                     |
| TypeScript    | Strict  | Enforced by template                 |
| Nx (Optional) | Latest  | Optional monorepo scaling            |

---

## 🧩 Example Feature: Todos

### TodosPageComponent (Page / Container)

- Loads todos
- Injects `TodosFacade`
- Handles user actions
- Delegates rendering to UI components

### TodosListComponent (UI / Presenter)

- Displays todo list
- Emits `toggle` and `remove` events

### TodosStatsComponent (UI / Presenter)

- Displays aggregated counters

### TodosFacade

- Orchestrates feature state
- Connects pages with services
- Encapsulates business logic

### TodosService

- Handles HTTP or mock API calls

---

## 📡 Development Commands

```bash
npm install
npm start
npm test
npm run build
```

---

## ⚙️ Base Application Configuration

- Standalone Angular application
- Strict TypeScript enabled
- Feature-based routing
- Shared UI library (`shared/ui`)
- Global styles in `styles.css`

---

## 🧪 Testing Strategy

### Unit Tests

- UI components
- Page components
- Facades
- Services

### Integration Tests

- Feature-level rendering
- Page ↔ UI interaction

### E2E (Optional)

- Cypress or Playwright

---

## 🚫 Dependency Rules (Non-Negotiable)

- `ui/**` must not import `data-access/**`
- `domain/**` must not import Angular
- `core/**` must not depend on `features/**`
- `pages/**` is the only smart layer

---

## 🚀 Getting Started

1. Click **Use this template**
2. Clone the repository
3. Install dependencies
4. Use the Todos feature as reference

---

## 📚 Philosophy

- Separate UI from logic
- Make architecture explicit
- Reduce cognitive load
- Optimize for scale and maintainability

If this template fails, statistically speaking, the issue is human-related.

---

## 📄 License

MIT — use it freely.
