import { render } from "@modern-js/runtime/browser";
import { createRoot } from "@modern-js/runtime/react";

const ModernRoot = createRoot();

console.log("ModernRoot@bootstrap", ModernRoot);

void render(<ModernRoot />);
