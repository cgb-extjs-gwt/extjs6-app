Ext.define('Osxm.view.UserViewModel', {
		extend : 'Ext.app.ViewModel',

		alias : 'viewmodel.jsonStoreViewModel', //
	
		stores : {
			userInfo : {
				autoLoad:true,
				proxy : {
					type : 'ajax',
					url : '/app/data/data.json',
					reader : {
						type : 'json',
						rootProperty : 'user'
					}
				}
			}
		},
	    formulas: {	
			 user:function(get){
				var vm = this, userInfoStore  = this.get('userInfo');
				get('userInfo').on({load:function(){
					//vm.notify(); 
					vm.setData(userInfoStore.first().data);
					//vm.set('firstName',userInfoStore.first().data.firstName); 
					//vm.set('lastName',userInfoStore.first().data.lastName); 
				}});			
			}
	    }
	});
