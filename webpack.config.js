const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, 'tsconfig.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: "sericyOmTestShellUi",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new ModuleFederationPlugin({
            library: { type: "module" },

            shared: share({
                "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
                "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
                "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@ngx-translate/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@grenzebachdigital/security-kit": { singleton: true, strictVersion: true, requiredVersion: "auto" },
                "@grenzebachdigital/visu-components": { singleton: true, strictVersion: true, requiredVersion: "auto", includeSecondaries: true  },
                "@grenzebachdigital/visu-compose": { singleton: true, strictVersion: true, requiredVersion: "auto" },
                "@grenzebachdigital/visu-engine": { singleton: true, strictVersion: true, requiredVersion: "auto" },
                "@grenzebachdigital/visu-signalr": { singleton: true, strictVersion: true, requiredVersion: "auto" },
                "@grenzebachdigital/visu-styles": { singleton: true, strictVersion: true, requiredVersion: "auto" },
                "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

                ...sharedMappings.getDescriptors()
            })

        }),
        sharedMappings.getPlugin()
    ],
};
