Ext.define('Extjs6App.model.Kingdom', {
    extend: 'Extjs6App.model.Base',
    fileds:[{
        name: 'id',
        type: 'int'
    },'name'],
    hasMany: 'General'
    /*proxy: {
        type: 'kingdomproxy',
        schema: false
    }*/
});
