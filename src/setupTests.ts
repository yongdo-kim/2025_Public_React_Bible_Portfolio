import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

//최상위에 있으면 미리 감지. 
afterEach(() => {
  cleanup();
});
