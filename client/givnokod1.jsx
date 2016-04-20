import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main2 extends React.Component{
	constructor(props) {
		super(props);
	}

	function delMessage(id,posted) {
					if (confirm("Удалить сообщение от "+posted+" ?")) {
	                    if('corporate'=='common')
						{
	                        window.location="/forum/theme/?id=22213&delmsg="+id;
	                    }
	                    else if ('corporate'=='olimpic')
	                    {
	                        window.location="/competitions/kazah/team/?teamId=0&tab=forum&themeId=22213&delmsg="+id;
	                    }
	                    else if ('corporate'=='city')
	                    {
	                        window.location="/city/?id=&tab=forum&themeId=22213&delmsg="+id;
	                    }
	                    else
	                    {
	                        window.location="/corporation/?id=1401150&tab=forum&themeId=22213&delmsg="+id;
	                    }
					}
				}
  function addMessage() {
			document.messageForm.submit();
          }
          function closeMessage() {
			var textarea=document.getElementById("messagetext");
              if (textarea) textarea.value="";
              var div=document.getElementById("submit");
              if (div) div.style.display="none";
          }
          function showSubmit() {
          	showElement("submit");
          }
          function messageKeyDown(event) {
      	if (!event) event=window.event;
              if (event.keyCode==13 && event.ctrlKey || event.keyCode==10) {
              addMessage();
              }
  }

	render(){
		return(
			<div>
				Hello world
			</div>
		);
	}
}


ReactDOM.render(
	<Main2 />,
	document.getElementById('main_app')
);
