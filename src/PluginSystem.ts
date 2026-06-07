

export interface ServerPlugin {
    OnServerStart(): void;
    readonly name: string;
    readonly guid: string;
}

export const plugins: ServerPlugin[] = [];

export function Plugin(target: new() => ServerPlugin) {
    const ins = new target();
    plugins.push(ins);
}
