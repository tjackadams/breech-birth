declare module "*.md" {
  const attributes: Record<string, unknown>;
  export { attributes };
}

declare module "*.md" {
  import React from "react";
  const react: React.VFC;
  export { react };
}

declare module "*.md" {
  const html: string;
  export { html };
}

declare module "rehype-add-classes";