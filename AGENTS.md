# Agent Guidelines for johmara.github.io

## Build/Test Commands
- **Dev server**: `npm start` (serves at localhost:4200)
- **Build**: `npm run build` (production) or `npm run watch` (development with watch)
- **Test**: `npm test` (runs Karma/Jasmine tests)
- **Single test**: `ng test --include='**/component-name.component.spec.ts'`

## Code Style
- **Framework**: Angular 18.2 with standalone components, TypeScript 5.4, strict mode enabled
- **Imports**: Group Angular core first, then Angular modules, third-party libraries, then local imports (models, services, components)
- **Components**: Use standalone components with explicit imports array; selector prefix 'app-'; use `styleUrl` (singular) for single component styles
- **Styling**: SCSS files for component styles (configured in angular.json); Angular Material with indigo-pink theme
- **Types**: Strict TypeScript enabled - always provide explicit types, no implicit any, noImplicitReturns, noFallthroughCasesInSwitch
- **Models**: Use interfaces for data models in src/app/models/ (e.g., project.model.ts, publication.model.ts)
- **Services**: Use `@Injectable({ providedIn: 'root' })` for singleton services; inject HttpClient for data fetching
- **Naming**: PascalCase for classes/interfaces, camelCase for variables/methods, kebab-case for file names
- **Observables**: Use RxJS observables for async operations, type Observable<T> return values explicitly
- **Error handling**: Handle HTTP errors in services, propagate typed errors to components
- **File structure**: Component files include .ts, .html, .scss; keep components focused and modular
- **Lifecycle hooks**: Implement OnInit interface and use ngOnInit() for initialization logic
