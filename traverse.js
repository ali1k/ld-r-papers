InitialConfig = {initial application configuration}
Context = [array of scopes with the corresponding configuration objects]
Config = InitialConfig
for (i = 15; i < 1; i--) {
    Config.compareWith(Context[i]) {
        Config.addMissingAttributes()
        Config.overwriteExistingAttributes()
    }
}
