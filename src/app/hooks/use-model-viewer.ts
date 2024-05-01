import { useRef } from "react";
import type { ModelViewerElement } from "../types";

export const useModelViewer = () => useRef<ModelViewerElement>(null);
