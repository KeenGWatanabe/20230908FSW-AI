// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
		document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";
		}
	else if(inputText.toLowerCase().indexOf("god")>-1){
		document.getElementById("answer").innerHTML='<a href="https://www.theguardian.com/education/2004/mar/08/highereducation.uk1#:~:text=A%20scientist%20has%20calculated%20thatexistence%20of%20an%20omnipotent%20being."  target="_blank">A scientist has calculated that there is a 67% chance that God exists</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("the developer")>-1){
		document.getElementById("answer").innerHTML='<a href="http://web.mckeen.sg" target="_blank">developer</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("weather")>-1){
		document.getElementById("answer").innerHTML='<a href="http://www.weather.gov.sg/lightning/lightning/lightningalertinformationsystem.jsp"  target="_blank">click for SG weather</a><br><a href="https://map.worldweatheronline.com/" target="_blank">click for satelite world weather</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("work")>-1){
		document.getElementById("answer").innerHTML="Please quote which department work"; 	
		}
	else if(inputText.toLowerCase().indexOf("fengshui")>-1){
		document.getElementById("answer").innerHTML='Feng shui literally translates from Chinese as “wind” (feng) and water (“shui”). It is the art of arranging buildings, objects, space and life to achieve harmony and balance. Feng shui works on the assumption that the world is driven by unseen forces. The idea behind it is to “unblock” the way, so the forces may flow freely and create balance in a space (or life).<br><a href="https://www.fengshuiworld.sg/what-is-fengshui/" target="_blank">know more</a>';
		}
	else if(inputText.toLowerCase().indexOf("qimen")>-1){
		document.getElementById("answer").innerHTML='Qimen Dunjia is an ancient form of Chinese Divination based on Chinese metaphysical and Fengshui concepts. It is an extremely potent and accurate forecasting tool that predicts the possible outcomes of any situation by revealing the hidden causes and effects influencing your unique situation, allowing you to implement strategies to get the ideal outcome, every time.<br><a href="https://www.fengshuiworld.sg/services/qimen-dunjia-consultation/" target="_blank">know more</a>';
		}
	else if(inputText.toLowerCase().indexOf("pay")>-1){
		document.getElementById("answer").innerHTML='<a href="https://docs.google.com/spreadsheets/d/1nh1VARso7yJh-EI5ipXCwS_nx0FUJQScb7ZD0eh6Kvc/edit#gid=1389556655" target="_blank">pay suppliers</a><br><a href="https://docs.google.com/spreadsheets/d/1uFwn7pmCXhPz2u0maLk-vjcToJMX-15z0tJ04s4Ml0Y/edit?&single=false#gid=368985573" target="_blank">pay pettycash claims</a><br><a href="https://infinity.uobgroup.com/" target="_blank">pay staff salaries</a><br>'; 	
		}
	else if(inputText.toLowerCase().indexOf("x")>-1){
		document.getElementById("answer").innerHTML="";
		}
	else if(inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML='<a href="" target="_blank">mt</a>';
		}	
	else if(inputText.toLowerCase().indexOf("xxx")>-1){
		document.getElementById("answer").innerHTML='<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>'; 	
	} else {
		document.getElementById("answer").innerHTML='Please rephrase your query,<br>not in our database yet,<br>or out-of-scope for FengShuiWorld<br><a href="mailto:roger.goh@fengshuiworld.page?%20subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FSW AI developer" target="_blank">email us your enquiry</a>';      
	}

	
}