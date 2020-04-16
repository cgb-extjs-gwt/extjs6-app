Ext.define('Extjs6App.view.data.ModelDemoView', {
	extend : 'Ext.panel.Panel',
	xtype : 'ModelDemoView',
	items : {
		xtype : 'form',
		tbar : [ {
			text : 'Model关联',
			handler : function() {
				/*Kingdom.load(1, {
				    callback: function(kingdom) {
				        console.log('Kingdom: ' + kingdom.get('name'));
				    }
				});*/
				var kingdoms = new Ext.data.Store({
				    model: 'Extjs6App.model.Kingdom',
				    proxy: {
				        type: 'ajax',
				        url: 'app/data/kingdomlist.json',
				        reader: {
				            type: 'json',
				            rootProperty: 'datas'
				        }
				    }
				});
				kingdoms.load(function(records){
					var record = records[0];
					alert(record.generals().first().get("full"));
					/*var kingdom = kingdoms.first(),
					generals = kingdom.generals();
					
					console.log(generals.getCount());
					alert(generals);*/
				});
			}
		} ]

	}
});