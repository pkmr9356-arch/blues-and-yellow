# Testing Patterns

**Analysis Date:** 2026-10-24

## Test Framework

**Runner:**
- Not installed / Not configured
- Config: None (`jest.config.*` and `vitest.config.*` are absent)

**Assertion Library:**
- None installed

**Run Commands:**
```bash
# No test scripts are currently configured in package.json
```

## Test File Organization

**Location:**
- Currently 0 test files exist in `src/`.
- Recommended pattern when implemented: Colocate unit tests alongside components (`src/components/ProjectInquiryForm.test.tsx`) or in an adjacent `__tests__/` directory.

**Naming:**
- Recommended: `*.test.ts` for logic/actions, `*.test.tsx` for React components.

**Structure:**
```
src/
├── components/
│   ├── ProjectInquiryForm.tsx
│   └── ProjectInquiryForm.test.tsx      # (Target convention)
└── app/
    └── actions/
        ├── submit-inquiry.ts
        └── submit-inquiry.test.ts        # (Target convention)
```

## Test Structure

**Suite Organization (Recommended Target):**
```typescript
import { describe, it, expect, vi } from 'vitest';
import { submitInquiry } from '@/app/actions/submit-inquiry';

describe('submitInquiry Server Action', () => {
  it('saves inquiry to Supabase and dispatches Resend notification', async () => {
    const formData = new FormData();
    formData.append('name', 'Alice');
    formData.append('email', 'alice@example.com');
    formData.append('message', 'Need a website redesign');

    const result = await submitInquiry(formData);
    expect(result.success).toBe(true);
  });
});
```

**Patterns:**
- Setup: Reset mock state before each test run
- Teardown: Clean up DOM mounts or database sandbox tables
- Assertion: Validate return shapes `{ success: true }` and check database mock calls

## Mocking

**Framework:**
- Not configured

**Target Patterns:**
```typescript
vi.mock('@/lib/supabase-server', () => ({
  createClient: vi.fn(() => ({
    from: vi.fn().mockReturnValue({
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({ data: [{ id: 1 }], error: null }),
      }),
    }),
  })),
}));

vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: 'email_123' }, error: null }),
    },
  })),
}));
```

**What to Mock:**
- Network boundaries: Supabase API calls and Resend email transmission
- Browser globals during SSR testing (e.g., `window.matchMedia` in GSAP triggers)

**What NOT to Mock:**
- Zod schema validation logic
- Pure React component rendering and state transitions

## Fixtures and Factories

**Test Data:**
```typescript
export const mockInquiryPayload = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  project_summary: 'Looking for a custom web platform',
  service_interest_ids: [],
  status: 'new',
};
```

**Location:**
- When added, store fixtures in `src/testing/fixtures/` or `test/mocks/`.

## Coverage

**Requirements:**
- None enforced currently.

**View Coverage:**
```bash
# Target command upon test harness addition:
npm run test -- --coverage
```

## Test Types

**Unit Tests:**
- Needed for server action validation (`src/app/actions/submit-inquiry.ts`) and custom utility functions.

**Integration Tests:**
- Needed for inquiry form submission flow (`src/components/ProjectInquiryForm.tsx` interacting with Server Action).

**E2E Tests:**
- Not used. Playwright is recommended for full user flows (landing page -> services -> contact form submission -> admin lead inspection).

## Common Patterns

**Async Testing:**
- Await Server Actions directly in test suites:
  ```typescript
  const response = await submitInquiry(formData);
  expect(response.success).toBe(true);
  ```

**Error Testing:**
- Verify error branches when database insert rejects:
  ```typescript
  mockSupabaseInsertError();
  const response = await submitInquiry(formData);
  expect(response.success).toBe(false);
  expect(response.error).toBe('Database error');
  ```

---

*Testing analysis: 2026-10-24*
