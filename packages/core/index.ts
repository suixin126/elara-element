import { makeInstaller } from "@elara-element/utils";
import components from "./components.ts";
import '@elara-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@elara-element/components";
export default installer;