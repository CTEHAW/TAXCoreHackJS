

export interface ServerPlugin {
    OnServerStart(): void;
    readonly name: string;
    readonly guid: string;
}

export const plugins: ServerPlugin[] = [];

export function Plugin() {
    return function(target: ServerPlugin){
        plugins.push(target);
    }
}
