Ext.define('Osxm.main.myJsonStoreVMView', {
	extend : 'Ext.panel.Panel',
	xtype : 'myJsonStoreVMView',

	layout : 'form',
	title : 'Hello',
	viewModel : {
		type : 'jsonStoreViewModel' // 使用视图模型的alias属性："viewmodel.user"
	},

	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'First Name',
		bind : '{firstName}'
	}, {
		fieldLabel : 'Last Name',
		bind : '{lastName}'
	}, {
		xtype : 'button',
		text : 'Submit'
	} ]
});
