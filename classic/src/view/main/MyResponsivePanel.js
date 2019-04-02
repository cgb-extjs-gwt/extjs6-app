Ext.define('Osxm.panle.MyResponsivePanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'myResponsivePanel',
	// height:'100%',
	scrollable : 'y',
	width:'100%',
	requires : [ 'Ext.ux.layout.ResponsiveColumn' ],
	layout: 'responsivecolumn',
	items : [ {
		xtype : 'panel',
		height : 100,
		userCls : 'big-50 small-100',
		title : 'Panel 1'
	}, {
		xtype : 'panel',
		height : 100,
		userCls : 'big-50 small-100',
		title : 'Panel 2'
	} ]
});