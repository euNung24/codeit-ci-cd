module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ["@babel/preset-react", {
            runtime: "automatic", // React 자동 import 설정
        }],
        '@babel/preset-typescript',
    ],
};
