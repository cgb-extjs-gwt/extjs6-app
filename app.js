/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Extjs6App.Application',

    name: 'Extjs6App',

    requires: [
        // This will automatically load all classes in the Extjs6App namespace
        // so that application classes do not need to require each other.
        'Extjs6App.*'
    ],

    // The name of the initial view to create.
    mainView: 'Extjs6App.view.main.Main'
});
