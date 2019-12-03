# Issue with jest-junit

When there are TypeScript compilation errors, they are not written to `junit.xml` file.

## Steps to reproduce

1. Run `npm i`
2. Run `npm test`
3. See there is a compilation error  
   `spec/test.spec.ts:10:35 - error TS2339: Property 'hello' does not exist on type 'HelloScreamer'.`
4. See the error is reported by the console (default) reporter  
   `Test Suites: 1 failed, 1 total`
5. The compilation error is not written to `junit.xml`