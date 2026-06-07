

export interface ServerPlugin {
    OnServerStart(): void;
    readonly name: string;
    readonly guid: string;
}

export const plugins: (new() => ServerPlugin)[] = [];

export function Plugin() {
    return function(target: new() => ServerPlugin){
        plugins.push(target);
    }
}
