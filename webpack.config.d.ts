export namespace resolve {
    const extensions: string[];
}
export const mode: string;
export const entry: string;
export namespace output {
    const path: string;
    const filename: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        use: string[];
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                modules: {
                    mode: string;
                    localIdentName: string;
                    auto: RegExp;
                };
            };
        })[];
        exclude?: undefined;
    } | {
        test: RegExp;
        use: {
            loader: string;
        }[];
        exclude?: undefined;
    })[];
}
export const plugins: import("html-webpack-plugin")[];
export namespace devServer {
    const port: number;
    const open: boolean;
    const hot: boolean;
}
export const devtool: string;
