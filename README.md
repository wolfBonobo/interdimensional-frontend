# 🌌 Interdimensional App - Rick & Morty Monitoring Hub

This project is a high-performance monitoring dashboard built with **Angular 18**, designed to track the Rick & Morty multiverse. It implements a domain-driven architecture with a fully reactive data flow.

---

## 🚀 Architecture & Patterns

The application follows the **WolfBonobo Blueprints**, ensuring a strict separation of concerns:

- **Container/Presenter Pattern**: Pages act as "Smart Components" (Containers) that orchestrate state and data fetching. UI components are "Dumb Components" (Presenters), focused solely on rendering.
- **Layered Feature Folders**: Every feature (`Characters`, `Locations`, `Episodes`) is encapsulated into four distinct layers:
  1. **Domain**: Pure TypeScript interfaces and models (No Angular dependencies).
  2. **Data Access**: Services for HTTP communication and **Facades** for state management.
  3. **UI**: Reusable presentational components (Cards, Lists).
  4. **Pages**: Route-level components managed via _Lazy Loading_.
- **Reactive State Management (RxJS)**: State is managed using `BehaviorSubject` within Facades, providing a robust stream-based architecture that ensures UI synchronization via the `AsyncPipe`.
- **Hexagonal Backend Integration**: Fully synchronized with a Spring Boot Microservice implementing Hexagonal Architecture and CQRS.

---

## 📁 Project Structure

The project follows a **Feature-Based Layered Architecture**, strictly separating business logic from UI presentation:

```text
src/app/
├── core/                        # Global "Singleton" layer
│   ├── auth/                    # Authentication guards and logic
│   ├── http/                    # HTTP configuration
│   │   └── api-config.ts        # Centralized API Base URL
│   ├── layout/                  # Core layout components (Shell, Footer)
│   └── settings/                # Global app settings
├── shared/                      # Reusable cross-feature layer
│   ├── directives/              # Global custom directives
│   ├── pipes/                   # Global data transformation pipes
│   └── ui/                      # Stateless shared components
│       ├── navbar/              # Main navigation hub
│       └── pagination/          # Reusable navigation control
└── features/                    # Business Domain layer (L1, L2, L3 features)
    ├── characters/              # Character Management Feature
    │   ├── data-access/         # Services & Facades (State & API)
    │   ├── domain/              # Lighter-than-air TS Interfaces
    │   ├── pages/               # Smart Components (Route Containers)
    │   └── ui/                  # Dumb Components (Presentational Cards/Lists)
    ├── episodes/                # Episode Archive Feature
    │   ├── data-access/         # Logic to resolve Characters in Episodes
    │   ├── domain/              # Episode DTO definitions
    │   ├── pages/               # Episode list and detail containers
    │   └── ui/                  # Episode-specific UI components
    └── locations/               # Location Index Feature
        ├── data-access/         # Location-specific state management
        ├── domain/              # Location data models
        ├── pages/               # Location route handlers
        └── ui/                  # Presentational location cards
```

---

### 4. API and Setup

The application consumes data from the local **Hexagonal Microservice**. You can find the backend source code here: [https://github.com/wolfBonobo/interdimensional-service](https://github.com/wolfBonobo/interdimensional-service)

## 📡 API Endpoints

The frontend communicates with the service at `http://localhost:8080/api/v1`:

### 📜 List and Search

| Resource       | Endpoint      | Query Parameters                                      |
| :------------- | :------------ | :---------------------------------------------------- |
| **Characters** | `/characters` | `page`, `name`, `status`, `species`, `type`, `gender` |
| **Locations**  | `/locations`  | `page`, `name`, `type`, `dimension`                   |
| **Episodes**   | `/episodes`   | `page`, `name`, `episodeCode`                         |

### 🔍 Individual Resource Detail

| Resource      | Endpoint           | Description                                |
| :------------ | :----------------- | :----------------------------------------- |
| **Character** | `/characters/{id}` | Retrieve profile for a specific subject    |
| **Location**  | `/locations/{id}`  | Retrieve data for a specific sector        |
| **Episode**   | `/episodes/{id}`   | Retrieve log for a specific timeline event |

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/wolfBonobo/interdimensional-frontend.git](https://github.com/wolfBonobo/interdimensional-frontend.git)
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Launch the portal**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200` to start monitoring the multiverse.

## 📏 Naming & File Conventions

The project strictly follows these naming patterns to ensure architectural consistency across all interdimensional features:

| Concept       | Pattern               | Example                        | Location                 |
| ------------- | --------------------- | ------------------------------ | ------------------------ |
| **Container** | `*-page.component.ts` | `characters-page.component.ts` | `features/*/pages`       |
| **Presenter** | `*.component.ts`      | `character-card.component.ts`  | `features/*/ui`          |
| **Facade**    | `*-facade.service.ts` | `characters-facade.service.ts` | `features/*/data-access` |
| **Service**   | `*.service.ts`        | `characters.service.ts`        | `features/*/data-access` |
| **Model**     | `*.ts`                | `character.ts`                 | `features/*/domain`      |

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

## 📡 Development Commands

```bash
npm install
npm start
npm test
npm run build
```

---

## 📚 Philosophy

- Separate UI from logic
- Make architecture explicit
- Reduce cognitive load
- Optimize for scale and maintainability

---

## 📄 License

MIT — use it freely.
