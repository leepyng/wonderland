function wonderland(sentence){
	let that=this;
	let u=new Promise((survive,die)=>{
		let talk=sentence;
		that.sendMessageToCommunicationServer(talk,(response)=>{
			let msg=that.analysis(response);
			switch(msg){
				case 1:
					survive();
					break;
				case 0:
					die();
					break;
				default:
					die();
			}
		});
	}).then(()=>{
		that.youCanTryAgain();
	}).catch(()=>{
		let blood=that.caculateHowManyBloodToLose(Math.random*10);
		let remain=that.caculateHowManyBloodRemain(blood);
		if(remain<=0){
			that.gameOver();
			that.serverWillNeverRestart();
		}

	})
	return u;
}

function wonderland(sentence){
	let that=this;
	let u=new Promise((survive,die)=>{
		let talk=sentence;
		that.sendMessageToCommunicationServer(talk,(response)=>{
			let msg=that.analysis(response);
			switch(msg){
				case 1:
					survive();
					break;
				case 0:
					die();
					break;
				default:
					survive();
			}
		});
	}).then(()=>{
		that.bloodUptoNewLevel(Math.random*100);
	}).catch(()=>{
		let blood=that.caculateHowManyBloodToLose(Math.random*1);
		let remain=that.caculateHowManyBloodRemain(blood);
		if(remain<=0){
			that.gameWillRestart();
		}

	})
	return u;
}
