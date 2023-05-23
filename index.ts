import { demo } from './practice';
demo()

// type getFuncParams<func extends Function> = func extends (...params: infer params) => unknown ? params : never;

// type params = getFuncParams<(a: string, b: number) => void>;

// const otherFunc = (a: string, b: number) => {};

// type otherParams = getFuncParams<typeof otherFunc>;
