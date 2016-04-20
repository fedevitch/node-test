import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main2 extends React.Component{
	constructor(props) {
		super(props);
	}

	applications_menu_container.find('a').click(function () {
    if ($(this).parent('.disabled').length === 0 || $(this).parent('.active').length === 0) {
        applications_menu_container.find('li').removeClass('active');
        $(this).parent().addClass('active');

        switch ($(this).attr('id')) {
            case 'active_applications':
                applications_history_container.hide();
                applications_history_pagination_toolbar.hide();
                application_add_container.hide();
                active_applications_sub_menu.hide();
                change_application_sub_container.hide();
                application_history_sub_container.hide();
                application_files_sub_container.hide();
                applications_history_sub_menu.hide();
                historical_application_history_sub_container.hide();
                historical_application_files_sub_container.hide();
                load_active_applications(0, 10);
                break;
            case 'applications_history':
                active_applications_container.hide();
                active_applications_bottom_toolbar.hide();
                application_add_container.hide();
                active_applications_sub_menu.hide();
                change_application_sub_container.hide();
                application_history_sub_container.hide();
                application_files_sub_container.hide();
                applications_history_sub_menu.hide();
                historical_application_history_sub_container.hide();
                historical_application_files_sub_container.hide();
                load_applications_history(0, 10);
                break;
            case 'new_application':
            default:
                active_applications_container.hide();
                active_applications_bottom_toolbar.hide();
                applications_history_container.hide();
                applications_history_pagination_toolbar.hide();
                active_applications_sub_menu.hide();
                change_application_sub_container.hide();
                application_history_sub_container.hide();
                application_files_sub_container.hide();
                applications_history_sub_menu.hide();
                historical_application_history_sub_container.hide();
                historical_application_files_sub_container.hide();
                show_add_application_form();
                break;
        }
    }

    return false;
});

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
