/**
 * This class is the main view for the application. It is specified in app.js as
 * the "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('Extjs6App.view.main.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'app-main',

	requires : [ 'Ext.plugin.Viewport', 'Ext.window.MessageBox', 'Extjs6App.view.main.MainController',
			'Extjs6App.view.main.MainModel', 'Extjs6App.view.main.List' ],

	controller : 'main',
	viewModel : 'main',
	// ui : 'navigation',
	tabBarHeaderPosition : 1,
	titleRotation : 0,
	tabRotation : 0,

	header : {
		layout : {
			align : 'stretchmax'
		},
		title : {
			bind : {
				text : '{name}'
			},
			flex : 0
		},
		iconCls : 'x-fa fa-th-list'
	},

	tabBar : {
		flex : 1,
		layout : {
			align : 'stretch',
			overflowHandler : 'none'
		}
	},

	responsiveConfig : {
		tall : {
			headerPosition : 'top'
		},
		wide : {
			headerPosition : 'left'
		}
	},

	defaults : {
		bodyPadding : 20,
		tabConfig : {
			plugins : 'responsive',
			responsiveConfig : {
				wide : {
					iconAlign : 'left',
					textAlign : 'left'
				},
				tall : {
					iconAlign : 'top',
					textAlign : 'center',
					width : 120
				}
			}
		}
	},

	items : [ {
		title : 'Home',
		iconCls : 'x-fa fa-home',
		// The following grid shares a store with the classic version's grid as
		// well!
		items : [ {
			xtype : 'mainlist'
		} ]
	}, {
		title : 'My ResponsiveColumn Panel',
		iconCls : 'x-fa fa-user',
		items : {
			xtype : 'myResponsivePanel'
		}
	}, {
		title : 'JsonStore ViewModel View',
		iconCls : 'x-fa fa-user',
		items : {
			xtype : 'myJsonStoreVMView'
		}
	}, {
		title : 'JsonStore ViewModel View',
		iconCls : 'x-fa fa-user',
		items : {
			xtype : 'myJsonStoreVMView'
		}
	} ,{
		title : 'Data,Model演示',
		iconCls : 'x-fa fa-user',
		items : {
			xtype : 'ModelDemoView'
		}
	}]
});