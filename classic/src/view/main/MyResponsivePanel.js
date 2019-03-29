Ext.define('Extjs6App.view.MyResponsivePanel', {
		    extend: 'Ext.container.Container',
		    xtype: 'responsivePanel',

		    requires: [
		        'Ext.ux.layout.ResponsiveColumn'
		    ],
		    layout: 'responsivecolumn',
		    items: [
		        {
		            xtype: 'panel',
		            title:'Panel 1',
		            userCls: 'big-100'
		        },
		        {
		            xtype: 'panel',
		            title:'Panel 2',
		            userCls: 'big-50 small-100'
		        },
		        {
		            xtype: 'panel',
		            title:'Panel 3',
		            userCls: 'big-50 small-100'
		        }
		    ]
		});	