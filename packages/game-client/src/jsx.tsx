// Workaround for jsx issue see : https://github.com/jorgebucaran/hyperapp/issues/462
import { h } from "hyperapp";

export default function jsx(type: any, props: any, ...children: any) {
  return typeof type === "string"
    ? h(type, props || {}, children)
    : type(props || {}, children);
}
